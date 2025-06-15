// NotaR333_OS - State Management v3.0

// --- GLOBAL STATE VARIABLES ---
// These will be populated when the app initializes.
let state = {};
let quizState = {};

// The default structure of our application's state.
// This is used for new users or after a factory reset.
const defaultState = {
    // Core Progression
    totalPoints: 0,
    
    // Learning Engine Data
    weakSpotIds: [],
    masteredIds: [],
    questionStats: {}, // e.g., { 'q_id_1': { wrong: 3 }, 'q_id_2': { wrong: 1 } }
    
    // Gamification & Customization
    unlockedCheevos: [], // e.g., ['firstSession', 'first100']
    unlockedCats: ['cat_welcome.png'], // Start with a default cat
    selectedCats: ['cat_welcome.png', null, null], // The three cats in the top bar
    
    // User Statistics - EXPANDED for Cheevos
    stats: {
        personalBestScore: 0,
        completedQuizCount: 0,
        totalQuestionsAnswered: 0,
        // New stats for achievements
        completedDrills: 0,
        completedExams: 0,
        completedReviews: 0,
        hadFiveWeakSpots: false, // Tracks if weak spots ever reached 5, for the "Clean Slate" cheevo
    },

    // User Preferences
    settings: {
        lowPower: false,
        theme: 'pink'
    }
};

// --- STATE MANAGEMENT FUNCTIONS ---

/**
 * Loads the user's state from localStorage.
 * If no state is found, it initializes with the default state.
 */
function loadState() {
    try {
        const savedStateJSON = localStorage.getItem('notaR333_state');
        if (savedStateJSON) {
            const savedState = JSON.parse(savedStateJSON);
            // Use Object.assign to merge saved state with default state.
            // This prevents the app from breaking if we add new properties to the default state later.
            state = {
                ...defaultState,
                ...savedState,
                settings: { ...defaultState.settings, ...savedState.settings },
                stats: { ...defaultState.stats, ...savedState.stats }
            };
        } else {
            state = JSON.parse(JSON.stringify(defaultState)); // Deep copy
        }
    } catch (e) {
        console.error("Error loading state:", e);
        state = JSON.parse(JSON.stringify(defaultState)); // Deep copy on error
    }
}

/**
 * Saves the current state object to localStorage.
 */
function saveState() {
    try {
        localStorage.setItem('notaR333_state', JSON.stringify(state));
    } catch (e) {
        console.error("Error saving state:", e);
    }
}

/**
 * Resets the application to its default state.
 */
function factoryReset() {
    // Clear all app-related data from localStorage
    localStorage.removeItem('notaR333_state');
    localStorage.removeItem('notaR333_savedSession');
    // Reload the default state
    loadState();
    // Re-initialize the UI
    applySettings();
    updateAllUI();
    checkForSavedSession();
    alert('System reset to default.');
}

// --- SESSION MANAGEMENT ---

/**
 * Saves the current quiz progress to localStorage.
 */
function saveSession() {
    try {
        localStorage.setItem('notaR333_savedSession', JSON.stringify(quizState));
    } catch (e) {
        console.error("Error saving session:", e);
    }
}

/**
 * Loads a saved quiz session from localStorage.
 * @returns {object|null} The saved quiz state or null if not found.
 */
function loadSavedSession() {
    try {
        const savedSessionJSON = localStorage.getItem('notaR333_savedSession');
        return savedSessionJSON ? JSON.parse(savedSessionJSON) : null;
    } catch (e) {
        console.error("Error loading session:", e);
        return null;
    }
}

/**
 * Clears any saved quiz session from localStorage.
 */
function clearSavedSession() {
    localStorage.removeItem('notaR333_savedSession');
}

/**
 * Checks if a saved session exists and updates the home screen UI.
 */
function checkForSavedSession() {
    const savedSession = localStorage.getItem('notaR333_savedSession');
    // Using DOM elements directly defined in main.js
    const resumeContainer = document.getElementById('resume-session-container');
    const newContainer = document.getElementById('new-session-container');
    
    resumeContainer.classList.toggle('hidden', !savedSession);
    newContainer.classList.toggle('hidden', !!savedSession);
}