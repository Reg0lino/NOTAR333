// NotaR333_OS - Gamification Engine v3.2 (FX Update)

function getCurrentRank() {
    return ranks.slice().reverse().find(r => state.totalPoints >= r.points);
}

function triggerRankUp(newRank) {
    // --- INTEGRATE REFINED HAPTICS AND CONFETTI ---
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
}

function checkMidQuizCheevos(type) {
    let cheevoId;
    if (type === 'streak') cheevoId = 'streak5';
    else if (type === 'weakness_eliminated') cheevoId = 'weaknessEliminated';
    else if (type === 'first_weak_spot') cheevoId = 'firstWeakSpot';

    if (cheevoId && !state.unlockedCheevos.includes(cheevoId)) {
        const condition = cheevoConditions[cheevoId];
        if (condition && condition()) unlockCheevo(cheevoId);
    }
}

function checkDirectActionCheevo(cheevoId) {
    if (!state.unlockedCheevos.includes(cheevoId)) {
        unlockCheevo(cheevoId);
    }
}

function unlockCheevo(cheevoId) {
    const cheevo = cheevoData.find(c => c.id === cheevoId);
    if (!cheevo || state.unlockedCheevos.includes(cheevoId)) return;

    state.unlockedCheevos.push(cheevoId);
    state.totalPoints += cheevo.points;
    if (cheevo.catImage && !state.unlockedCats.includes(cheevo.catImage)) {
        state.unlockedCats.push(cheevo.catImage);
    }

    // --- INTEGRATE REFINED HAPTICS AND CONFETTI ---
    const toastMessage = `${cheevo.icon} Achievement: ${cheevo.title}!`;
    showToast(toastMessage);
    triggerVibration('cheevoUnlock');
    triggerConfetti({ sourceElement: domElements.toastNotification, count: 40 });

    updateAllUI();
    console.log(`Unlocked: ${cheevo.title}`);
}