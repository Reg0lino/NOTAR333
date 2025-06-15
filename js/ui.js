// NotaR333_OS - UI Management v3.3 (Info Icon Update)

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
    domElements.body.classList.toggle('low-power', state.settings.lowPower);
    domElements.lowPowerToggle.classList.toggle('active', state.settings.lowPower);

    const themeButtons = domElements.themeSelector.children;
    for(const btn of themeButtons) {
        btn.classList.toggle('active', btn.dataset.theme === state.settings.theme);
    }
}

function updateAllUI() {
    const currentRank = getCurrentRank();
    domElements.rankDisplay.textContent = `//Rank: ${currentRank.name}`;
    domElements.scoreDisplay.textContent = `//Points: ${state.totalPoints}`;
    
    updateXpBar();
    updateWeakSpotsCounter();
    renderTopCatz();
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

// --- Gamification & Reward UI ---

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

function openCheevosModal() {
    const grid = domElements.cheevosGrid;
    grid.innerHTML = ''; 
    cheevoData.forEach(cheevo => {
        const item = document.createElement('div');
        item.className = 'cheevo-item';
        item.textContent = cheevo.icon;
        item.title = `${cheevo.title}: ${cheevo.description}`;
        if (!state.unlockedCheevos.includes(cheevo.id)) {
            item.classList.add('locked');
        }
        grid.appendChild(item);
    });
    togglePopup('cheevos', true);
}

function openCatalogModal() {
    const grid = domElements.catalogGrid;
    grid.innerHTML = '';
    
    allCatGifs.forEach(catFile => {
        const isUnlocked = state.unlockedCats.includes(catFile);
        
        // --- NEW: Create a wrapper for the image and info icon ---
        const wrapper = document.createElement('div');
        wrapper.className = 'catalog-item-wrapper';

        const img = document.createElement('img');
        img.src = `images/${catFile}`;
        img.className = 'catalog-item';
        img.dataset.catfile = catFile;

        wrapper.appendChild(img);
        
        if (isUnlocked) {
            if (state.selectedCats.includes(catFile)) {
                img.classList.add('selected');
            }
            // Add the info icon only if the cat is unlocked
            const infoIcon = document.createElement('span');
            infoIcon.className = 'info-icon';
            infoIcon.textContent = 'i';
            infoIcon.dataset.catfile = catFile; // Carry over data for easy lookup
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