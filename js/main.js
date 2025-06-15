// NotaR333_OS - Main Application Controller v3.3 (Info Icon Update)

const domElements = {};

document.addEventListener('DOMContentLoaded', () => {
    // DOM Element Population (Streamlined)
    const ids = [
        'home-screen', 'quiz-screen', 'results-screen', 'review-screen', 'dashboard-screen', 'explanation-popup', 'pause-modal', 
        'settings-modal', 'rank-up-modal', 'cheevos-modal', 'catalog-modal', 'reward-modal', 'mascot-container', 'top-catz-bar', 
        'study-guide-btn', 'cheevos-btn', 'dashboard-btn', 'settings-btn', 'rank-display', 'score-display', 'xp-bar-container', 
        'xp-bar-label', 'xp-bar-fill', 'xp-bar-text', 'resume-session-container', 'new-session-container', 'resume-session-btn', 
        'discard-session-btn', 'start-drill-btn', 'start-exam-sim-btn', 'review-weak-spots-btn', 'weak-spots-counter', 
        'pause-quiz-btn', 'progress-text', 'timer-display', 'progress-bar', 'q-emoji', 'q-text', 'weak-spot-indicator', 
        'answer-buttons', 'explanation-title', 'explanation-text', 'continue-quiz-btn', 'save-exit-btn', 'abandon-exit-btn', 
        'resume-quiz-btn', 'results-summary-text', 'points-earned-text', 'review-mission-btn', 'back-to-home-from-results-btn', 
        'review-content', 'prev-review-btn', 'next-review-btn', 'review-counter', 'finish-review-btn', 'mastery-chart-container', 
        'personal-bests-container', 'nemesis-question-container', 'back-to-home-from-dash-btn', 'close-settings-btn', 
        'fullscreen-toggle', 'low-power-toggle', 'theme-selector', 'clear-weak-spots-btn', 'factory-reset-btn', 'cheevos-grid', 
        'close-cheevos-btn', 'catalog-grid', 'close-catalog-btn', 'toast-notification', 'toast-text', 'rank-up-text', 'reward-image', 
        'reward-title', 'reward-description', 'reward-select-btn', 'reward-close-btn'
    ];
    domElements.body = document.body;
    ids.forEach(id => {
        const camelCaseId = id.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
        domElements[camelCaseId] = document.getElementById(id);
    });
    domElements.screens = { home: domElements.homeScreen, quiz: domElements.quizScreen, results: domElements.resultsScreen, review: domElements.reviewScreen, dashboard: domElements.dashboardScreen };
    domElements.popups = { explanation: domElements.explanationPopup, pause: domElements.pauseModal, settings: domElements.settingsModal, rankUp: domElements.rankUpModal, cheevos: domElements.cheevosModal, catalog: domElements.catalogModal, reward: domElements.rewardModal };

    function initialize() {
        loadState();
        buildThemeSelector();
        applySettings();
        updateAllUI();
        checkForSavedSession();
        addEventListeners();
        showScreen('home');
        console.log("NotaR333_OS v3.3 Initialized");
    }

    function addEventListeners() {
        document.addEventListener('keyup', (e) => {
            if (e.key.toLowerCase() === 'd' && domElements.screens.quiz.classList.contains('active')) {
                const btn = domElements.answerButtons.querySelector('[data-correct="true"]');
                if (btn) btn.classList.toggle('debug-correct-answer');
            }
        });

        const goHome = () => { triggerVibration('click'); checkForSavedSession(); updateAllUI(); showScreen('home'); };
        domElements.backToHomeFromResultsBtn.addEventListener('click', goHome);
        domElements.backToHomeFromDashBtn.addEventListener('click', goHome);
        domElements.finishReviewBtn.addEventListener('click', goHome);

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
            if (confirm('Discard session?')) { clearSavedSession(); checkForSavedSession(); }
        });

        domElements.pauseQuizBtn.addEventListener('click', () => { triggerVibration('open'); pauseTimer(); togglePopup('pause', true); });
        domElements.answerButtons.addEventListener('click', e => { if (e.target.matches('.answer-btn')) selectAnswer(e.target); });
        domElements.continueQuizBtn.addEventListener('click', () => { triggerVibration('click'); handleNextQuestion(); });
        domElements.resumeQuizBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('pause', false); resumeTimer(); });
        domElements.saveExitBtn.addEventListener('click', () => { triggerVibration('click'); saveSession(); goHome(); togglePopup('pause', false); });
        domElements.abandonExitBtn.addEventListener('click', () => {
            triggerVibration('click');
            if (confirm('Abandon quiz?')) { clearSavedSession(); goHome(); togglePopup('pause', false); }
        });

        domElements.reviewMissionBtn.addEventListener('click', () => { triggerVibration('click'); startReview(); });
        domElements.prevReviewBtn.addEventListener('click', () => { if (quizState.reviewIndex > 0) { triggerVibration('click'); quizState.reviewIndex--; loadReviewItem(); } });
        domElements.nextReviewBtn.addEventListener('click', () => { if (quizState.reviewIndex < quizState.incorrectQuestions.length - 1) { triggerVibration('click'); quizState.reviewIndex++; loadReviewItem(); } });
        
        domElements.dashboardBtn.addEventListener('click', () => { triggerVibration('open'); openDashboard(); });
        domElements.settingsBtn.addEventListener('click', () => { triggerVibration('open'); togglePopup('settings', true); });
        domElements.cheevosBtn.addEventListener('click', () => { triggerVibration('open'); checkDirectActionCheevo('checkCheevos'); openCheevosModal(); });
        domElements.topCatzBar.addEventListener('click', () => { triggerVibration('open'); openCatalogModal(); });

        domElements.closeSettingsBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('settings', false); });
        domElements.lowPowerToggle.addEventListener('click', () => { triggerVibration('click'); state.settings.lowPower = !state.settings.lowPower; applySettings(); saveState(); });
        domElements.clearWeakSpotsBtn.addEventListener('click', () => {
            if (confirm('Reset Weak Spots?')) { triggerVibration('incorrect'); state.weakSpotIds = []; state.masteredIds = []; state.questionStats = {}; saveState(); updateAllUI(); alert('Weak spots cleared.'); }
        });
        domElements.factoryResetBtn.addEventListener('click', () => { if (confirm('DANGER: Reset all progress?')) { triggerVibration('incorrect'); factoryReset(); } });
        domElements.fullscreenToggle.addEventListener('click', () => {
            triggerVibration('click');
            if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(err => alert(`Error: ${err.message}`));
            else document.exitFullscreen();
        });

        domElements.closeCheevosBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('cheevos', false); });
        domElements.closeCatalogBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('catalog', false); });
        domElements.closeRewardBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('reward', false); });
        
        // --- UPDATED: Event Delegation for Cat-alog Grid ---
        domElements.catalogGrid.addEventListener('click', (e) => {
            const target = e.target;
            const catFile = target.dataset.catfile;

            // Handle clicks on the info icon
            if (target.matches('.info-icon')) {
                e.stopPropagation(); // Prevent the image click from firing
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
                    if (emptySlotIndex > -1) state.selectedCats[emptySlotIndex] = catFile;
                    else showToast("Crew is full! Deselect another cat first.");
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
            if (selectedIndex === -1) { // Only add if not already selected
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
    }

    function buildThemeSelector() {
        domElements.themeSelector.innerHTML = '';
        const themeNames = ['pink', 'green', 'orange', 'blue', 'solar', 'matrix'];
        const colors = { 'pink': '#ff00ff', 'green': '#00ff7f', 'orange': '#ff8c00', 'blue': '#00bfff', 'solar': '#ff4500', 'matrix': '#00ff41' };
        themeNames.forEach(themeName => {
            const btn = document.createElement('button');
            btn.className = 'theme-select-btn';
            btn.dataset.theme = themeName;
            btn.style.backgroundColor = colors[themeName];
            btn.onclick = () => { triggerVibration('click'); state.settings.theme = themeName; applySettings(); checkDirectActionCheevo('changeTheme'); saveState(); };
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
    function renderPersonalBests() { domElements.personalBestsContainer.innerHTML = `<p><strong>Best Score:</strong> ${state.stats.personalBestScore} questions correct.</p>`; }
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
    
    initialize();
});