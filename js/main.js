// NotaR333_OS - Main Application Controller v3.4 (Reliability Fix)

// This global object will hold references to all our DOM elements.
const domElements = {};

document.addEventListener('DOMContentLoaded', () => {
    
    // --- DOM Element Population ---
    // This section explicitly gets each element by its ID. This is more reliable
    // than the previous automated method and prevents crashes if an ID is missing.
    console.log("DOM: Initializing element references...");

    // App Body & Structure
    domElements.body = document.body;
    domElements.appContainer = document.getElementById('app-container');

    // Screens
    domElements.homeScreen = document.getElementById('home-screen');
    domElements.quizScreen = document.getElementById('quiz-screen');
    domElements.resultsScreen = document.getElementById('results-screen');
    domElements.reviewScreen = document.getElementById('review-screen');
    domElements.dashboardScreen = document.getElementById('dashboard-screen');
    domElements.screens = { home: domElements.homeScreen, quiz: domElements.quizScreen, results: domElements.resultsScreen, review: domElements.reviewScreen, dashboard: domElements.dashboardScreen };

    // Popups & Modals
    domElements.explanationPopup = document.getElementById('explanation-popup');
    domElements.pauseModal = document.getElementById('pause-modal');
    domElements.settingsModal = document.getElementById('settings-modal');
    domElements.rankUpModal = document.getElementById('rank-up-modal');
    domElements.cheevosModal = document.getElementById('cheevos-modal');
    domElements.catalogModal = document.getElementById('catalog-modal');
    domElements.rewardModal = document.getElementById('reward-modal');
    domElements.popups = { explanation: domElements.explanationPopup, pause: domElements.pauseModal, settings: domElements.settingsModal, rankUp: domElements.rankUpModal, cheevos: domElements.cheevosModal, catalog: domElements.catalogModal, reward: domElements.rewardModal };

    // Header
    domElements.mascotContainer = document.getElementById('mascot-container');
    domElements.topCatzBar = document.getElementById('top-catz-bar');
    domElements.studyGuideBtn = document.getElementById('study-guide-btn');
    domElements.cheevosBtn = document.getElementById('cheevos-btn');
    domElements.dashboardBtn = document.getElementById('dashboard-btn');
    domElements.settingsBtn = document.getElementById('settings-btn');
    domElements.rankDisplay = document.getElementById('rank-display');
    domElements.scoreDisplay = document.getElementById('score-display');
    domElements.xpBarFill = document.getElementById('xp-bar-fill');
    domElements.xpBarText = document.getElementById('xp-bar-text');
    domElements.xpBarLabel = document.getElementById('xp-bar-label');
    
    // Home Screen
    domElements.resumeSessionContainer = document.getElementById('resume-session-container');
    domElements.newSessionContainer = document.getElementById('new-session-container');
    domElements.resumeSessionBtn = document.getElementById('resume-session-btn');
    domElements.discardSessionBtn = document.getElementById('discard-session-btn');
    domElements.startDrillBtn = document.getElementById('start-drill-btn');
    domElements.startExamSimBtn = document.getElementById('start-exam-sim-btn');
    domElements.reviewWeakSpotsBtn = document.getElementById('review-weak-spots-btn');
    domElements.weakSpotsCounter = document.getElementById('weak-spots-counter');

    // Quiz Screen
    domElements.pauseQuizBtn = document.getElementById('pause-quiz-btn');
    domElements.progressText = document.getElementById('progress-text');
    domElements.timerDisplay = document.getElementById('timer-display');
    domElements.progressBar = document.getElementById('progress-bar');
    domElements.qEmoji = document.getElementById('q-emoji');
    domElements.qText = document.getElementById('q-text');
    domElements.weakSpotIndicator = document.getElementById('weak-spot-indicator');
    domElements.answerButtons = document.getElementById('answer-buttons');
    domElements.explanationTitle = document.getElementById('explanation-title');
    domElements.explanationText = document.getElementById('explanation-text');
    domElements.continueQuizBtn = document.getElementById('continue-quiz-btn');

    // Modals & Popups Content
    domElements.saveExitBtn = document.getElementById('save-exit-btn');
    domElements.abandonExitBtn = document.getElementById('abandon-exit-btn');
    domElements.resumeQuizBtn = document.getElementById('resume-quiz-btn');
    domElements.resultsSummaryText = document.getElementById('results-summary-text');
    domElements.pointsEarnedText = document.getElementById('points-earned-text');
    domElements.reviewMissionBtn = document.getElementById('review-mission-btn');
    domElements.backToHomeFromResultsBtn = document.getElementById('back-to-home-from-results-btn');
    domElements.reviewContent = document.getElementById('review-content');
    domElements.prevReviewBtn = document.getElementById('prev-review-btn');
    domElements.nextReviewBtn = document.getElementById('next-review-btn');
    domElements.reviewCounter = document.getElementById('review-counter');
    domElements.finishReviewBtn = document.getElementById('finish-review-btn');
    domElements.masteryChartContainer = document.getElementById('mastery-chart-container');
    domElements.personalBestsContainer = document.getElementById('personal-bests-container');
    domElements.nemesisQuestionContainer = document.getElementById('nemesis-question-container');
    domElements.backToHomeFromDashBtn = document.getElementById('back-to-home-from-dash-btn');
    domElements.closeSettingsBtn = document.getElementById('close-settings-btn');
    domElements.fullscreenToggle = document.getElementById('fullscreen-toggle');
    domElements.lowPowerToggle = document.getElementById('low-power-toggle');
    domElements.themeSelector = document.getElementById('theme-selector');
    domElements.clearWeakSpotsBtn = document.getElementById('clear-weak-spots-btn');
    domElements.factoryResetBtn = document.getElementById('factory-reset-btn');
    domElements.cheevosGrid = document.getElementById('cheevos-grid');
    domElements.closeCheevosBtn = document.getElementById('close-cheevos-btn');
    domElements.catalogGrid = document.getElementById('catalog-grid');
    domElements.closeCatalogBtn = document.getElementById('close-catalog-btn');
    domElements.toastNotification = document.getElementById('toast-notification');
    domElements.toastText = document.getElementById('toast-text');
    domElements.rankUpText = document.getElementById('rank-up-text');
    domElements.rewardImage = document.getElementById('reward-image');
    domElements.rewardTitle = document.getElementById('reward-title');
    domElements.rewardDescription = document.getElementById('reward-description');
    domElements.rewardSelectBtn = document.getElementById('reward-select-btn');
    domElements.rewardCloseBtn = document.getElementById('reward-close-btn');

    console.log("DOM: Element references initialized.");

    // --- INITIALIZATION FUNCTION ---
    function initialize() {
        console.log("App: Initializing...");
        loadState();
        buildThemeSelector();
        applySettings();
        updateAllUI();
        checkForSavedSession();
        addEventListeners();
        showScreen('home');
        console.log("NotaR333_OS v3.4 Initialized and Ready.");
    }

    // --- EVENT LISTENERS ---
    function addEventListeners() {
        console.log("Listeners: Attaching event listeners...");

        // --- DEBUG MODE LISTENER ---
        document.addEventListener('keyup', (e) => {
            if (e.key.toLowerCase() === 'd' && domElements.quizScreen.classList.contains('active')) {
                const btn = domElements.answerButtons.querySelector('[data-correct="true"]');
                if (btn) btn.classList.toggle('debug-correct-answer');
            }
        });

        // --- CORE NAVIGATION ---
        const goHome = () => { triggerVibration('click'); checkForSavedSession(); updateAllUI(); showScreen('home'); };
        domElements.backToHomeFromResultsBtn.addEventListener('click', goHome);
        domElements.backToHomeFromDashBtn.addEventListener('click', goHome);
        domElements.finishReviewBtn.addEventListener('click', goHome);

        // --- HOME SCREEN ---
        domElements.startDrillBtn.addEventListener('click', () => { triggerVibration('click'); startQuiz('drill', 20); });
        domElements.startExamSimBtn.addEventListener('click', () => { triggerVibration('click'); startQuiz('exam_sim', 40); });
        domElements.reviewWeakSpotsBtn.addEventListener('click', () => { triggerVibration('click'); startQuiz('weak_spots'); });
        domElements.resumeSessionBtn.addEventListener('click', () => {
            triggerVibration('click');
            quizState = loadSavedSession();
            if (quizState) { clearSavedSession(); checkForSavedSession(); showScreen('quiz'); loadQuestion(); resumeTimer(); }
        });
        domElements.discardSessionBtn.addEventListener('click', () => {
            triggerVibration('click');
            if (confirm('Discard your saved session?')) { clearSavedSession(); checkForSavedSession(); }
        });

        // --- QUIZ SCREEN & POPUPS ---
        domElements.pauseQuizBtn.addEventListener('click', () => { triggerVibration('open'); pauseTimer(); togglePopup('pause', true); });
        domElements.answerButtons.addEventListener('click', e => { if (e.target.matches('.answer-btn')) selectAnswer(e.target); });
        domElements.continueQuizBtn.addEventListener('click', () => { triggerVibration('click'); handleNextQuestion(); });
        domElements.resumeQuizBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('pause', false); resumeTimer(); });
        domElements.saveExitBtn.addEventListener('click', () => { triggerVibration('click'); saveSession(); goHome(); togglePopup('pause', false); });
        domElements.abandonExitBtn.addEventListener('click', () => {
            triggerVibration('click');
            if (confirm('Abandon this quiz attempt?')) { clearSavedSession(); goHome(); togglePopup('pause', false); }
        });

        // --- RESULTS & REVIEW ---
        domElements.reviewMissionBtn.addEventListener('click', () => { triggerVibration('click'); startReview(); });
        domElements.prevReviewBtn.addEventListener('click', () => { if (quizState.reviewIndex > 0) { triggerVibration('click'); quizState.reviewIndex--; loadReviewItem(); } });
        domElements.nextReviewBtn.addEventListener('click', () => { if (quizState.reviewIndex < quizState.incorrectQuestions.length - 1) { triggerVibration('click'); quizState.reviewIndex++; loadReviewItem(); } });
        
        // --- HEADER BUTTONS ---
        domElements.dashboardBtn.addEventListener('click', () => { triggerVibration('open'); openDashboard(); });
        domElements.settingsBtn.addEventListener('click', () => { triggerVibration('open'); togglePopup('settings', true); });
        domElements.cheevosBtn.addEventListener('click', () => { 
            triggerVibration('open'); 
            checkDirectActionCheevo('checkCheevos');
            openCheevosModal(); 
        });
        domElements.topCatzBar.addEventListener('click', () => { triggerVibration('open'); openCatalogModal(); });

        // --- SETTINGS MODAL ---
        domElements.closeSettingsBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('settings', false); });
        domElements.lowPowerToggle.addEventListener('click', () => { triggerVibration('click'); state.settings.lowPower = !state.settings.lowPower; applySettings(); saveState(); });
        domElements.clearWeakSpotsBtn.addEventListener('click', () => {
            if (confirm('Are you sure? This will reset your Weak Spots, Mastered Questions, and Nemesis stats.')) { 
                triggerVibration('incorrect'); 
                state.weakSpotIds = []; state.masteredIds = []; state.questionStats = {}; 
                saveState(); updateAllUI(); alert('Weak spots cleared.'); 
            }
        });
        domElements.factoryResetBtn.addEventListener('click', () => { if (confirm('DANGER: Reset all points, ranks, and stats? This cannot be undone.')) { triggerVibration('incorrect'); factoryReset(); } });
        domElements.fullscreenToggle.addEventListener('click', () => {
            triggerVibration('click');
            if (!document.fullscreenElement) { 
                document.documentElement.requestFullscreen().catch(err => alert(`Error: ${err.message}`)); 
            } else { 
                document.exitFullscreen(); 
            }
        });

        // --- GAMIFICATION MODALS ---
        domElements.closeCheevosBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('cheevos', false); });
        domElements.closeCatalogBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('catalog', false); });
        domElements.rewardCloseBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('reward', false); });
        
        // --- EVENT DELEGATION FOR Cat-alog Grid ---
        domElements.catalogGrid.addEventListener('click', (e) => {
            const target = e.target;
            const catFile = target.dataset.catfile;
            if (!catFile) return;

            // Handle clicks on the info icon
            if (target.matches('.info-icon')) {
                e.stopPropagation(); // Prevents the image click from also firing
                triggerVibration('open');
                showRewardDetails(catFile);
                return;
            }

            // Handle clicks on the image itself for selection
            if (target.matches('.catalog-item') && !target.matches('.locked')) {
                triggerVibration('click');
                const selectedIndex = state.selectedCats.indexOf(catFile);
                if (selectedIndex > -1) {
                    state.selectedCats[selectedIndex] = null;
                } else {
                    const emptySlotIndex = state.selectedCats.indexOf(null);
                    if (emptySlotIndex > -1) {
                        state.selectedCats[emptySlotIndex] = catFile;
                    } else {
                        showToast("Crew is full! Deselect another cat first.");
                    }
                }
                checkDirectActionCheevo('customizeCrew');
                saveState();
                renderTopCatz();
                openCatalogModal(); // Re-render to show selection change
            }
        });
        
        domElements.rewardSelectBtn.addEventListener('click', (e) => {
            triggerVibration('click');
            const catFile = e.target.dataset.catfile;
            if (!catFile) return;

            const selectedIndex = state.selectedCats.indexOf(catFile);
            if (selectedIndex === -1) { 
                const emptySlotIndex = state.selectedCats.indexOf(null);
                if (emptySlotIndex > -1) {
                    state.selectedCats[emptySlotIndex] = catFile;
                } else {
                    showToast("Crew is full! Deselect another cat first.");
                    return;
                }
            }
            checkDirectActionCheevo('customizeCrew');
            saveState();
            renderTopCatz();
            togglePopup('reward', false);
        });
        console.log("Listeners: All event listeners attached.");
    }

    // --- HELPER FUNCTIONS ---
    function buildThemeSelector() {
        domElements.themeSelector.innerHTML = '';
        const themeNames = ['pink', 'green', 'orange', 'blue', 'solar', 'matrix'];
        const colors = { 
            'pink': '#ff00ff', 'green': '#00ff7f', 'orange': '#ff8c00', 
            'blue': '#00bfff', 'solar': '#ff4500', 'matrix': '#00ff41' 
        };
        themeNames.forEach(themeName => {
            const btn = document.createElement('button');
            btn.className = 'theme-select-btn';
            btn.dataset.theme = themeName;
            btn.style.backgroundColor = colors[themeName];
            btn.onclick = () => { 
                triggerVibration('click'); 
                state.settings.theme = themeName; 
                applySettings(); 
                checkDirectActionCheevo('changeTheme');
                saveState(); 
            };
            domElements.themeSelector.appendChild(btn);
        });
    }

    function openDashboard() {
        renderMasteryChart(); renderPersonalBests(); renderNemesisQuestion(); showScreen('dashboard');
    }

    function renderMasteryChart() { 
        domElements.masteryChartContainer.innerHTML = ''; 
        const categories = [...new Set(quizData.map(q => q.category))].sort(); 
        categories.forEach(cat => { 
            const total = quizData.filter(q => q.category === cat).length; 
            const mastered = state.masteredIds.filter(id => quizData.find(q=>q.id===id)?.category === cat).length; 
            const masteryPercent = total > 0 ? (mastered / total) * 100 : 0; 
            const item = document.createElement('div'); 
            item.className = 'chart-bar-item'; 
            item.innerHTML = `<span class="chart-bar-label">${cat}</span><div class="chart-bar-bg"><div class="chart-bar-fill" style="width: ${masteryPercent}%"></div></div>`; 
            domElements.masteryChartContainer.appendChild(item); 
        }); 
    }
    
    function renderPersonalBests() { 
        domElements.personalBestsContainer.innerHTML = `<p><strong>Best Score:</strong> ${state.stats.personalBestScore} questions correct.</p>`; 
    }
    
    function renderNemesisQuestion() { 
        let nemesisId = null, maxWrong = 0;
        for (const qid in state.questionStats) { 
            if (state.questionStats[qid].wrong > maxWrong) { maxWrong = state.questionStats[qid].wrong; nemesisId = qid; } 
        } 
        if (nemesisId) { 
            const q = quizData.find(q => q.id == nemesisId); 
            domElements.nemesisQuestionContainer.innerHTML = `<p>You've struggled with this one (${maxWrong} times):</p><strong>${q.question}</strong>`; 
        } else { 
            domElements.nemesisQuestionContainer.innerHTML = `<p>No nemesis identified. Keep up the great work!</p>`; 
        } 
    }
    
    // --- LET'S GO ---
    initialize();
});