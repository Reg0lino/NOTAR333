// NotaR333 - Main Application Controller v4.7

const domElements = {};

document.addEventListener('DOMContentLoaded', () => {
    
    const ids = [
        'home-screen', 'quiz-screen', 'results-screen', 'review-screen', 'dashboard-screen', 'explanation-popup', 'pause-modal', 
        'settings-modal', 'rank-up-modal', 'catalog-modal', 'reward-modal', 'mascot-container', 'top-catz-bar', 
        'study-guide-btn', 'dashboard-btn', 'settings-btn', 'rank-display', 'score-display', 'xp-bar-container', 
        'xp-bar-label', 'xp-bar-fill', 'xp-bar-text', 'resume-session-container', 'new-session-container', 'resume-session-btn', 
        'discard-session-btn', 'start-drill-btn', 'start-exam-sim-btn', 'review-weak-spots-btn', 'weak-spots-counter', 
        'pause-quiz-btn', 'progress-text', 'timer-display', 'progress-bar', 'q-emoji', 'q-text', 'weak-spot-indicator', 
        'answer-buttons', 'explanation-title', 'explanation-text', 'continue-quiz-btn', 'save-exit-btn', 'abandon-exit-btn', 
        'resume-quiz-btn', 'results-summary-text', 'points-earned-text', 'review-mission-btn', 'back-to-home-from-results-btn', 
        'review-content', 'prev-review-btn', 'next-review-btn', 'review-counter', 'finish-review-btn', 'mastery-chart-container', 
        'personal-bests-container', 'nemesis-question-container', 'back-to-home-from-dash-btn', 'close-settings-btn', 
        'fullscreen-toggle', 'haptics-toggle', 'theme-selector', 'clear-weak-spots-btn', 'factory-reset-btn', 
        'catalog-grid', 'close-catalog-btn', 'toast-notification', 'toast-text', 'rank-up-text', 'reward-image', 
        'reward-title', 'reward-description', 'reward-select-btn', 'reward-close-btn', 'particle-celebration-container'
    ];
    domElements.body = document.body;
    ids.forEach(id => {
        const camelCaseId = id.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
        domElements[camelCaseId] = document.getElementById(id);
    });
    domElements.topCatzWrapper = document.querySelector('.top-catz-wrapper');
    domElements.rankUpContent = document.querySelector('.rank-up-content');
    domElements.screens = { home: domElements.homeScreen, quiz: domElements.quizScreen, results: domElements.resultsScreen, review: domElements.reviewScreen, dashboard: domElements.dashboardScreen };
    domElements.popups = { explanation: domElements.explanationPopup, pause: domElements.pauseModal, settings: domElements.settingsModal, rankUp: domElements.rankUpModal, catalog: domElements.catalogModal, reward: domElements.rewardModal };

    function initialize() {
        loadState();
        buildThemeSelector();
        addEventListeners();
        applySettings();
        updateAllUI();
        checkForSavedSession();
        showScreen('home');
        updateNotificationIndicator();
        console.log("NotaR333 v4.7 Initialized and Ready.");
    }

    function addEventListeners() {
        document.addEventListener('keyup', (e) => {
            const key = e.key.toLowerCase();
            if (key === 'd' && domElements.quizScreen.classList.contains('active')) {
                const btn = domElements.answerButtons.querySelector('[data-correct="true"]');
                if (btn) btn.classList.toggle('debug-correct-answer');
            }
            if (key === 'f') {
                console.log("DEBUG: +1000 points added.");
                const previousRank = getCurrentRank();
                state.totalPoints += 1000;
                updateAllUI();
                const newRank = getCurrentRank();
                if (newRank.name !== previousRank.name) {
                    celebrationQueue.unshift({ type: 'rankup', rank: newRank });
                    processCelebrationQueue();
                }
                saveState();
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
            if (confirm('Discard your saved session?')) { triggerVibration('click'); clearSavedSession(); checkForSavedSession(); }
        });
        domElements.pauseQuizBtn.addEventListener('click', () => { triggerVibration('open'); pauseTimer(); togglePopup('pause', true); });
        domElements.answerButtons.addEventListener('click', e => { if (e.target.matches('.answer-btn')) selectAnswer(e.target); });
        domElements.continueQuizBtn.addEventListener('click', () => { triggerVibration('click'); handleNextQuestion(); });
        domElements.resumeQuizBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('pause', false); resumeTimer(); });
        domElements.saveExitBtn.addEventListener('click', () => { triggerVibration('click'); saveSession(); goHome(); togglePopup('pause', false); });
        domElements.abandonExitBtn.addEventListener('click', () => {
            if (confirm('Abandon this quiz attempt?')) { triggerVibration('click'); clearSavedSession(); goHome(); togglePopup('pause', false); }
        });
        domElements.reviewMissionBtn.addEventListener('click', () => { triggerVibration('click'); startReview(); });
        domElements.prevReviewBtn.addEventListener('click', () => { if (quizState.reviewIndex > 0) { triggerVibration('click'); quizState.reviewIndex--; loadReviewItem(); } });
        domElements.nextReviewBtn.addEventListener('click', () => { if (quizState.reviewIndex < quizState.incorrectQuestions.length - 1) { triggerVibration('click'); quizState.reviewIndex++; loadReviewItem(); } });
        domElements.dashboardBtn.addEventListener('click', () => { triggerVibration('open'); openDashboard(); });
        domElements.settingsBtn.addEventListener('click', () => { triggerVibration('open'); togglePopup('settings', true); });
        domElements.topCatzWrapper.addEventListener('click', () => { 
            triggerVibration('open'); 
            domElements.topCatzWrapper.classList.remove('has-new-rewards');
            openCatalogModal(); 
        });
        domElements.closeSettingsBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('settings', false); });
        domElements.hapticsToggle.addEventListener('click', () => {
            state.settings.haptics = !state.settings.haptics;
            triggerVibration('click');
            applySettings();
            saveState();
        });
        domElements.clearWeakSpotsBtn.addEventListener('click', () => {
            if (confirm('Are you sure? This will reset your Weak Spots...')) { 
                triggerVibration('incorrect'); state.weakSpotIds = []; state.masteredIds = []; state.questionStats = {}; 
                saveState(); updateAllUI(); alert('Weak spots cleared.'); 
            }
        });
        domElements.factoryResetBtn.addEventListener('click', () => { if (confirm('DANGER: Reset all progress?')) { triggerVibration('incorrect'); factoryReset(); } });
        domElements.fullscreenToggle.addEventListener('click', () => {
            triggerVibration('click');
            if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(err => alert(`Error: ${err.message}`));
            else document.exitFullscreen();
        });
        domElements.closeCatalogBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('catalog', false); });
        domElements.rewardCloseBtn.addEventListener('click', () => { triggerVibration('click'); togglePopup('reward', false); });
        
        domElements.catalogGrid.addEventListener('click', (e) => {
            const wrapper = e.target.closest('.catalog-item-wrapper');
            if (!wrapper) return;
            const img = wrapper.querySelector('.catalog-item');
            const catFile = img.dataset.catfile;
            const isLocked = img.classList.contains('locked');
            const viewRewardDetails = () => {
                triggerVibration('open');
                if (state.newlyUnlockedCats.includes(catFile)) {
                    state.newlyUnlockedCats = state.newlyUnlockedCats.filter(c => c !== catFile);
                    saveState();
                    wrapper.classList.remove('is-new');
                }
                showRewardDetails(catFile);
            };
            if (isLocked) {
                checkDirectActionCheevo('viewReward');
                viewRewardDetails();
                return;
            }
            if (e.target.matches('.info-icon')) {
                e.stopPropagation();
                viewRewardDetails();
                return;
            }
            if (e.target.matches('.catalog-item')) {
                triggerVibration('click');
                const selectedIndex = state.selectedCats.indexOf(catFile);
                if (selectedIndex > -1) {
                    state.selectedCats[selectedIndex] = null;
                } else {
                    const emptySlotIndex = state.selectedCats.indexOf(null);
                    if (emptySlotIndex > -1) {
                        state.selectedCats[emptySlotIndex] = catFile;
                    } else {
                        // --- MODIFIED: Updated toast message ---
                        showToast("Crew is full (5 max)! Deselect another cat first.");
                    }
                }
                checkDirectActionCheevo('customizeCrew');
                saveState();
                renderTopCatz();
                openCatalogModal();
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
                    // --- MODIFIED: Updated toast message ---
                    showToast("Crew is full (5 max)! Deselect another cat first."); 
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
            btn.onclick = () => { triggerVibration('click'); state.settings.theme = themeName; checkDirectActionCheevo('changeTheme'); applySettings(); saveState(); };
            domElements.themeSelector.appendChild(btn);
        });
    }

    function openDashboard() { renderMasteryChart(); renderPersonalBests(); renderNemesisQuestion(); showScreen('dashboard'); }

    function renderMasteryChart() { 
        domElements.masteryChartContainer.innerHTML = ''; 
        const categories = [...new Set(quizData.map(q => q.category))].sort(); 
        categories.forEach(cat => { 
            const total = quizData.filter(q => q.category === cat).length; 
            const mastered = state.masteredIds.filter(id => quizData.find(q=>q.id===id)?.category === cat).length; 
            const masteryPercent = total > 0 ? (mastered / total) * 100 : 0; 
            const item = document.createElement('div'); 
            item.className = 'chart-bar-item'; 
            // Set initial width to 0 for the animation
            item.innerHTML = `<span class="chart-bar-label">${cat}</span><div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 0%"></div></div>`; 
            domElements.masteryChartContainer.appendChild(item);
            setTimeout(() => { 
                item.querySelector('.chart-bar-fill').style.width = `${masteryPercent}%`; 
            }, 100);
        }); 
    }
    function renderPersonalBests() { domElements.personalBestsContainer.innerHTML = `<p><strong>Best Score:</strong> ${state.stats.personalBestScore} questions correct.</p>`; }
    function renderNemesisQuestion() { 
        let nemesisId = null, maxWrong = 0;
        for (const qid in state.questionStats) { if (state.questionStats[qid].wrong > maxWrong) { maxWrong = state.questionStats[qid].wrong; nemesisId = qid; } } 
        if (nemesisId) { 
            const q = quizData.find(q => q.id == nemesisId); 
            domElements.nemesisQuestionContainer.innerHTML = `<p>You've struggled with this one (${maxWrong} times):</p><strong>${q.question}</strong>`; 
        } else { 
            domElements.nemesisQuestionContainer.innerHTML = `<p>No nemesis identified. Keep up the great work!</p>`; 
        } 
    }
    initialize();
    });