// NotaR333_OS - Final Engine v5.1 (XP Bar Integration)
// This version is confirmed to match the final HTML and CSS.

document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const body = document.body;
    const screens = { home: document.getElementById('home-screen'), quiz: document.getElementById('quiz-screen'), results: document.getElementById('results-screen'), review: document.getElementById('review-screen'), dashboard: document.getElementById('dashboard-screen'), };
    const popups = { explanation: document.getElementById('explanation-popup'), pause: document.getElementById('pause-modal'), settings: document.getElementById('settings-modal'), rankUp: document.getElementById('rank-up-modal'), };
    const mascotContainer = document.getElementById('mascot-container');
    const dashboardBtn = document.getElementById('dashboard-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const rankDisplay = document.getElementById('rank-display');
    const scoreDisplay = document.getElementById('score-display');
    const xpBarContainer = document.getElementById('xp-bar-container');
    const xpBarLabel = document.getElementById('xp-bar-label');
    const xpBarFill = document.getElementById('xp-bar-fill');
    const xpBarText = document.getElementById('xp-bar-text');
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
    const toastNotification = document.getElementById('toast-notification');
    const toastText = document.getElementById('toast-text');
    const rankUpTitle = document.getElementById('rank-up-title');
    const rankUpText = document.getElementById('rank-up-text');
    
    // --- State & Settings ---
    let state = {};
    let quizState = {};
    let timerInterval;
    const defaultState = { totalPoints: 0, weakSpotIds: [], masteredIds: [], questionStats: {}, settings: { audio: true, lowPower: false, theme: 'pink' }, stats: { personalBestScore: 0 } };
    const ranks = [ { points: 0, name: "Novice Notary" }, { points: 500, name: "Adept Artist" }, { points: 1200, name: "Succulent Signer" }, { points: 2500, name: "Sloth Scholar" }, { points: 5000, name: "Notary Prime ✨" }];
    const puns = [ "You're on a roll!", "Amazing work!", "Look at you go!", "Keep it up!", "That was purr-fect!", "You're as sharp as a cactus!" ];
    let nextPunMilestone = 250;

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
    }

    function showScreen(screenName) {
        for (const key in screens) { screens[key]?.classList.remove('active'); }
        screens[screenName]?.classList.add('active');
    }

    // --- State Management ---
    function loadState() {
        try {
            const savedState = JSON.parse(localStorage.getItem('notaR333_state'));
            state = Object.assign({}, defaultState, savedState);
            state.settings = Object.assign({}, defaultState.settings, savedState?.settings);
            state.stats = Object.assign({}, defaultState.stats, savedState?.stats);
            nextPunMilestone = Math.floor(state.totalPoints / 250 + 1) * 250;
        } catch (e) { state = defaultState; }
    }
    function saveState() { localStorage.setItem('notaR333_state', JSON.stringify(state)); }
    function applySettings() {
        body.className = `theme-${state.settings.theme}`;
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
        const currentRank = getCurrentRank();
        rankDisplay.textContent = `//Rank: ${currentRank.name}`;
        scoreDisplay.textContent = `//Points: ${state.totalPoints}`;
        updateXpBar();
        weakSpotsCounter.textContent = state.weakSpotIds.length > 0 ? `You have ${state.weakSpotIds.length} weak spot(s) to review.` : "Your weak spots list is clear! Great job!";
        reviewWeakSpotsBtn.classList.toggle('hidden', state.weakSpotIds.length === 0);
    }
    function getCurrentRank() { return ranks.slice().reverse().find(r => state.totalPoints >= r.points); }

    function updateXpBar() {
        if (!xpBarContainer) return;
        const currentRank = getCurrentRank();
        const currentRankIndex = ranks.findIndex(r => r.name === currentRank.name);
        if (currentRankIndex >= ranks.length - 1) {
            xpBarLabel.textContent = "// RANK MAX //";
            xpBarFill.style.width = '100%';
            xpBarText.textContent = '✨ Complete! ✨';
        } else {
            const nextRank = ranks[currentRankIndex + 1];
            const pointsForNextRank = nextRank.points - currentRank.points;
            const pointsIntoCurrentRank = state.totalPoints - currentRank.points;
            const progressPercent = Math.max(0, (pointsIntoCurrentRank / pointsForNextRank) * 100);
            xpBarLabel.textContent = `Next Rank:`;
            xpBarFill.style.width = `${progressPercent}%`;
            xpBarText.textContent = `${pointsIntoCurrentRank} / ${pointsForNextRank}`;
        }
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
    function resumeSavedQuiz() { quizState = JSON.parse(localStorage.getItem('notaR333_savedSession')); if (!quizState) return; if (quizState.mode === 'exam_sim') startTimer(quizState.timeLeft); clearSavedSession(); checkForSavedSession(); showScreen('quiz'); loadQuestion(); }
    function startTimer(duration) { clearInterval(timerInterval); quizState.timeLeft = duration; timerDisplay.classList.remove('hidden'); timerInterval = setInterval(() => { quizState.timeLeft--; let minutes = Math.floor(quizState.timeLeft / 60); let seconds = quizState.timeLeft % 60; timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; if (quizState.timeLeft <= 0) { clearInterval(timerInterval); showResults(); } }, 1000); }
    function pauseTimer() { clearInterval(timerInterval); }
    function resumeTimer() { if (quizState.mode === 'exam_sim' && quizState.timeLeft > 0) startTimer(quizState.timeLeft); }

    function loadQuestion() {
        while (answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
        const q = quizState.questions[quizState.currentIndex];
        const progressPercent = ((quizState.currentIndex) / quizState.questions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
        progressText.textContent = `Question ${quizState.currentIndex + 1}/${quizState.questions.length}`;
        qEmoji.textContent = q.emoji; qText.textContent = q.question;
        weakSpotIndicator.textContent = state.weakSpotIds.includes(q.id) ? ' [!]' : '';
        const answerPackages = q.options.map((optionText, index) => ({ text: optionText, isCorrect: index === q.correct }));
        for (let i = answerPackages.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [answerPackages[i], answerPackages[j]] = [answerPackages[j], answerPackages[i]]; }
        answerPackages.forEach(answerPackage => { const button = document.createElement('button'); button.innerHTML = answerPackage.text; button.classList.add('btn', 'answer-btn'); button.dataset.correct = answerPackage.isCorrect; answerButtons.appendChild(button); });
    }

    function selectAnswer(selectedBtn) {
        pauseTimer();
        const isCorrect = selectedBtn.dataset.correct === 'true';
        Array.from(answerButtons.children).forEach(btn => { btn.disabled = true; if (btn.dataset.correct === 'true') { btn.classList.add('correct'); } });
        if (isCorrect) {
            playSound('correct');
            quizState.sessionPoints += quizData.find(q => q.id === quizState.questions[quizState.currentIndex].id).points;
            state.weakSpotIds = state.weakSpotIds.filter(id => id !== quizState.questions[quizState.currentIndex].id);
            if (!state.masteredIds.includes(quizState.questions[quizState.currentIndex].id)) { state.masteredIds.push(quizState.questions[quizState.currentIndex].id); }
            explanationTitle.textContent = `Correct! (+${quizData.find(q => q.id === quizState.questions[quizState.currentIndex].id).points} pts)`;
        } else {
            playSound('incorrect');
            selectedBtn.classList.add('wrong');
            if (!state.weakSpotIds.includes(quizState.questions[quizState.currentIndex].id)) { state.weakSpotIds.push(quizState.questions[quizState.currentIndex].id); }
            quizState.incorrectQuestions.push({ ...quizState.questions[quizState.currentIndex], selectedAnswerText: selectedBtn.innerHTML });
            state.questionStats[quizState.questions[quizState.currentIndex].id] = { wrong: (state.questionStats[quizState.questions[quizState.currentIndex].id]?.wrong || 0) + 1 };
            explanationTitle.textContent = `Incorrect!`;
        }
        const newProgressPercent = ((quizState.currentIndex + 1) / quizState.questions.length) * 100;
        setTimeout(() => { progressBar.style.width = `${newProgressPercent}%`; }, 100);
        explanationText.textContent = quizState.questions[quizState.currentIndex].explanation;
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
        const previousRank = getCurrentRank();
        state.totalPoints += quizState.sessionPoints;
        const score = quizState.questions.length - quizState.incorrectQuestions.length;
        if (score > state.stats.personalBestScore) state.stats.personalBestScore = score;
        saveState(); updateStatsUI();
        resultsSummaryText.textContent = `You scored ${score} out of ${quizState.questions.length}`;
        pointsEarnedText.textContent = `+${quizState.sessionPoints} Points!`;
        if (quizState.sessionPoints > 0) playSound('win');
        const newRank = getCurrentRank();
        if (newRank.name !== previousRank.name) {
            setTimeout(() => triggerRankUp(newRank), 500);
        } else if (state.totalPoints >= nextPunMilestone) {
            setTimeout(triggerPunMilestone, 500);
            nextPunMilestone += 250;
        }
        reviewMissionBtn.classList.toggle('hidden', quizState.incorrectQuestions.length === 0);
        showScreen('results');
    }

    // --- Celebration & Review Logic ---
    function triggerRankUp(newRank) { playSound('win'); rankUpText.textContent = `You are now a ${newRank.name}!`; popups.rankUp.classList.add('visible'); createPartyPoppers(); setTimeout(() => popups.rankUp.classList.remove('visible'), 4000); }
    function triggerPunMilestone() { const pun = puns[Math.floor(Math.random() * puns.length)]; toastText.textContent = `😻 ${pun}`; toastNotification.classList.add('show'); setTimeout(() => toastNotification.classList.remove('show'), 3000); }
    function createPartyPoppers() { const container = document.getElementById('particle-celebration-container'); if (!container) return; container.innerHTML = ''; for (let i = 0; i < 50; i++) { const particle = document.createElement('div'); particle.className = 'particle'; const x = (Math.random() - 0.5) * window.innerWidth * 1.5; const y = (Math.random() - 0.5) * window.innerHeight * 1.5; const color = ['var(--primary-neon)', 'var(--secondary-neon)', 'var(--accent-color)'][Math.floor(Math.random() * 3)]; particle.style.setProperty('--transform-end', `translate(${x}px, ${y}px)`); particle.style.background = color; container.appendChild(particle); } }
    function startReview() { quizState.reviewIndex = 0; loadReviewItem(); showScreen('review'); }
    function loadReviewItem() { const item = quizState.incorrectQuestions[quizState.reviewIndex]; reviewContent.innerHTML = `<div class="review-item"><h3>${item.emoji} ${item.question}</h3><p class="review-your-answer"><strong>Your Answer:</strong> ${item.selectedAnswerText}</p><p class="review-correct-answer"><strong>Correct Answer:</strong> ${item.options[item.correct]}</p><div class="review-explanation"><strong>Explanation:</strong> ${item.explanation}</div></div>`; reviewCounter.textContent = `${quizState.reviewIndex + 1} / ${quizState.incorrectQuestions.length}`; prevReviewBtn.disabled = quizState.reviewIndex === 0; nextReviewBtn.disabled = quizState.reviewIndex === quizState.incorrectQuestions.length - 1; }

    // --- Dashboard & Settings Logic ---
    function openDashboard() { renderMasteryChart(); renderPersonalBests(); renderNemesisQuestion(); showScreen('dashboard'); }
    function openSettings() {
        themeSelector.innerHTML = '';
        ['pink', 'green', 'orange'].forEach(themeName => {
            const btn = document.createElement('button');
            btn.className = 'theme-select-btn';
            const colors = { 'pink': '#ff00ff', 'green': '#00ff7f', 'orange': '#ff8c00' };
            btn.style.backgroundColor = colors[themeName];
            btn.classList.toggle('active', state.settings.theme === themeName);
            btn.onclick = () => { playSound('click'); state.settings.theme = themeName; applySettings(); saveState(); };
            themeSelector.appendChild(btn);
        });
        popups.settings.classList.add('visible');
    }
    function renderMasteryChart() { masteryChartContainer.innerHTML = ''; const categories = [...new Set(quizData.map(q => q.category))].sort(); categories.forEach(cat => { const total = quizData.filter(q => q.category === cat).length; const mastered = state.masteredIds.filter(id => quizData.find(q=>q.id===id)?.category === cat).length; const masteryPercent = total > 0 ? (mastered / total) * 100 : 0; const item = document.createElement('div'); item.className = 'chart-bar-item'; item.innerHTML = `<span class="chart-bar-label">${cat}</span><div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 0%"></div></div>`; masteryChartContainer.appendChild(item); setTimeout(() => { item.querySelector('.chart-bar-fill').style.width = `${masteryPercent}%`; }, 100); }); }
    function renderPersonalBests() { personalBestsContainer.innerHTML = `<p><strong>Best Score:</strong> ${state.stats.personalBestScore} questions correct.</p>`; }
    function renderNemesisQuestion() { let nemesisId = null, maxWrong = 0; for (const qid in state.questionStats) { if (state.questionStats[qid].wrong > maxWrong) { maxWrong = state.questionStats[qid].wrong; nemesisId = qid; } } if (nemesisId) { const q = quizData.find(q => q.id == nemesisId); nemesisQuestionContainer.innerHTML = `<p>You've struggled with this one (${maxWrong} times):</p><strong>${q.question}</strong>`; } else { nemesisQuestionContainer.innerHTML = `<p>No nemesis identified. Keep up the great work!</p>`; } }

    // --- Event Listeners ---
    function addEventListeners() {
        settingsBtn.addEventListener('click', () => { playSound('open'); openSettings(); });
        dashboardBtn.addEventListener('click', () => { playSound('open'); openDashboard(); });
        const goHome = () => { playSound('click'); checkForSavedSession(); updateStatsUI(); showScreen('home'); };
        backToHomeFromResultsBtn.addEventListener('click', goHome);
        backToHomeFromDashBtn.addEventListener('click', goHome);
        finishReviewBtn.addEventListener('click', goHome);
        startDrillBtn.addEventListener('click', () => { playSound('click'); startQuiz('drill', 20); });
        startExamSimBtn.addEventListener('click', () => { playSound('click'); startQuiz('exam_sim', 40); });
        reviewWeakSpotsBtn.addEventListener('click', () => { playSound('click'); startQuiz('weak_spots'); });
        resumeSessionBtn.addEventListener('click', () => { playSound('click'); resumeSavedQuiz(); });
        discardSessionBtn.addEventListener('click', () => { playSound('click'); if (confirm('Discard your saved session?')) { clearSavedSession(); checkForSavedSession(); } });
        pauseQuizBtn.addEventListener('click', () => { playSound('pause'); pauseTimer(); popups.pause.classList.add('visible'); });
        answerButtons.addEventListener('click', e => { if (e.target.matches('.answer-btn')) selectAnswer(e.target); });
        continueQuizBtn.addEventListener('click', handleNextQuestion);
        resumeQuizBtn.addEventListener('click', () => { playSound('click'); popups.pause.classList.remove('visible'); resumeTimer(); });
        saveExitBtn.addEventListener('click', () => { playSound('click'); saveSession(); goHome(); popups.pause.classList.remove('visible'); });
        abandonExitBtn.addEventListener('click', () => { playSound('click'); if (confirm('Abandon this quiz attempt?')) { clearSavedSession(); goHome(); popups.pause.classList.remove('visible'); } });
        reviewMissionBtn.addEventListener('click', () => { playSound('click'); startReview(); });
        prevReviewBtn.addEventListener('click', () => { playSound('click'); if (quizState.reviewIndex > 0) { quizState.reviewIndex--; loadReviewItem(); } });
        nextReviewBtn.addEventListener('click', () => { playSound('click'); if (quizState.reviewIndex < quizState.incorrectQuestions.length - 1) { quizState.reviewIndex++; loadReviewItem(); } });
        closeSettingsBtn.addEventListener('click', () => { playSound('click'); popups.settings.classList.remove('visible'); });
        audioToggle.addEventListener('click', () => { state.settings.audio = !state.settings.audio; applySettings(); saveState(); playSound('click'); });
        lowPowerToggle.addEventListener('click', () => { playSound('click'); state.settings.lowPower = !state.settings.lowPower; applySettings(); saveState(); });
        clearWeakSpotsBtn.addEventListener('click', () => { if (confirm('Are you sure? This will reset your Weak Spots, Mastered Questions, and Nemesis stats.')) { playSound('click'); state.weakSpotIds = []; state.masteredIds = []; state.questionStats = {}; saveState(); updateStatsUI(); alert('Weak spots cleared.'); } });
        factoryResetBtn.addEventListener('click', () => { if (confirm('DANGER: Reset all points, ranks, and stats? This cannot be undone.')) { localStorage.removeItem('notaR333_state'); localStorage.removeItem('notaR333_savedSession'); loadState(); applySettings(); updateStatsUI(); checkForSavedSession(); alert('System reset to default.'); } });
        fullscreenToggle.addEventListener('click', () => { playSound('click'); if (!document.fullscreenElement) { document.documentElement.requestFullscreen().catch(err => alert(`Error: ${err.message}`)); } else { document.exitFullscreen(); } });
    }

    // --- Let's Go ---
    initialize();
});