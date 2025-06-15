// NotaR333_OS - Haptics Engine v3.5 (Final)

const hapticPatterns = {
    click: [50],
    correct: [40, 60, 40],
    incorrect: [200],
    open: [70],
    // Refined patterns
    cheevoUnlock: [80, 60, 150],
    rankUp: [50, 100, 50, 100, 50, 200],
    shatter: [20, 200, 20, 200]
};

function triggerVibration(patternKey) {
    // --- NEW: Check if haptics are enabled in settings before vibrating ---
    if (!state || !state.settings.haptics) {
        return;
    }
    
    if ('vibrate' in navigator) {
        const pattern = hapticPatterns[patternKey];
        if (pattern) {
            navigator.vibrate(pattern);
        }
    }
}