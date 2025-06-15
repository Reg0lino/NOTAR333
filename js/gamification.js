// NotaR333_OS - Gamification Engine v3.9 (Master Celebration Queue)

// --- NEW: Master queue for all major celebrations ---
let celebrationQueue = [];
let isProcessingCelebration = false;

function getCurrentRank() {
    return ranks.slice().reverse().find(r => state.totalPoints >= r.points);
}

/**
 * NEW: Displays the rank up modal. Called by the queue processor.
 * @param {object} rankData - The new rank object.
 */
function displayRankUpModal(rankData) {
    triggerVibration('rankUp');
    domElements.rankUpText.textContent = `You are now a ${rankData.name}!`;
    togglePopup('rankUp', true);

    if (domElements.particleCelebrationContainer) {
        triggerConfetti({ 
            sourceElement: domElements.rankUpContent,
            count: 60,
            container: domElements.particleCelebrationContainer
        });
    }

    setTimeout(() => {
        togglePopup('rankUp', false);
    }, 4000); // Display for 4 seconds
}

/**
 * NEW: Displays a single cheevo notification. Called by the queue processor.
 * @param {string} cheevoId - The ID of the cheevo to display.
 */
function displayCheevoNotification(cheevoId) {
    const cheevo = cheevoData.find(c => c.id === cheevoId);
    if (!cheevo) return;

    const toastMessage = `${cheevo.icon} Achievement: ${cheevo.title}!`;
    showToast(toastMessage);
    triggerVibration('cheevoUnlock');
    triggerConfetti({ sourceElement: domElements.toastNotification, count: 40 });
    updateAllUI(); // Update UI for point changes
}

/**
 * Processes the next celebration in the queue.
 */
function processCelebrationQueue() {
    if (isProcessingCelebration || celebrationQueue.length === 0) {
        return;
    }
    isProcessingCelebration = true;

    const event = celebrationQueue.shift(); // Get the next event object

    if (event.type === 'rankup') {
        displayRankUpModal(event.rank);
        // Rank ups are big, give them a longer pause
        setTimeout(() => {
            isProcessingCelebration = false;
            processCelebrationQueue();
        }, 4500); 
    } else if (event.type === 'cheevo') {
        displayCheevoNotification(event.id);
        // Cheevo toasts are shorter
        setTimeout(() => {
            isProcessingCelebration = false;
            processCelebrationQueue();
        }, 3500);
    }
}

// --- CHEEVO LOGIC ---
const cheevoConditions = {
    firstSession: () => state.stats.completedQuizCount >= 1,
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
    fiveSessions: () => state.stats.completedQuizCount >= 5,
    totalQuestions100: () => state.stats.totalQuestionsAnswered >= 100,
    masterCategoryFoundations: () => checkCategoryMastery('Foundations'),
    masterCategoryREN: () => checkCategoryMastery('Electronic Notarization'),
    masterCategoryProhibited: () => checkCategoryMastery('Prohibited Conduct'),
    masterAll: () => state.masteredIds.length === quizData.length,
    changeTheme: () => true,
    customizeCrew: () => true,
};
function checkCategoryMastery(categoryName) {
    const categoryQuestions = quizData.filter(q => q.category === categoryName);
    return categoryQuestions.every(q => state.masteredIds.includes(q.id));
}

/**
 * Checks all cheevos and adds any unlocked ones to the celebration queue.
 */
function checkAllCheevos() {
    cheevoData.forEach(cheevo => {
        if (!state.unlockedCheevos.includes(cheevo.id)) {
            const condition = cheevoConditions[cheevo.id];
            if (condition && condition()) {
                unlockCheevo(cheevo.id);
            }
        }
    });
}

function checkMidQuizCheevos(type) {
    let cheevoId;
    if (type === 'streak') cheevoId = 'streak5';
    else if (type === 'weakness_eliminated') cheevoId = 'weaknessEliminated';
    else if (type === 'first_weak_spot') cheevoId = 'firstWeakSpot';
    if (cheevoId && !state.unlockedCheevos.includes(cheevoId)) {
        const condition = cheevoConditions[cheevoId];
        if (condition && condition()) {
            unlockCheevo(cheevoId);
            processCelebrationQueue();
        }
    }
}

function checkDirectActionCheevo(cheevoId) {
    if (!state.unlockedCheevos.includes(cheevoId)) {
        unlockCheevo(cheevoId);
        processCelebrationQueue();
    }
}

/**
 * Updates state for an unlocked cheevo and queues the notification.
 * @param {string} cheevoId 
 */
function unlockCheevo(cheevoId) {
    const cheevo = cheevoData.find(c => c.id === cheevoId);
    if (!cheevo || state.unlockedCheevos.includes(cheevoId)) return;
    
    state.unlockedCheevos.push(cheevoId);
    state.totalPoints += cheevo.points;
    if (cheevo.catImage) {
        if (!state.unlockedCats.includes(cheevo.catImage)) {
            state.unlockedCats.push(cheevo.catImage);
        }
        if (!state.newlyUnlockedCats.includes(cheevo.catImage)) {
            state.newlyUnlockedCats.push(cheevo.catImage);
        }
    }
    
    // Add a cheevo event object to the master queue
    celebrationQueue.push({ type: 'cheevo', id: cheevoId });
    console.log(`Queued Cheevo: ${cheevo.title}`);
}