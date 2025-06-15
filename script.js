// NotaR333_OS - Final Engine v3.0
// Fully featured, stable OS with gamification, settings, and dashboard.

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements (Full Set) ---
    const body = document.body;
    const screens = { home: document.getElementById('home-screen'), quiz: document.getElementById('quiz-screen'), results: document.getElementById('results-screen'), review: document.getElementById('review-screen'), dashboard: document.getElementById('dashboard-screen'), };
    const popups = { explanation: document.getElementById('explanation-popup'), pause: document.getElementById('pause-modal'), settings: document.getElementById('settings-modal'), };
    const mascotContainer = document.getElementById('mascot-container');
    const dashboardBtn = document.getElementById('dashboard-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const rankDisplay = document.getElementById('rank-display');
    const scoreDisplay = document.getElementById('score-display');
    const resumeSessionContainer = document.getElementById('resume-session-container');
    const newSessionContainer = document.getElementById('new-session-container');
    const resumeSessionBtn = document.getElementById('resume-session-btn');
    const discardSessionBtn = document.getElementById('discard-session-btn');
    const startDrillBtn = document.getElementById('start-drill-btn');
    const startExamSimBtn = document.getElementById('start-exam-sim-btn');
    const reviewWeakSpotsBtn = document.getElementById('review-weak-spots-btn');
    const weakSpotsCounter = document.getElementById('weak-spots-counter');
    const pauseQuizBtn = document.getElementById('pause-quiz-btn');
    const progressText = document.getElementById('progress-text');
    const timerDisplay = document.getElementById('timer-display');
    const progressBar = document.getElementById('progress-bar');
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
    const backToHomeFromResultsBtn = document.getElementById('back-to-home-from-results-btn');
    const reviewContent = document.getElementById('review-content');
    const prevReviewBtn = document.getElementById('prev-review-btn');
    const nextReviewBtn = document.getElementById('next-review-btn');
    const reviewCounter = document.getElementById('review-counter');
    const finishReviewBtn = document.getElementById('finish-review-btn');
    const masteryChartContainer = document.getElementById('mastery-chart-container');
    const personalBestsContainer = document.getElementById('personal-bests-container');
    const nemesisQuestionContainer = document.getElementById('nemesis-question-container');
    const backToHomeFromDashBtn = document.getElementById('back-to-home-from-dash-btn');
    const closeSettingsBtn = document.getElementById('close-settings-btn');
    const audioToggle = document.getElementById('audio-toggle');
    const fullscreenToggle = document.getElementById('fullscreen-toggle');
    const lowPowerToggle = document.getElementById('low-power-toggle');
    const themeSelector = document.getElementById('theme-selector');
    const clearWeakSpotsBtn = document.getElementById('clear-weak-spots-btn');
    const factoryResetBtn = document.getElementById('factory-reset-btn');

    // --- State & Settings ---
    let state = {};
    let quizState = {};
    let timerInterval;
    const defaultState = { totalPoints: 0, weakSpotIds: [], masteredIds: [], questionStats: {}, settings: { audio: true, lowPower: false, theme: 'theme-pink' }, stats: { personalBestScore: 0 } };
    const ranks = [ { points: 0, name: "Cyber-Cadet" }, { points: 250, name: "Notary-Nomad" }, { points: 500, name: "Code-Clerk" }, { points: 1000, name: "Synth-Signer" }, { points: 1500, name: "Data-Deacon" }, { points: 2500, name: "Matrix-Magistrate" }, { points: 4000, name: "Neon-Notary Prime ✨" }];

    // --- Audio ---
    const sounds = { click: new Audio('click.mp3'), correct: new Audio('correct.mp3'), incorrect: new Audio('incorrect.mp3'), win: new Audio('win.mp3'), pause: new Audio('pause.mp3'), open: new Audio('open.mp3') };
    const playSound = (sound) => { if (state.settings.audio) sounds[sound]?.play().catch(e => {}); };

    // --- Core Functions ---
    function initialize() {
        loadState();
        applySettings();
        updateStatsUI();
        checkForSavedSession();
        addEventListeners();
        showScreen('home');
        console.log("NotaR333_OS Final Engine Initialized.");
    }

    function showScreen(screenName) {
        Object.values(screens).forEach(s => s?.classList.remove('active'));
        screens[screenName]?.classList.add('active');
    }

    // --- State Management ---
    function loadState() {
        try {
            const savedState = JSON.parse(localStorage.getItem('notaR333_state'));
            state = Object.assign({}, defaultState, savedState);
            state.settings = Object.assign({}, defaultState.settings, savedState?.settings);
            state.stats = Object.assign({}, defaultState.stats, savedState?.stats);
        } catch (e) { state = defaultState; }
    }
    function saveState() { localStorage.setItem('notaR333_state', JSON.stringify(state)); }
    function applySettings() {
        body.className = `${state.settings.theme}`;
        body.classList.toggle('low-power', state.settings.lowPower);
        audioToggle.textContent = state.settings.audio ? '🔊' : '🔇';
        lowPowerToggle.classList.toggle('active', state.settings.lowPower);
    }
    
    // --- Session Management ---
    function saveSession() { localStorage.setItem('notaR333_savedSession', JSON.stringify(quizState)); }
    function clearSavedSession() { localStorage.removeItem('notaR333_savedSession'); }
    function checkForSavedSession() {
        const savedSession = localStorage.getItem('notaR333_savedSession');
        resumeSessionContainer.classList.toggle('hidden', !savedSession);
        newSessionContainer.classList.toggle('hidden', !!savedSession);
    }

    // --- UI Update Functions ---
    function updateStatsUI() {
        const currentRank = ranks.slice().reverse().find(r => state.totalPoints >= r.points);
        rankDisplay.textContent = `//Rank: ${currentRank.name}`;
        scoreDisplay.textContent = `//Points: ${state.totalPoints}`;
        weakSpotsCounter.textContent = state.weakSpotIds.length > 0 ? `You have ${state.weakSpotIds.length} weak spot(s) to review.` : "Your weak spots list is clear! Great job!";
        reviewWeakSpotsBtn.classList.toggle('hidden', state.weakSpotIds.length === 0);
    }

    // --- Quiz Logic ---
    function startQuiz(mode, questionCount) {
        let questionSet = [];
        if (mode === 'weak_spots') {
            if (state.weakSpotIds.length === 0) return alert("No weak spots to review!");
            questionSet = quizData.filter(q => state.weakSpotIds.includes(q.id));
        } else {
            questionSet = [...quizData].sort(() => 0.5 - Math.random()).slice(0, questionCount);
        }
        quizState = { mode, questions: questionSet, currentIndex: 0, sessionPoints: 0, incorrectQuestions: [], timeLeft: mode === 'exam_sim' ? 3600 : null };
        if (quizState.mode === 'exam_sim') startTimer(quizState.timeLeft);
        showScreen('quiz');
        loadQuestion();
    }
    
    function resumeSavedQuiz() {
        quizState = JSON.parse(localStorage.getItem('notaR333_savedSession'));
        if (!quizState) return;
        if (quizState.mode === 'exam_sim') startTimer(quizState.timeLeft);
        clearSavedSession(); checkForSavedSession();
        showScreen('quiz');
        loadQuestion();
    }

    function startTimer(duration) {
        clearInterval(timerInterval);
        quizState.timeLeft = duration;
        timerDisplay.classList.remove('hidden');
        timerInterval = setInterval(() => {
            quizState.timeLeft--;
            let minutes = Math.floor(quizState.timeLeft / 60);
            let seconds = quizState.timeLeft % 60;
            timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            if (quizState.timeLeft <= 0) { clearInterval(timerInterval); showResults(); }
        }, 1000);
    }
    function pauseTimer() { clearInterval(timerInterval); }
    function resumeTimer() { if (quizState.mode === 'exam_sim' && quizState.timeLeft > 0) startTimer(quizState.timeLeft); }

    function loadQuestion() {
        while (answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
        const q = quizState.questions[quizState.currentIndex];
        progressText.textContent = `Question ${quizState.currentIndex + 1}/${quizState.questions.length}`;
        progressBar.style.width = `${((quizState.currentIndex + 1) / quizState.questions.length) * 100}%`;
        qEmoji.textContent = q.emoji; qText.textContent = q.question;
        weakSpotIndicator.textContent = state.weakSpotIds.includes(q.id) ? ' [!]' : '';
        q.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.innerHTML = option;
            button.classList.add('btn', 'answer-btn');
            button.dataset.index = index;
            answerButtons.appendChild(button);
        });
    }

    function selectAnswer(selectedIndex) {
        pauseTimer();
        const q = quizState.questions[quizState.currentIndex];
        const isCorrect = selectedIndex === q.correct;
        const selectedBtn = answerButtons.querySelector(`[data-index="${selectedIndex}"]`);
        Array.from(answerButtons.children).forEach(btn => btn.disabled = true);
        if (isCorrect) {
            playSound('correct');
            quizState.sessionPoints += q.points;
            state.weakSpotIds = state.weakSpotIds.filter(id => id !== q.id);
            if (!state.masteredIds.includes(q.id)) state.masteredIds.push(q.id);
            selectedBtn.classList.add('correct');
            explanationTitle.textContent = `Correct! (+${q.points} pts)`;
        } else {
            playSound('incorrect');
            if (!state.weakSpotIds.includes(q.id)) state.weakSpotIds.push(q.id);
            quizState.incorrectQuestions.push({ ...q, selectedAnswerIndex: selectedIndex });
            state.questionStats[q.id] = { wrong: (state.questionStats[q.id]?.wrong || 0) + 1 };
            selectedBtn.classList.add('wrong');
            answerButtons.querySelector(`[data-index="${q.correct}"]`).classList.add('correct');
            explanationTitle.textContent = `Incorrect!`;
        }
        explanationText.textContent = q.explanation;
        popups.explanation.classList.add('visible');
    }

    function handleNextQuestion() {
        popups.explanation.classList.remove('visible');
        quizState.currentIndex++;
        if (quizState.currentIndex < quizState.questions.length) {
            loadQuestion(); resumeTimer();
        } else {
            showResults();
        }
    }

    function showResults() {
        clearSavedSession(); pauseTimer();
        state.totalPoints += quizState.sessionPoints;
        const score = quizState.questions.length - quizState.incorrectQuestions.length;
        if(score > state.stats.personalBestScore) state.stats.personalBestScore = score;
        saveState(); updateStatsUI();
        resultsSummaryText.textContent = `You scored ${score} out of ${quizState.questions.length}`;
        pointsEarnedText.textContent = `+${quizState.sessionPoints} Points!`;
        if (quizState.sessionPoints > 0) playSound('win');
        const percentage = score / quizState.questions.length;
        if (percentage >= 0.9) { finalMascotArt.textContent = "🎉(>ω<)🎉"; finalMascotText.textContent = "Flawless execution! You're a cyber ninja!"; }
        else if (percentage >= 0.7) { finalMascotArt.textContent = "(^ ω ^)"; finalMascotText.textContent = "Mission successful! Great work."; }
        else { finalMascotArt.textContent = "ᕙ(⇀_⇀)ᕗ"; finalMascotText.textContent = "Good effort. Review the mission logs and try again!"; }
        reviewMissionBtn.classList.toggle('hidden', quizState.incorrectQuestions.length === 0);
        showScreen('results');
    }

    // --- Review Logic ---
    function startReview() { quizState.reviewIndex = 0; loadReviewItem(); showScreen('review'); }
    function loadReviewItem() {
        const item = quizState.incorrectQuestions[quizState.reviewIndex];
        reviewContent.innerHTML = `<div class="review-item"><h3>${item.emoji} ${item.question}</h3><p class="review-your-answer"><strong>Your Answer:</strong> ${item.options[item.selectedAnswerIndex]}</p><p class="review-correct-answer"><strong>Correct Answer:</strong> ${item.options[item.correct]}</p><div class="review-explanation"><strong>Explanation:</strong> ${item.explanation}</div></div>`;
        reviewCounter.textContent = `${quizState.reviewIndex + 1} / ${quizState.incorrectQuestions.length}`;
        prevReviewBtn.disabled = quizState.reviewIndex === 0;
        nextReviewBtn.disabled = quizState.reviewIndex === quizState.incorrectQuestions.length - 1;
    }

    // --- Dashboard & Settings Logic ---
    function openDashboard() { renderMasteryChart(); renderPersonalBests(); renderNemesisQuestion(); showScreen('dashboard'); }
    function openSettings() {
        themeSelector.innerHTML = '';
        ['theme-pink', 'theme-green', 'theme-orange'].forEach(theme => {
            const btn = document.createElement('button');
            btn.className = 'theme-select-btn';
            const colors = { 'theme-pink': '#ff00ff', 'theme-green': '#00ff7f', 'theme-orange': '#ff8c00' };
            btn.style.backgroundColor = colors[theme];
            btn.classList.toggle('active', state.settings.theme === theme);
            btn.onclick = () => { playSound('click'); state.settings.theme = theme; applySettings(); saveState(); openSettings(); };
            themeSelector.appendChild(btn);
        });
        popups.settings.classList.add('visible');
    }
    
    function renderMasteryChart() {
        masteryChartContainer.innerHTML = '';
        const categories = [...new Set(quizData.map(q => q.category))].sort();
        categories.forEach(cat => {
            const total = quizData.filter(q => q.category === cat).length;
            const mastered = state.masteredIds.filter(id => quizData.find(q=>q.id===id)?.category === cat).length;
            const masteryPercent = total > 0 ? (mastered / total) * 100 : 0;
            const item = document.createElement('div');
            item.className = 'chart-bar-item';
            item.innerHTML = `<span class="chart-bar-label">${cat}</span><div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 0%"></div></div>`;
            masteryChartContainer.appendChild(item);
            setTimeout(() => { item.querySelector('.chart-bar-fill').style.width = `${masteryPercent}%`; }, 100);
        });
    }
    function renderPersonalBests() { personalBestsContainer.innerHTML = `<p><strong>Best Score:</strong> ${state.stats.personalBestScore} questions correct.</p>`; }
    function renderNemesisQuestion() {
        let nemesisId = null, maxWrong = 0;
        for (const qid in state.questionStats) { if (state.questionStats[qid].wrong > maxWrong) { maxWrong = state.questionStats[qid].wrong; nemesisId = qid; }}
        if (nemesisId) {
            const q = quizData.find(q => q.id == nemesisId);
            nemesisQuestionContainer.innerHTML = `<p>You've struggled with this one (${maxWrong} times):</p><strong>${q.question}</strong>`;
        } else {
            nemesisQuestionContainer.innerHTML = `<p>No nemesis identified. Keep up the great work!</p>`;
        }
    }

    // --- Event Listeners ---
    function addEventListeners() {
        // Main Navigation
        settingsBtn.addEventListener('click', () => { playSound('open'); openSettings(); });
        dashboardBtn.addEventListener('click', () => { playSound('open'); openDashboard(); });
        const goHome = () => { playSound('click'); checkForSavedSession(); updateStatsUI(); showScreen('home'); };
        backToHomeFromResultsBtn.addEventListener('click', goHome);
        backToHomeFromDashBtn.addEventListener('click', goHome);
        finishReviewBtn.addEventListener('click', goHome);
        // Home Screen
        startDrillBtn.addEventListener('click', () => { playSound('click'); startQuiz('drill', 20); });
        startExamSimBtn.addEventListener('click', () => { playSound('click'); startQuiz('exam_sim', 40); });
        reviewWeakSpotsBtn.addEventListener('click', () => { playSound('click'); startQuiz('weak_spots'); });
        resumeSessionBtn.addEventListener('click', () => { playSound('click'); resumeSavedQuiz(); });
        discardSessionBtn.addEventListener('click', () => { playSound('click'); if (confirm('Discard your saved session?')) { clearSavedSession(); checkForSavedSession(); } });
        // Quiz Screen
        pauseQuizBtn.addEventListener('click', () => { playSound('pause'); pauseTimer(); popups.pause.classList.add('visible'); });
        answerButtons.addEventListener('click', e => { if (e.target.matches('.answer-btn')) selectAnswer(parseInt(e.target.dataset.index)); });
        // Popups
        continueQuizBtn.addEventListener('click', handleNextQuestion);
        resumeQuizBtn.addEventListener('click', () => { playSound('click'); popups.pause.classList.remove('visible'); resumeTimer(); });
        saveExitBtn.addEventListener('click', () => { playSound('click'); saveSession(); goHome(); popups.pause.classList.remove('visible'); });
        abandonExitBtn.addEventListener('click', () => { playSound('click'); if (confirm('Abandon this quiz attempt?')) { clearSavedSession(); goHome(); popups.pause.classList.remove('visible'); } });
        // Review Screen
        prevReviewBtn.addEventListener('click', () => { playSound('click'); if (quizState.reviewIndex > 0) { quizState.reviewIndex--; loadReviewItem(); } });
        nextReviewBtn.addEventListener('click', () => { playSound('click'); if (quizState.reviewIndex < quizState.incorrectQuestions.length - 1) { quizState.reviewIndex++; loadReviewItem(); } });
        // Settings
        closeSettingsBtn.addEventListener('click', () => { playSound('click'); popups.settings.classList.remove('visible'); });
        audioToggle.addEventListener('click', () => { state.settings.audio = !state.settings.audio; applySettings(); saveState(); playSound('click'); });
        lowPowerToggle.addEventListener('click', () => { playSound('click'); state.settings.lowPower = !state.settings.lowPower; applySettings(); saveState(); });
        clearWeakSpotsBtn.addEventListener('click', () => { if (confirm('Are you sure you want to clear your weak spots list?')) { playSound('click'); state.weakSpotIds = []; state.masteredIds = []; state.questionStats = {}; saveState(); updateStatsUI(); alert('Weak spots cleared.'); } });
        factoryResetBtn.addEventListener('click', () => { if (confirm('DANGER: Reset all points, ranks, and stats? This cannot be undone.')) { playSound('click'); localStorage.removeItem('notaR333_state'); localStorage.removeItem('notaR333_savedSession'); loadState(); applySettings(); updateStatsUI(); checkForSavedSession(); alert('System reset to default.'); } });
        fullscreenToggle.addEventListener('click', () => {
            playSound('click');
            if (!document.fullscreenElement) { document.documentElement.requestFullscreen().catch(err => alert(`Error: ${err.message}`)); }
            else { document.exitFullscreen(); }
        });
    }

    // --- Let's Go ---
    initialize();
});