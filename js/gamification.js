// NotaR333_OS - Gamification Engine v3.5 (Sequential Unlocks)

// --- NEW: Queue system for achievements ---
let cheevoUnlockQueue = [];
let isQueueProcessing = false;

function getCurrentRank() {
    return ranks.slice().reverse().find(r => state.totalPoints >= r.points);
}

function triggerRankUp(newRank) {
    triggerVibration('rankUp');
    domElements.rankUpText.textContent = `You are now a ${newRank.name}!`;
    togglePopup('rankUp', true);
    
    const container = domElements.rankUpModal.querySelector('.rank-up-content');
    if (container) {
        triggerConfetti({ sourceElement: container, count: 50 });
    }
    
    setTimeout(() => {
        togglePopup('rankUp', false);
    }, 4000);
}

// --- CHEEVO (ACHIEVEMENT) LOGIC ---
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
    checkCheevos: () => true,
    customizeCrew: () => true,
};

function checkCategoryMastery(categoryName) {
    const categoryQuestions = quizData.filter(q => q.category === categoryName);
    return categoryQuestions.every(q => state.masteredIds.includes(q.id));
}

function checkAllCheevos() {
    cheevoData.forEach(cheevo => {
        if (!state.unlockedCheevos.includes(cheevo.id)) {
            const condition = cheevoConditions[cheevo.id];
            if (condition && condition()) {
                unlockCheevo(cheevo.id);
            }
        }
    });
    // After checking all, start processing the queue
    processCheevoQueue();
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
            processCheevoQueue(); // Start processing immediately for mid-quiz unlocks
        }
    }
}

function checkDirectActionCheevo(cheevoId) {
    if (!state.unlockedCheevos.includes(cheevoId)) {
        unlockCheevo(cheevoId);
        processCheevoQueue();
    }
}

/**
 * Updates state for an unlocked cheevo and adds it to the notification queue.
 * @param {string} cheevoId - The ID of the cheevo to unlock.
 */
function unlockCheevo(cheevoId) {
    const cheevo = cheevoData.find(c => c.id === cheevoId);
    if (!cheevo || state.unlockedCheevos.includes(cheevoId)) return;

    // Immediately update state so other checks don't re-trigger it
    state.unlockedCheevos.push(cheevoId);
    state.totalPoints += cheevo.points;
    if (cheevo.catImage) {
        if (!state.unlockedCats.includes(cheevo.catImage)) {
            state.unlockedCats.push(cheevo.catImage);
        }
        // Add to the "newly unlocked" list for the notification dot
        if (!state.newlyUnlockedCats.includes(cheevo.catImage)) {
            state.newlyUnlockedCats.push(cheevo.catImage);
        }
    }
    
    // Add to the queue instead of showing immediately
    if (!cheevoUnlockQueue.includes(cheevoId)) {
       cheevoUnlockQueue.push(cheevoId);
    }

    console.log(`Queued: ${cheevo.title}`);
}

/**
 * Processes the next achievement in the queue, showing its notification.
 */
function processCheevoQueue() {
    if (isQueueProcessing || cheevoUnlockQueue.length === 0) {
        return; // Don't run if already running or if queue is empty
    }
    isQueueProcessing = true;

    const cheevoId = cheevoUnlockQueue.shift(); // Get the first item
    const cheevo = cheevoData.find(c => c.id === cheevoId);
    
    if (cheevo) {
        const toastMessage = `${cheevo.icon} Achievement: ${cheevo.title}!`;
        showToast(toastMessage);
        triggerVibration('cheevoUnlock');
        triggerConfetti({ sourceElement: domElements.toastNotification, count: 40 });
        updateAllUI(); // Update UI for point changes
    }
    
    // Set a timeout to process the next item after the toast fades
    setTimeout(() => {
        isQueueProcessing = false;
        processCheevoQueue(); // Try to process the next item
    }, 3500);
}