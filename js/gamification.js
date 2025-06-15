// NotaR333_OS - Gamification Engine v3.0

/**
 * Gets the user's current rank based on total points.
 * @returns {object} The rank object { points, name }.
 */
function getCurrentRank() {
    // Find the highest rank the user has achieved
    return ranks.slice().reverse().find(r => state.totalPoints >= r.points);
}

/**
 * Triggers the visual and haptic celebration for ranking up.
 * @param {object} newRank - The new rank object the user has achieved.
 */
function triggerRankUp(newRank) {
    triggerVibration('success');
    domElements.rankUpText.textContent = `You are now a ${newRank.name}!`;
    togglePopup('rankUp', true);
    
    // This is a dummy particle effect. In Sprint 4 this will be improved.
    const container = document.getElementById('particle-celebration-container');
    if (container) {
        container.innerHTML = '🎉'.repeat(50); // Simple text-based particles for now
    }
    
    setTimeout(() => {
        togglePopup('rankUp', false);
    }, 4000);
}


// --- CHEEVO (ACHIEVEMENT) LOGIC ---

// Define the unlock conditions for each achievement.
// This ties the cheevoData from data.js to the live game state.
const cheevoConditions = {
    firstSession: () => state.stats.completedQuizCount === 1,
    first100: () => state.totalPoints >= 100,
    firstWeakSpot: () => state.weakSpotIds.length > 0,
    firstReview: () => state.stats.completedReviews > 0,
    perfectDrill: () => quizState.mode === 'drill' && quizState.incorrectQuestions.length === 0,
    passExamSim: () => quizState.mode === 'exam_sim' && (quizState.questions.length - quizState.incorrectQuestions.length) / quizState.questions.length >= 0.7,
    aceExamSim: () => quizState.mode === 'exam_sim' && (quizState.questions.length - quizState.incorrectQuestions.length) / quizState.questions.length >= 0.9,
    streak5: () => quizState.correctStreak >= 5,
    weaknessEliminated: () => quizState.weaknessJustEliminated,
    totalPoints1000: () => state.totalPoints >= 1000,
    clearWeakSpots: () => state.stats.hadFiveWeakSpots && state.weakSpotIds.length === 0,
    fiveSessions: () => state.stats.completedQuizCount === 5,
    totalQuestions100: () => state.stats.totalQuestionsAnswered >= 100,
    masterCategoryFoundations: () => checkCategoryMastery('Foundations'),
    masterCategoryREN: () => checkCategoryMastery('Electronic Notarization'),
    masterCategoryProhibited: () => checkCategoryMastery('Prohibited Conduct'),
    masterAll: () => state.masteredIds.length === quizData.length,
    changeTheme: () => true, // Special case, triggered directly
    checkCheevos: () => true, // Special case, triggered directly
    customizeCrew: () => true, // Special case, triggered directly
};

/**
 * Checks if a specific category has been fully mastered.
 * @param {string} categoryName The category to check.
 * @returns {boolean} True if all questions in the category are mastered.
 */
function checkCategoryMastery(categoryName) {
    const categoryQuestions = quizData.filter(q => q.category === categoryName);
    return categoryQuestions.every(q => state.masteredIds.includes(q.id));
}


/**
 * The main function to check all achievements. Called after a quiz.
 */
function checkAllCheevos() {
    cheevoData.forEach(cheevo => {
        // If cheevo is not already unlocked and its condition is met
        if (!state.unlockedCheevos.includes(cheevo.id)) {
            const condition = cheevoConditions[cheevo.id];
            if (condition && condition()) {
                unlockCheevo(cheevo.id);
            }
        }
    });
}

/**
 * Checks for achievements that can be awarded mid-quiz.
 * @param {string} type - The type of check to perform (e.g., 'streak', 'weakness_eliminated').
 */
function checkMidQuizCheevos(type) {
    let cheevoId;
    if (type === 'streak') {
        cheevoId = 'streak5';
    } else if (type === 'weakness_eliminated') {
        cheevoId = 'weaknessEliminated';
    } else if (type === 'first_weak_spot') {
        cheevoId = 'firstWeakSpot';
    }

    if (cheevoId && !state.unlockedCheevos.includes(cheevoId)) {
        const condition = cheevoConditions[cheevoId];
        if (condition && condition()) {
            unlockCheevo(cheevoId);
        }
    }
}

/**
 * Checks for achievements triggered by direct UI interaction.
 * @param {string} cheevoId - The ID of the achievement to check and unlock.
 */
function checkDirectActionCheevo(cheevoId) {
    if (!state.unlockedCheevos.includes(cheevoId)) {
        unlockCheevo(cheevoId);
    }
}

/**
 * Awards an achievement to the user.
 * @param {string} cheevoId - The ID of the cheevo to unlock.
 */
function unlockCheevo(cheevoId) {
    const cheevo = cheevoData.find(c => c.id === cheevoId);
    if (!cheevo || state.unlockedCheevos.includes(cheevoId)) {
        return; // Already unlocked or invalid ID
    }

    // 1. Update state
    state.unlockedCheevos.push(cheevoId);
    state.totalPoints += cheevo.points;
    if (cheevo.catImage && !state.unlockedCats.includes(cheevo.catImage)) {
        state.unlockedCats.push(cheevo.catImage);
    }

    // 2. Show a toast notification
    showToast(`${cheevo.icon} Achievement Unlocked: ${cheevo.title}!`);
    triggerVibration('success');

    // 3. Update the UI to reflect new points
    updateAllUI();

    console.log(`Unlocked: ${cheevo.title}`);
}