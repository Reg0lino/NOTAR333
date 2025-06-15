// NotaR333_OS - State Management v3.5 (Final)

// --- GLOBAL STATE VARIABLES ---
let state = {};
let quizState = {};

// The default structure of our application's state.
const defaultState = {
    // Core Progression
    totalPoints: 0,
    
    // Learning Engine Data
    weakSpotIds: [],
    masteredIds: [],
    questionStats: {},
    
    // Gamification & Customization
    unlockedCheevos: [],
    unlockedCats: ['cat_welcome.png'],
    selectedCats: ['cat_welcome.png', null, null, null, null],
    newlyUnlockedCats: [],
    
    // User Statistics
    stats: {
        personalBestScore: 0,
        completedQuizCount: 0,
        totalQuestionsAnswered: 0,
        completedDrills: 0,
        completedExams: 0,
        completedReviews: 0,
        hadFiveWeakSpots: false,
    },

    // User Preferences
    settings: {
        haptics: true, // Replaces lowPower
        theme: 'pink'
    }
};

// --- STATE MANAGEMENT FUNCTIONS ---
function loadState() {
    try {
        const savedStateJSON = localStorage.getItem('notaR333_state');
        if (savedStateJSON) {
            const savedState = JSON.parse(savedStateJSON);
            state = {
                ...defaultState,
                ...savedState,
                settings: { ...defaultState.settings, ...savedState.settings },
                stats: { ...defaultState.stats, ...savedState.stats }
            };
        } else {
            state = JSON.parse(JSON.stringify(defaultState));
        }
    } catch (e) {
        console.error("Error loading state:", e);
        state = JSON.parse(JSON.stringify(defaultState));
    }
}

function saveState() {
    try {
        localStorage.setItem('notaR333_state', JSON.stringify(state));
    } catch (e) {
        console.error("Error saving state:", e);
    }
}

function factoryReset() {
    localStorage.removeItem('notaR333_state');
    localStorage.removeItem('notaR333_savedSession');
    loadState();
    applySettings();
    updateAllUI();
    checkForSavedSession();
    alert('System reset to default.');
}

// --- SESSION MANAGEMENT ---
function saveSession() {
    try {
        localStorage.setItem('notaR333_savedSession', JSON.stringify(quizState));
    } catch (e) {
        console.error("Error saving session:", e);
    }
}

function loadSavedSession() {
    try {
        const savedSessionJSON = localStorage.getItem('notaR333_savedSession');
        return savedSessionJSON ? JSON.parse(savedSessionJSON) : null;
    } catch (e) {
        console.error("Error loading session:", e);
        return null;
    }
}

function clearSavedSession() {
    localStorage.removeItem('notaR333_savedSession');
}

function checkForSavedSession() {
    const savedSession = localStorage.getItem('notaR333_savedSession');
    const resumeContainer = document.getElementById('resume-session-container');
    const newContainer = document.getElementById('new-session-container');
    
    resumeContainer.classList.toggle('hidden', !savedSession);
    newContainer.classList.toggle('hidden', !!savedSession);
}