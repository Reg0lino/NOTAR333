// NotaR333_OS - UI Management v3.0

// This module assumes DOM elements are globally available from main.js

/**
 * Switches the visible screen in the app.
 * @param {string} screenName - The key for the screen to show (e.g., 'home', 'quiz').
 */
function showScreen(screenName) {
    for (const key in domElements.screens) {
        domElements.screens[key]?.classList.remove('active');
    }
    domElements.screens[screenName]?.classList.add('active');
}

/**
 * Shows or hides a popup/modal.
 * @param {string} popupName - The key for the popup to show/hide.
 * @param {boolean} show - True to show, false to hide.
 */
function togglePopup(popupName, show) {
    domElements.popups[popupName]?.classList.toggle('visible', show);
}


/**
 * Applies visual settings from the state object.
 */
function applySettings() {
    domElements.body.className = `theme-${state.settings.theme}`;
    domElements.body.classList.toggle('low-power', state.settings.lowPower);
    domElements.lowPowerToggle.classList.toggle('active', state.settings.lowPower);

    // Update the theme selector buttons
    const themeButtons = domElements.themeSelector.children;
    for(const btn of themeButtons) {
        btn.classList.toggle('active', btn.dataset.theme === state.settings.theme);
    }
}

/**
 * Updates all static UI elements like rank, score, and XP bar.
 */
function updateAllUI() {
    const currentRank = getCurrentRank();
    domElements.rankDisplay.textContent = `//Rank: ${currentRank.name}`;
    domElements.scoreDisplay.textContent = `//Points: ${state.totalPoints}`;
    
    updateXpBar();
    updateWeakSpotsCounter();
    renderTopCatz();
}

/**
 * Updates the XP progression bar.
 */
function updateXpBar() {
    const currentRank = getCurrentRank();
    const currentRankIndex = ranks.findIndex(r => r.name === currentRank.name);

    if (currentRankIndex >= ranks.length - 1) { // Max rank
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

/**
 * Updates the text counter for weak spots on the home screen.
 */
function updateWeakSpotsCounter() {
    const count = state.weakSpotIds.length;
    if (count > 0) {
        domElements.weakSpotsCounter.textContent = `You have ${count} weak spot(s) to review.`;
    } else {
        domElements.weakSpotsCounter.textContent = "Your weak spots list is clear! Great job!";
    }
    domElements.reviewWeakSpotsBtn.classList.toggle('hidden', count === 0);
}

/**
 * Displays a toast notification.
 * @param {string} message - The text to display in the toast.
 */
function showToast(message) {
    domElements.toastText.innerHTML = message; // Use innerHTML to support emojis
    domElements.toastNotification.className = "show";
    setTimeout(() => {
        domElements.toastNotification.className = domElements.toastNotification.className.replace("show", "");
    }, 3000);
}


// --- Gamification UI ---

/**
 * Renders the three cat images in the header bar.
 */
function renderTopCatz() {
    const catzBar = domElements.topCatzBar;
    catzBar.innerHTML = ''; // Clear existing cats
    for (let i = 0; i < 3; i++) {
        const catSrc = state.selectedCats[i];
        const img = document.createElement('img');
        // Use a placeholder image for empty slots
        img.src = catSrc ? `images/${catSrc}` : 'images/placeholder_empty.png'; 
        img.alt = `Custom Mascot ${i + 1}`;
        img.className = 'top-cat';
        if (!catSrc) {
            img.classList.add('empty-slot');
        }
        catzBar.appendChild(img);
    }
}

/**
 * Opens and renders the content of the achievements modal.
 */
function openCheevosModal() {
    const grid = domElements.cheevosGrid;
    grid.innerHTML = ''; // Clear old content
    
    cheevoData.forEach(cheevo => {
        const item = document.createElement('div');
        item.className = 'cheevo-item';
        item.textContent = cheevo.icon;
        item.title = `${cheevo.title}: ${cheevo.description}`; // Tooltip
        
        const isUnlocked = state.unlockedCheevos.includes(cheevo.id);
        if (!isUnlocked) {
            item.classList.add('locked');
        }
        grid.appendChild(item);
    });
    
    togglePopup('cheevos', true);
}

/**
 * Opens and renders the content of the Cat-alog modal.
 */
function openCatalogModal() {
    const grid = domElements.catalogGrid;
    grid.innerHTML = ''; // Clear old content
    
    allCatGifs.forEach(catFile => {
        const isUnlocked = state.unlockedCats.includes(catFile);
        
        const img = document.createElement('img');
        img.src = `images/${catFile}`;
        img.className = 'catalog-item';
        img.dataset.catfile = catFile;
        
        if (!isUnlocked) {
            img.classList.add('locked');
        } else {
             // Add selected class if this cat is in the top bar
            if (state.selectedCats.includes(catFile)) {
                img.classList.add('selected');
            }
        }
        grid.appendChild(img);
    });
    
    togglePopup('catalog', true);
}