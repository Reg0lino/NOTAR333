// NotaR333 - DOM Element Definitions v5.0

// This global object will hold references to all our DOM elements.
// It is initialized here so it's available to all other scripts that load after it.
const domElements = {};

// We wrap this in a DOMContentLoaded listener to ensure all HTML is parsed before we try to find the elements.
document.addEventListener('DOMContentLoaded', () => {
    
    console.log("DOM: Initializing element references...");
    const ids = [
        'home-screen', 'quiz-screen', 'results-screen', 'review-screen', 'dashboard-screen', 'explanation-popup', 'pause-modal', 
        'settings-modal', 'rank-up-modal', 'catalog-modal', 'reward-modal', 'mascot-container', 'top-catz-bar', 
        'study-guide-btn', 'dashboard-btn', 'settings-btn', 'rank-display', 'score-display', 'xp-bar-container', 
        'xp-bar-label', 'xp-bar-fill', 'xp-bar-text', 'resume-session-container', 'new-session-container', 'resume-session-btn', 
        'discard-session-btn', 'start-drill-btn', 'start-exam-sim-btn', 'review-weak-spots-btn', 'weak-spots-counter', 
        'pause-quiz-btn', 'progress-text', 'timer-display', 'progress-bar', 'q-emoji', 'q-text', 'weak-spot-indicator', 
        'answer-buttons', 'explanation-title', 'explanation-text', 'continue-quiz-btn', 'save-exit-btn', 'abandon-exit-btn', 
        'resume-quiz-btn', 'results-summary-text', 'points-earned-text', 'review-mission-btn', 'back-to-home-from-results-btn', 
        'review-content', 'prev-review-btn', 'next-review-btn', 'review-counter', 'finish-review-btn', 'mastery-chart-container', 
        'personal-bests-container', 'nemesis-question-container', 'back-to-home-from-dash-btn', 'close-settings-btn', 
        'fullscreen-toggle', 'haptics-toggle', 'theme-selector', 'clear-weak-spots-btn', 'factory-reset-btn', 
        'catalog-grid', 'close-catalog-btn', 'toast-notification', 'toast-text', 'rank-up-text', 'reward-image', 
        'reward-title', 'reward-description', 'reward-select-btn', 'reward-close-btn', 'particle-celebration-container'
    ];
    
    domElements.body = document.body;
    ids.forEach(id => {
        const camelCaseId = id.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());
        domElements[camelCaseId] = document.getElementById(id);
    });

    // Manual additions for elements selected by class
    domElements.topCatzWrapper = document.querySelector('.top-catz-wrapper');
    domElements.rankUpContent = document.querySelector('.rank-up-content');
    
    // Grouped elements for easier access
    domElements.screens = { home: domElements.homeScreen, quiz: domElements.quizScreen, results: domElements.resultsScreen, review: domElements.reviewScreen, dashboard: domElements.dashboardScreen };
    domElements.popups = { explanation: domElements.explanationPopup, pause: domElements.pauseModal, settings: domElements.settingsModal, rankUp: domElements.rankUpModal, catalog: domElements.catalogModal, reward: domElements.rewardModal };
    
    console.log("DOM: Element references initialized.");
});