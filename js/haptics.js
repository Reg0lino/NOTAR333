// NotaR333_OS - Haptics Engine v3.2 (Refined)

const hapticPatterns = {
    // A very short, quick tap for simple UI interactions.
    click: [50],
    // A satisfying double-tap for a correct answer.
    correct: [40, 60, 40],
    // A longer, more distinct buzz for an incorrect answer.
    incorrect: [200],
    // A short, sharp vibration for opening modals or popups.
    open: [70],
    
    // --- REFINED PATTERNS ---
    
    // A rhythmic "da-da-DUM" for unlocking an achievement.
    cheevoUnlock: [80, 60, 150],
    
    // A drumroll-like pattern leading to a strong finish for ranking up.
    rankUp: [50, 100, 50, 100, 50, 200],
    
    // A very distinctive, jagged pulse for eliminating a weak spot.
    shatter: [20, 200, 20, 200]
};

function triggerVibration(patternKey) {
    // Check if the user is in low power mode first
    if (state && state.settings.lowPower) {
        return;
    }
    
    // Check if the Vibration API is supported by the browser.
    if ('vibrate' in navigator) {
        // Find the vibration pattern from the key provided.
        const pattern = hapticPatterns[patternKey];
        if (pattern) {
            // Trigger the vibration.
            navigator.vibrate(pattern);
        }
    }
    // If not supported, it will simply do nothing. No error will be thrown.
}