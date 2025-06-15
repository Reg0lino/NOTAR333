// NotaR333_OS - UI Management v4.3 (Final Fix)

function showScreen(screenName) {
    for (const key in domElements.screens) {
        domElements.screens[key]?.classList.remove('active');
    }
    domElements.screens[screenName]?.classList.add('active');
}

function togglePopup(popupName, show) {
    domElements.popups[popupName]?.classList.toggle('visible', show);
}

function applySettings() {
    domElements.body.className = `theme-${state.settings.theme}`;
    domElements.hapticsToggle.classList.toggle('active', state.settings.haptics);
    domElements.hapticsToggle.textContent = state.settings.haptics ? '📳' : '📴';

    const themeButtons = domElements.themeSelector.children;
    for(const btn of themeButtons) {
        btn.classList.toggle('active', btn.dataset.theme === state.settings.theme);
    }
}

function updateNotificationIndicator() {
    const hasNew = state.newlyUnlockedCats && state.newlyUnlockedCats.length > 0;
    // --- FIX: Target the wrapper, not the bar itself ---
    if (domElements.topCatzWrapper) {
        domElements.topCatzWrapper.classList.toggle('has-new-rewards', hasNew);
    }
    console.log(`UI: Notification indicator updated. Has new rewards: ${hasNew}`);
}

function updateAllUI() {
    const currentRank = getCurrentRank();
    domElements.rankDisplay.textContent = `//Rank: ${currentRank.name}`;
    domElements.scoreDisplay.textContent = `//Points: ${state.totalPoints}`;
    updateXpBar();
    updateWeakSpotsCounter();
    renderTopCatz();
    updateNotificationIndicator(); 
}

function updateXpBar() {
    const currentRank = getCurrentRank();
    const currentRankIndex = ranks.findIndex(r => r.name === currentRank.name);
    if (currentRankIndex >= ranks.length - 1) {
        domElements.xpBarLabel.textContent = "// RANK MAX //";
        domElements.xpBarFill.style.width = '100%';
        domElements.xpBarText.textContent = '✨ Complete! ✨';
    } else {
        const nextRank = ranks[currentRankIndex + 1];
        const pointsForNextRank = nextRank.points - currentRank.points;
        const pointsIntoCurrentRank = state.totalPoints - currentRank.points;
        const progressPercent = Math.max(0, (pointsIntoCurrentRank / pointsForNextRank) * 100);
        domElements.xpBarLabel.textContent = `Next Rank:`;
        domElements.xpBarFill.style.width = `${progressPercent}%`;
        domElements.xpBarText.textContent = `${pointsIntoCurrentRank} / ${pointsForNextRank}`;
    }
}

function updateWeakSpotsCounter() {
    const count = state.weakSpotIds.length;
    domElements.weakSpotsCounter.textContent = count > 0 
        ? `You have ${count} weak spot(s) to review.` 
        : "Your weak spots list is clear! Great job!";
    domElements.reviewWeakSpotsBtn.classList.toggle('hidden', count === 0);
}

function showToast(message) {
    domElements.toastText.innerHTML = message;
    domElements.toastNotification.className = "show";
    setTimeout(() => {
        domElements.toastNotification.className = domElements.toastNotification.className.replace("show", "");
    }, 3000);
}

function renderTopCatz() {
    const catzBar = domElements.topCatzBar;
    catzBar.innerHTML = ''; 
    for (let i = 0; i < 3; i++) {
        const catSrc = state.selectedCats[i];
        const img = document.createElement('img');
        img.src = catSrc ? `images/${catSrc}` : 'images/placeholder_empty.png';
        img.alt = `Custom Mascot ${i + 1}`;
        img.className = 'top-cat';
        if (!catSrc) {
            img.classList.add('empty-slot');
        }
        catzBar.appendChild(img);
    }
}

function openCatalogModal() {
    const grid = domElements.catalogGrid;
    grid.innerHTML = '';
    allCatGifs.forEach(catFile => {
        const isUnlocked = state.unlockedCats.includes(catFile);
        const wrapper = document.createElement('div');
        wrapper.className = 'catalog-item-wrapper';

        // --- FIX: Add individual notification dot logic ---
        if (state.newlyUnlockedCats.includes(catFile)) {
            wrapper.classList.add('is-new');
        }

        const img = document.createElement('img');
        img.src = `images/${catFile}`;
        img.className = 'catalog-item';
        img.dataset.catfile = catFile;
        wrapper.appendChild(img);

        if (isUnlocked) {
            if (state.selectedCats.includes(catFile)) {
                img.classList.add('selected');
            }
            const infoIcon = document.createElement('span');
            infoIcon.className = 'info-icon';
            infoIcon.textContent = 'ⓘ';
            infoIcon.dataset.catfile = catFile;
            wrapper.appendChild(infoIcon);
        } else {
            img.classList.add('locked');
        }
        grid.appendChild(wrapper);
    });
    togglePopup('catalog', true);
}

function showRewardDetails(catFile) {
    const cheevo = cheevoData.find(c => c.catImage === catFile);
    if (!cheevo) return;
    domElements.rewardImage.src = `images/${catFile}`;
    domElements.rewardTitle.textContent = cheevo.title;
    domElements.rewardDescription.textContent = cheevo.description;
    domElements.rewardSelectBtn.dataset.catfile = catFile;
    togglePopup('reward', true);
}