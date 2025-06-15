// NotaR333_OS - Quiz Engine v4.3 (Final Logic Fix)

let timerInterval;
let nextPunMilestone = 250;

function startQuiz(mode, questionCount) {
    let questionSet = [];
    if (mode === 'weak_spots') {
        if (state.weakSpotIds.length === 0) { alert("No weak spots to review!"); return; }
        const weightedPool = [];
        state.weakSpotIds.forEach(id => {
            const question = quizData.find(q => q.id === id);
            if (question) {
                const wrongCount = state.questionStats[id]?.wrong || 1;
                for (let i = 0; i < wrongCount; i++) {
                    weightedPool.push(question);
                }
            }
        });
        weightedPool.sort(() => 0.5 - Math.random());
        questionSet = [...new Set(weightedPool)];
    } else {
        questionSet = [...quizData].sort(() => 0.5 - Math.random()).slice(0, questionCount);
    }
    quizState = {
        mode, questions: questionSet, currentIndex: 0, sessionPoints: 0,
        incorrectQuestions: [], timeLeft: mode === 'exam_sim' ? 3600 : null,
        correctStreak: 0, weaknessJustEliminated: false,
    };
    if (quizState.mode === 'exam_sim') { startTimer(quizState.timeLeft); } 
    else { domElements.timerDisplay.classList.add('hidden'); }
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
        if (quizState.timeLeft <= 0) { clearInterval(timerInterval); showResults(); }
    }, 1000);
}

function pauseTimer() { clearInterval(timerInterval); }
function resumeTimer() { if (quizState.mode === 'exam_sim' && quizState.timeLeft > 0) startTimer(quizState.timeLeft); }

function loadQuestion() {
    domElements.answerButtons.innerHTML = '';
    const q = quizState.questions[quizState.currentIndex];
    quizState.weaknessJustEliminated = false;
    domElements.progressBar.style.width = `${(quizState.currentIndex / quizState.questions.length) * 100}%`;
    domElements.progressText.textContent = `Question ${quizState.currentIndex + 1}/${quizState.questions.length}`;
    domElements.qEmoji.textContent = q.emoji;
    domElements.qText.textContent = q.question;
    const isWeakSpot = state.weakSpotIds.includes(q.id);
    domElements.weakSpotIndicator.textContent = isWeakSpot ? '[!]' : '';
    domElements.weakSpotIndicator.classList.remove('shatter');
    const answerPackages = q.options.map((text, i) => ({ text, isCorrect: i === q.correct })).sort(() => 0.5 - Math.random());
    answerPackages.forEach(pkg => {
        const button = document.createElement('button');
        button.innerHTML = pkg.text;
        button.className = 'btn answer-btn';
        button.dataset.correct = pkg.isCorrect;
        domElements.answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedBtn) {
    pauseTimer();
    const isCorrect = selectedBtn.dataset.correct === 'true';
    const currentQuestion = quizState.questions[quizState.currentIndex];
    const questionId = currentQuestion.id;

    Array.from(domElements.answerButtons.children).forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.correct === 'true') btn.classList.add('correct');
    });

    if (isCorrect) {
        if (state.weakSpotIds.includes(questionId)) {
            quizState.weaknessJustEliminated = true;
            triggerVibration('shatter');
            domElements.weakSpotIndicator.classList.add('shatter');
            triggerConfetti({ sourceElement: domElements.weakSpotIndicator, count: 30 });
            checkMidQuizCheevos('weakness_eliminated');
        } else {
            triggerVibration('correct');
        }
        quizState.sessionPoints += currentQuestion.points;
        quizState.correctStreak++;
        state.weakSpotIds = state.weakSpotIds.filter(id => id !== questionId);
        if (!state.masteredIds.includes(questionId)) state.masteredIds.push(questionId);
        domElements.explanationTitle.textContent = `Correct! (+${currentQuestion.points} pts)`;
        checkMidQuizCheevos('streak');
    } else {
        triggerVibration('incorrect');
        selectedBtn.classList.add('wrong');
        quizState.correctStreak = 0;
        if (!state.weakSpotIds.includes(questionId)) {
            state.weakSpotIds.push(questionId);
            checkMidQuizCheevos('first_weak_spot');
        }
        quizState.incorrectQuestions.push({ ...currentQuestion, selectedAnswerText: selectedBtn.innerHTML });
        state.questionStats[questionId] = { wrong: (state.questionStats[questionId]?.wrong || 0) + 1 };
        domElements.explanationTitle.textContent = `Incorrect!`;
    }

    setTimeout(() => { domElements.progressBar.style.width = `${((quizState.currentIndex + 1) / quizState.questions.length) * 100}%`; }, 100);
    domElements.explanationText.textContent = currentQuestion.explanation;
    togglePopup('explanation', true);
}

function handleNextQuestion() {
    togglePopup('explanation', false);
    state.stats.totalQuestionsAnswered++;
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
    
    // --- RE-ORDERED LOGIC ---
    // 1. Add points from the quiz questions first.
    state.totalPoints += quizState.sessionPoints;
    
    // 2. Update session counters
    state.stats.completedQuizCount++;
    if(quizState.mode === 'drill') state.stats.completedDrills++;
    if(quizState.mode === 'exam_sim') state.stats.completedExams++;
    if(quizState.mode === 'weak_spots') state.stats.completedReviews++;
    if (state.weakSpotIds.length >= 5) state.stats.hadFiveWeakSpots = true;
    
    // 3. Check for achievements. This process now adds bonus points directly to state.totalPoints.
    checkAllCheevos();
    
    // 4. NOW, with the FINAL point total calculated, check for a rank up.
    const newRank = getCurrentRank();
    if (newRank.name !== previousRank.name) {
        // Add Rank Up to the front of the queue to give it priority.
        celebrationQueue.unshift({ type: 'rankup', rank: newRank });
        console.log(`QUEUE: Rank Up event added to front of queue for ${newRank.name}.`);
    } else if (quizState.sessionPoints > 0 && state.totalPoints >= nextPunMilestone) {
        // Puns are not major celebrations, they can still fire independently.
        const pun = puns[Math.floor(Math.random() * puns.length)];
        setTimeout(() => showToast(`😻 ${pun}`), 500);
        nextPunMilestone = Math.floor(state.totalPoints / 250 + 1) * 250;
    }
    
    // 5. Start processing the celebration queue (which now has Rank Up at the front if it happened).
    processCelebrationQueue();
    
    // 6. Update UI and save the final state
    const score = quizState.questions.length - quizState.incorrectQuestions.length;
    if (score > state.stats.personalBestScore) {
        state.stats.personalBestScore = score;
    }
    domElements.resultsSummaryText.textContent = `You scored ${score} out of ${quizState.questions.length}`;
    domElements.pointsEarnedText.textContent = `+${quizState.sessionPoints} Points!`;
    if (quizState.sessionPoints > 0) triggerVibration('success');

    saveState();
    updateAllUI();
    domElements.reviewMissionBtn.classList.toggle('hidden', quizState.incorrectQuestions.length === 0);
    showScreen('results');
}

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