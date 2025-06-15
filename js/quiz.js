// NotaR333_OS - Quiz Engine v3.0 (Smart Learning Update)

let timerInterval;
let nextPunMilestone = 250;

/**
 * Starts a new quiz session.
 * @param {string} mode - 'drill', 'exam_sim', or 'weak_spots'.
 * @param {number} [questionCount] - The number of questions for drill/exam modes.
 */
function startQuiz(mode, questionCount) {
    let questionSet = [];
    if (mode === 'weak_spots') {
        if (state.weakSpotIds.length === 0) {
            alert("No weak spots to review!");
            return;
        }
        
        // --- WEIGHTED WEAK SPOT ALGORITHM ---
        const weightedPool = [];
        state.weakSpotIds.forEach(id => {
            const question = quizData.find(q => q.id === id);
            if (question) {
                // Add the question to the pool. Add it extra times based on how often it was wrong.
                const wrongCount = state.questionStats[id]?.wrong || 1;
                for (let i = 0; i < wrongCount; i++) {
                    weightedPool.push(question);
                }
            }
        });
        
        // Shuffle the weighted pool to randomize the order
        weightedPool.sort(() => 0.5 - Math.random());
        
        // Create the final question set, ensuring no duplicates if the pool is small
        questionSet = [...new Set(weightedPool)];

    } else {
        questionSet = [...quizData].sort(() => 0.5 - Math.random()).slice(0, questionCount);
    }

    quizState = {
        mode,
        questions: questionSet,
        currentIndex: 0,
        sessionPoints: 0,
        incorrectQuestions: [],
        timeLeft: mode === 'exam_sim' ? 3600 : null, // 60 minutes for exam
        correctStreak: 0,
        weaknessJustEliminated: false,
    };

    if (quizState.mode === 'exam_sim') {
        startTimer(quizState.timeLeft);
    } else {
        domElements.timerDisplay.classList.add('hidden');
    }

    showScreen('quiz');
    loadQuestion();
}

function startTimer(duration) {
    clearInterval(timerInterval);
    quizState.timeLeft = duration;
    domElements.timerDisplay.classList.remove('hidden');
    
    timerInterval = setInterval(() => {
        quizState.timeLeft--;
        let minutes = Math.floor(quizState.timeLeft / 60);
        let seconds = quizState.timeLeft % 60;
        domElements.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (quizState.timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resumeTimer() {
    if (quizState.mode === 'exam_sim' && quizState.timeLeft > 0) {
        startTimer(quizState.timeLeft);
    }
}

function loadQuestion() {
    domElements.answerButtons.innerHTML = ''; // Clear previous buttons
    const q = quizState.questions[quizState.currentIndex];
    
    // Reset temporary state for the new question
    quizState.weaknessJustEliminated = false;
    
    const progressPercent = ((quizState.currentIndex) / quizState.questions.length) * 100;
    domElements.progressBar.style.width = `${progressPercent}%`;
    domElements.progressText.textContent = `Question ${quizState.currentIndex + 1}/${quizState.questions.length}`;
    
    domElements.qEmoji.textContent = q.emoji;
    domElements.qText.textContent = q.question;
    
    const isWeakSpot = state.weakSpotIds.includes(q.id);
    domElements.weakSpotIndicator.textContent = isWeakSpot ? '[!]' : '';
    domElements.weakSpotIndicator.classList.remove('shatter'); // Reset shatter effect
    
    // Shuffle answers
    const answerPackages = q.options.map((optionText, index) => ({
        text: optionText,
        isCorrect: index === q.correct
    }));
    answerPackages.sort(() => 0.5 - Math.random());
    
    answerPackages.forEach(answerPackage => {
        const button = document.createElement('button');
        button.innerHTML = answerPackage.text;
        button.classList.add('btn', 'answer-btn');
        button.dataset.correct = answerPackage.isCorrect;
        domElements.answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedBtn) {
    pauseTimer();
    const isCorrect = selectedBtn.dataset.correct === 'true';
    const currentQuestion = quizState.questions[quizState.currentIndex];
    const questionId = currentQuestion.id;

    // Disable all buttons and show the correct answer
    Array.from(domElements.answerButtons.children).forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        }
    });

    if (isCorrect) {
        // --- WEAKNESS ELIMINATED CELEBRATION ---
        if (state.weakSpotIds.includes(questionId)) {
            quizState.weaknessJustEliminated = true;
            // Trigger the special haptic pattern
            triggerVibration('shatter');
            // Trigger the CSS animation on the indicator
            domElements.weakSpotIndicator.classList.add('shatter');
            checkMidQuizCheevos('weakness_eliminated');
        } else {
            // Standard correct answer vibration
            triggerVibration('correct');
        }
        
        quizState.sessionPoints += currentQuestion.points;
        quizState.correctStreak++;
        
        // Remove from weak spots and add to mastered
        state.weakSpotIds = state.weakSpotIds.filter(id => id !== questionId);
        if (!state.masteredIds.includes(questionId)) {
            state.masteredIds.push(questionId);
        }

        domElements.explanationTitle.textContent = `Correct! (+${currentQuestion.points} pts)`;
        checkMidQuizCheevos('streak'); // Check for streak achievement
        
    } else { // Incorrect answer
        triggerVibration('incorrect');
        selectedBtn.classList.add('wrong');
        quizState.correctStreak = 0; // Reset streak

        // Add to weak spots
        if (!state.weakSpotIds.includes(questionId)) {
            state.weakSpotIds.push(questionId);
            checkMidQuizCheevos('first_weak_spot');
        }
        
        // Add to incorrect questions for review
        quizState.incorrectQuestions.push({ ...currentQuestion, selectedAnswerText: selectedBtn.innerHTML });
        
        // Update stats
        state.questionStats[questionId] = { wrong: (state.questionStats[questionId]?.wrong || 0) + 1 };
        
        domElements.explanationTitle.textContent = `Incorrect!`;
    }

    // Update progress bar
    const newProgressPercent = ((quizState.currentIndex + 1) / quizState.questions.length) * 100;
    setTimeout(() => { domElements.progressBar.style.width = `${newProgressPercent}%`; }, 100);
    
    domElements.explanationText.textContent = currentQuestion.explanation;
    togglePopup('explanation', true);
}

function handleNextQuestion() {
    togglePopup('explanation', false);
    state.stats.totalQuestionsAnswered++; // Increment total questions answered
    quizState.currentIndex++;
    
    if (quizState.currentIndex < quizState.questions.length) {
        loadQuestion();
        resumeTimer();
    } else {
        showResults();
    }
}

function showResults() {
    clearSavedSession();
    pauseTimer();
    const previousRank = getCurrentRank();
    
    // Update total points and stats
    state.totalPoints += quizState.sessionPoints;
    state.stats.completedQuizCount++;
    
    // Update specific quiz type counters
    if(quizState.mode === 'drill') state.stats.completedDrills++;
    if(quizState.mode === 'exam_sim') state.stats.completedExams++;
    if(quizState.mode === 'weak_spots') state.stats.completedReviews++;

    // Track if user has ever had 5+ weak spots for the "Clean Slate" cheevo
    if (state.weakSpotIds.length >= 5) {
        state.stats.hadFiveWeakSpots = true;
    }
    
    const score = quizState.questions.length - quizState.incorrectQuestions.length;
    if (score > state.stats.personalBestScore) {
        state.stats.personalBestScore = score;
    }
    
    domElements.resultsSummaryText.textContent = `You scored ${score} out of ${quizState.questions.length}`;
    domElements.pointsEarnedText.textContent = `+${quizState.sessionPoints} Points!`;
    
    if (quizState.sessionPoints > 0) {
        triggerVibration('success');
    }
    
    // Check for rank up before saving
    const newRank = getCurrentRank();
    if (newRank.name !== previousRank.name) {
        setTimeout(() => triggerRankUp(newRank), 500);
    } else if (state.totalPoints >= nextPunMilestone) {
        const pun = puns[Math.floor(Math.random() * puns.length)];
        setTimeout(() => showToast(`😻 ${pun}`), 500);
        nextPunMilestone = Math.floor(state.totalPoints / 250 + 1) * 250;
    }
    
    // Check achievements at the end of the quiz
    checkAllCheevos();
    
    saveState();
    updateAllUI();
    
    domElements.reviewMissionBtn.classList.toggle('hidden', quizState.incorrectQuestions.length === 0);
    showScreen('results');
}

// --- Review Screen Logic ---

function startReview() {
    quizState.reviewIndex = 0;
    loadReviewItem();
    showScreen('review');
}

function loadReviewItem() {
    const item = quizState.incorrectQuestions[quizState.reviewIndex];
    domElements.reviewContent.innerHTML = `<div class="review-item"><h3>${item.emoji} ${item.question}</h3><p class="review-your-answer"><strong>Your Answer:</strong> ${item.selectedAnswerText}</p><p class="review-correct-answer"><strong>Correct Answer:</strong> ${item.options[item.correct]}</p><div class="review-explanation"><strong>Explanation:</strong> ${item.explanation}</div></div>`;
    
    domElements.reviewCounter.textContent = `${quizState.reviewIndex + 1} / ${quizState.incorrectQuestions.length}`;
    domElements.prevReviewBtn.disabled = quizState.reviewIndex === 0;
    domElements.nextReviewBtn.disabled = quizState.reviewIndex === quizState.incorrectQuestions.length - 1;
}