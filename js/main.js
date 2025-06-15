// NotaR333 - Main Application Controller v5.0 (Final)

// The global domElements object is now defined and populated in js/dom.js

document.addEventListener('DOMContentLoaded', () => {
    // This listener now waits for the DOM elements to be ready
    // and then initializes the application logic.
    
    function initialize() {
        loadState();
        buildThemeSelector();
        addEventListeners();
        applySettings();
        updateAllUI();
        checkForSavedSession();
        showScreen('home');
        updateNotificationIndicator();
        console.log("NotaR333 v5.0 Initialized and Ready.");
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
            
            const viewRewardDetailsAndClear = () => {
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
                viewRewardDetailsAndClear();
                return;
            }
            if (e.target.matches('.info-icon')) {
                e.stopPropagation();
                viewRewardDetailsAndClear();
                return;
            }
            if (e.target.matches('.catalog-item')) {
                triggerVibration('click');
                const selectedIndex = state.selectedCats.indexOf(catFile);
                if (selectedIndex > -1) {
                    state.selectedCats[selectedIndex] = null;
                } else {
                    const emptySlotIndex = state.selectedCats.indexOf(null);
                    if (emptySlotIndex > -1) state.selectedCats[emptySlotIndex] = catFile;
                    else showToast("Crew is full (5 max)! Deselect another cat first.");
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
                } else { showToast("Crew is full (5 max)! Deselect another cat first."); return; }
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
            const item = document.createElement('div');
            item.className = 'chart-bar-item';
            const label = document.createElement('span');
            label.className = 'chart-bar-label';
            label.textContent = cat;
            const barBg = document.createElement('div');
            barBg.className = 'chart-bar-bg';
            const barFill = document.createElement('div');
            barFill.className = 'chart-bar-fill';
            barFill.style.width = '0%';
            barBg.appendChild(barFill);
            item.appendChild(label);
            item.appendChild(barBg);
            domElements.masteryChartContainer.appendChild(item);
            const total = quizData.filter(q => q.category === cat).length;
            const mastered = state.masteredIds.filter(id => quizData.find(q=>q.id===id)?.category === cat).length;
            const masteryPercent = total > 0 ? (mastered / total) * 100 : 0;
            setTimeout(() => { barFill.style.width = `${masteryPercent}%`; }, 100);
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