document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const body = document.body;
    const homeScreen = document.getElementById('home-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const reviewScreen = document.getElementById('review-screen');
    const explanationPopup = document.getElementById('explanation-popup');
    const pauseModal = document.getElementById('pause-modal');
    const resumeSessionContainer = document.getElementById('resume-session-container');
    const newSessionContainer = document.getElementById('new-session-container');

    const themeSwitcherBtn = document.getElementById('theme-switcher-btn');
    const rankDisplay = document.getElementById('rank-display');
    const scoreDisplay = document.getElementById('score-display');
    
    const resumeSessionBtn = document.getElementById('resume-session-btn');
    const discardSessionBtn = document.getElementById('discard-session-btn');
    const startDrillBtn = document.getElementById('start-drill-btn');
    const startExamSimBtn = document.getElementById('start-exam-sim-btn');
    const reviewWeakSpotsBtn = document.getElementById('review-weak-spots-btn');
    const weakSpotsCounter = document.getElementById('weak-spots-counter');
    
    const pauseQuizBtn = document.getElementById('pause-quiz-btn');
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const timerDisplay = document.getElementById('timer-display');
    const qEmoji = document.getElementById('q-emoji');
    const qText = document.getElementById('q-text');
    const weakSpotIndicator = document.getElementById('weak-spot-indicator');
    const answerButtons = document.getElementById('answer-buttons');
    
    const explanationTitle = document.getElementById('explanation-title');
    const explanationText = document.getElementById('explanation-text');
    const continueQuizBtn = document.getElementById('continue-quiz-btn');

    const saveExitBtn = document.getElementById('save-exit-btn');
    const abandonExitBtn = document.getElementById('abandon-exit-btn');
    const resumeQuizBtn = document.getElementById('resume-quiz-btn');

    const resultsSummaryText = document.getElementById('results-summary-text');
    const pointsEarnedText = document.getElementById('points-earned-text');
    const finalMascotArt = document.getElementById('final-mascot-art');
    const finalMascotText = document.getElementById('final-mascot-text');
    const reviewMissionBtn = document.getElementById('review-mission-btn');
    const backToHomeBtn = document.getElementById('back-to-home-btn');

    const reviewContent = document.getElementById('review-content');
    const prevReviewBtn = document.getElementById('prev-review-btn');
    const nextReviewBtn = document.getElementById('next-review-btn');
    const reviewCounter = document.getElementById('review-counter');
    const finishReviewBtn = document.getElementById('finish-review-btn');

    // --- Sound Effects ---
    // (Ensure you have these .mp3 files in the same folder)
    const sounds = {
        click: new Audio('click.mp3'),
        correct: new Audio('correct.mp3'),
        incorrect: new Audio('incorrect.mp3'),
        win: new Audio('win.mp3'),
        pause: new Audio('pause.mp3')
    };
    const playSound = (sound) => sounds[sound] && sounds[sound].play().catch(e => {});

    // --- State Variables ---
    let currentQuestions = [], currentQuestionIndex = 0, totalPoints = 0, sessionPoints = 0, weakSpotIds = [], currentIncorrectQuestions = [], timerInterval, timeLeft;
    const themes = ['theme-pink', 'theme-green', 'theme-orange'];
    let currentThemeIndex = 0, currentReviewIndex = 0, quizMode = '';

    const ranks = [ { points: 0, name: "Cyber-Cadet" }, { points: 100, name: "Notary-Nomad" }, { points: 250, name: "Code-Clerk" }, { points: 500, name: "Synth-Signer" }, { points: 750, name: "Data-Deacon" }, { points: 1000, name: "Matrix-Magistrate" }, { points: 1500, name: "Neon-Notary Prime ✨" }];

    // --- State & Session Management ---
    function initialize() {
        loadState();
        updateStatsUI();
        updateWeakSpotsUI();
        checkForSavedSession();
        showScreen('home');
    }

    function loadState() {
        totalPoints = parseInt(localStorage.getItem('notaR333_totalPoints') || '0', 10);
        weakSpotIds = JSON.parse(localStorage.getItem('notaR333_weakSpots') || '[]');
        const savedTheme = localStorage.getItem('notaR333_theme');
        if (savedTheme && themes.includes(savedTheme)) {
            body.className = savedTheme;
            currentThemeIndex = themes.indexOf(savedTheme);
        }
    }
    
    function saveState() {
        localStorage.setItem('notaR333_totalPoints', totalPoints);
        localStorage.setItem('notaR333_weakSpots', JSON.stringify([...new Set(weakSpotIds)]));
        localStorage.setItem('notaR333_theme', body.className);
    }
    
    function saveSession() {
        const session = { quizMode, currentQuestions, currentQuestionIndex, sessionPoints, currentIncorrectQuestions, timeLeft };
        localStorage.setItem('notaR333_savedSession', JSON.stringify(session));
    }

    function clearSavedSession() {
        localStorage.removeItem('notaR333_savedSession');
    }

    function checkForSavedSession() {
        const savedSession = localStorage.getItem('notaR333_savedSession');
        if (savedSession) {
            newSessionContainer.classList.add('hidden');
            resumeSessionContainer.classList.remove('hidden');
        } else {
            newSessionContainer.classList.remove('hidden');
            resumeSessionContainer.classList.add('hidden');
        }
    }

    // --- UI Update Functions ---
    function updateStatsUI() {
        const currentRank = ranks.slice().reverse().find(r => totalPoints >= r.points);
        rankDisplay.textContent = `//Rank: ${currentRank.name}`;
        scoreDisplay.textContent = `//Points: ${totalPoints}`;
    }

    function updateWeakSpotsUI() {
        reviewWeakSpotsBtn.classList.toggle('hidden', weakSpotIds.length === 0);
        weakSpotsCounter.textContent = weakSpotIds.length > 0 ? `You have ${weakSpotIds.length} weak spot(s) to review.` : "Your weak spots list is clear! Great job!";
    }

    // --- Quiz Core Logic ---
    function startQuiz(mode, questionCount) {
        playSound('click');
        quizMode = mode;
        if (mode === 'weak_spots') {
            if (weakSpotIds.length === 0) return alert("No weak spots to review!");
            currentQuestions = quizData.filter(q => weakSpotIds.includes(q.id));
        } else {
            currentQuestions = [...quizData].sort(() => 0.5 - Math.random()).slice(0, questionCount);
        }
        currentQuestionIndex = 0;
        sessionPoints = 0;
        currentIncorrectQuestions = [];
        if (mode === 'exam_sim') startTimer(60 * 60);
        showScreen('quiz');
        loadQuestion();
    }
    
    function resumeSavedQuiz() {
        const session = JSON.parse(localStorage.getItem('notaR333_savedSession'));
        if (!session) return;
        
        quizMode = session.quizMode;
        currentQuestions = session.currentQuestions;
        currentQuestionIndex = session.currentQuestionIndex;
        sessionPoints = session.sessionPoints;
        currentIncorrectQuestions = session.currentIncorrectQuestions;
        
        if (quizMode === 'exam_sim') startTimer(session.timeLeft);
        
        clearSavedSession();
        checkForSavedSession();
        showScreen('quiz');
        loadQuestion();
    }

    function startTimer(duration) {
        clearInterval(timerInterval);
        timeLeft = duration;
        timerDisplay.classList.remove('hidden');
        timerInterval = setInterval(() => {
            timeLeft--;
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                showResults();
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }
    
    function resumeTimer() {
        if (quizMode === 'exam_sim' && timeLeft > 0) {
            startTimer(timeLeft);
        }
    }

    function loadQuestion() {
        while (answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
        
        const q = currentQuestions[currentQuestionIndex];
        progressText.textContent = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
        progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
        qEmoji.textContent = q.emoji;
        qText.textContent = q.question;
        weakSpotIndicator.textContent = weakSpotIds.includes(q.id) ? ' [!]' : '';

        q.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.innerHTML = option;
            button.classList.add('btn', 'answer-btn');
            button.dataset.index = index;
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        });
    }

    function selectAnswer(e) {
        playSound('click');
        pauseTimer();
        const selectedBtn = e.target;
        const selectedIndex = parseInt(selectedBtn.dataset.index, 10);
        const q = currentQuestions[currentQuestionIndex];
        Array.from(answerButtons.children).forEach(btn => btn.disabled = true);

        const isCorrect = selectedIndex === q.correct;
        if (isCorrect) {
            playSound('correct');
            sessionPoints += q.points;
            weakSpotIds = weakSpotIds.filter(id => id !== q.id);
            explanationTitle.textContent = `Correct! (+${q.points} pts)`;
            explanationTitle.style.color = 'var(--success-color)';
        } else {
            playSound('incorrect');
            weakSpotIds.push(q.id);
            currentIncorrectQuestions.push({ ...q, selectedAnswerIndex: selectedIndex });
            explanationTitle.textContent = `Incorrect!`;
            explanationTitle.style.color = 'var(--error-color)';
        }
        explanationText.textContent = q.explanation;
        explanationPopup.classList.remove('hidden');
    }

    function handleNextQuestion() {
        explanationPopup.classList.add('hidden');
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
            resumeTimer();
        } else {
            showResults();
        }
    }

    function showResults() {
        pauseTimer();
        totalPoints += sessionPoints;
        saveState();
        updateStatsUI();
        
        resultsSummaryText.textContent = `You scored ${currentQuestions.length - currentIncorrectQuestions.length} out of ${currentQuestions.length}`;
        pointsEarnedText.textContent = `+${sessionPoints} Points!`;
        if (sessionPoints > 0) playSound('win');

        const percentage = (currentQuestions.length - currentIncorrectQuestions.length) / currentQuestions.length;
        if (percentage >= 0.9) {
            finalMascotArt.textContent = "🎉(>ω<)🎉"; finalMascotText.textContent = "Flawless execution! You're a cyber ninja!";
        } else if (percentage >= 0.7) {
            finalMascotArt.textContent = "(^ ω ^)"; finalMascotText.textContent = "Mission successful! Great work.";
        } else {
            finalMascotArt.textContent = "ᕙ(⇀_⇀)ᕗ"; finalMascotText.textContent = "Good effort. Review the mission logs and try again!";
        }
        reviewMissionBtn.classList.toggle('hidden', currentIncorrectQuestions.length === 0);
        showScreen('results');
    }

    // --- Review Logic ---
    function startReview() {
        playSound('click');
        currentReviewIndex = 0;
        loadReviewItem();
        showScreen('review');
    }
    
    function loadReviewItem() {
        const item = currentIncorrectQuestions[currentReviewIndex];
        reviewContent.innerHTML = `
            <div class="review-item">
                <h3>${item.emoji} ${item.question}</h3>
                <p class="review-your-answer"><strong>Your Answer:</strong> ${item.options[item.selectedAnswerIndex]}</p>
                <p class="review-correct-answer"><strong>Correct Answer:</strong> ${item.options[item.correct]}</p>
                <div class="review-explanation"><strong>Explanation:</strong> ${item.explanation}</div>
            </div>`;
        reviewCounter.textContent = `${currentReviewIndex + 1} / ${currentIncorrectQuestions.length}`;
        prevReviewBtn.disabled = currentReviewIndex === 0;
        nextReviewBtn.disabled = currentReviewIndex === currentIncorrectQuestions.length - 1;
    }

    // --- Event Listeners ---
    themeSwitcherBtn.addEventListener('click', () => { playSound('click'); currentThemeIndex = (currentThemeIndex + 1) % themes.length; body.className = themes[currentThemeIndex]; saveState(); });
    startDrillBtn.addEventListener('click', () => startQuiz('drill', 20));
    startExamSimBtn.addEventListener('click', () => startQuiz('exam_sim', 40));
    reviewWeakSpotsBtn.addEventListener('click', () => startQuiz('weak_spots'));
    resumeSessionBtn.addEventListener('click', () => { playSound('click'); resumeSavedQuiz(); });
    discardSessionBtn.addEventListener('click', () => { playSound('click'); clearSavedSession(); checkForSavedSession(); });
    continueQuizBtn.addEventListener('click', handleNextQuestion);
    pauseQuizBtn.addEventListener('click', () => { playSound('pause'); pauseTimer(); pauseModal.classList.remove('hidden'); });
    resumeQuizBtn.addEventListener('click', () => { playSound('click'); pauseModal.classList.add('hidden'); resumeTimer(); });
    saveExitBtn.addEventListener('click', () => { saveSession(); showHomeScreen(); });
    abandonExitBtn.addEventListener('click', () => { clearSavedSession(); showHomeScreen(); });
    reviewMissionBtn.addEventListener('click', startReview);
    prevReviewBtn.addEventListener('click', () => { if (currentReviewIndex > 0) { playSound('click'); currentReviewIndex--; loadReviewItem(); } });
    nextReviewBtn.addEventListener('click', () => { if (currentReviewIndex < currentIncorrectQuestions.length - 1) { playSound('click'); currentReviewIndex++; loadReviewItem(); } });
    const showHomeScreen = () => { playSound('click'); pauseModal.classList.add('hidden'); pauseTimer(); checkForSavedSession(); updateWeakSpotsUI(); showScreen('home'); };
    backToHomeBtn.addEventListener('click', showHomeScreen);
    finishReviewBtn.addEventListener('click', showHomeScreen);

    // --- Screen Management ---
    function showScreen(screenName) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(`${screenName}-screen`).classList.add('active'); }

    // --- Kick things off ---
    initialize();
});