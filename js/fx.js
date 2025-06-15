// NotaR333_OS - Visual Effects Engine v3.2

/**
 * Triggers a confetti burst effect from a specified element.
 * @param {object} options - Configuration for the confetti.
 * @param {HTMLElement} options.sourceElement - The element to burst from.
 * @param {number} [options.count=20] - The number of particles.
 */
function triggerConfetti({ sourceElement, count = 20 }) {
    if (!sourceElement) return;

    const rect = sourceElement.getBoundingClientRect();
    // Use pageXOffset and pageYOffset to account for scrolling
    const startX = rect.left + rect.width / 2 + window.pageXOffset;
    const startY = rect.top + rect.height / 2 + window.pageYOffset;
    
    for (let i = 0; i < count; i++) {
        createParticle(startX, startY);
    }
}

function createParticle(startX, startY) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    
    // Set start position
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    
    // Randomize color from theme variables
    const colors = [
        getComputedStyle(document.documentElement).getPropertyValue('--primary-neon'),
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-neon'),
        getComputedStyle(document.documentElement).getPropertyValue('--accent-color')
    ];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Randomize end position for a nice spread
    const angle = Math.random() * 360;
    const distance = Math.random() * 100 + 50;
    const xEnd = Math.cos(angle * (Math.PI / 180)) * distance;
    const yEnd = Math.sin(angle * (Math.PI / 180)) * distance;

    particle.style.setProperty('--x-end', `${xEnd}px`);
    particle.style.setProperty('--y-end', `${yEnd}px`);
    
    // Add to the main particle container and remove after animation
    document.getElementById('particle-container').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1200); // Should match animation duration
}