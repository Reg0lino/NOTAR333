// NotaR333_OS - Haptics Engine v3.0

const hapticPatterns = {
    // A very short, quick tap for simple UI interactions.
    click: [50],
    // A satisfying double-tap for a correct answer.
    correct: [40, 60, 40],
    // A longer, more distinct buzz for an incorrect answer.
    incorrect: [200],
    // A strong, multi-pulse pattern for major events.
    success: [100, 80, 100, 80, 100],
    // A short, sharp vibration for opening modals or popups.
    open: [70],
    // A special, powerful vibration for the "Weakness Eliminated" event.
    shatter: [20, 150, 20, 150]
};

function triggerVibration(patternKey) {
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