// NotaR333_OS - Visual Effects Engine v3.7 (Final)

/**
 * Triggers a confetti burst effect.
 * @param {object} options - Configuration for the confetti.
 * @param {HTMLElement} options.sourceElement - The element to burst from.
 * @param {number} [options.count=20] - The number of particles.
 * @param {HTMLElement} [options.container=document.getElementById('particle-container')] - The container to append particles to.
 */
function triggerConfetti({ sourceElement, count = 20, container }) {
    if (!sourceElement) return;
    
    // Default to the main background container if none is provided
    const particleContainer = container || document.getElementById('particle-container');
    if (!particleContainer) return;

    const rect = sourceElement.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 + window.pageXOffset;
    const startY = rect.top + rect.height / 2 + window.pageYOffset;
    
    for (let i = 0; i < count; i++) {
        createParticle(startX, startY, particleContainer);
    }
}

function createParticle(startX, startY, container) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    
    const colors = [
        getComputedStyle(document.documentElement).getPropertyValue('--primary-neon'),
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-neon'),
        getComputedStyle(document.documentElement).getPropertyValue('--accent-color')
    ];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    const angle = Math.random() * 360;
    // Make the explosion more impactful by increasing distance
    const distance = Math.random() * 150 + 75; 
    const xEnd = Math.cos(angle * (Math.PI / 180)) * distance;
    const yEnd = Math.sin(angle * (Math.PI / 180)) * distance;

    particle.style.setProperty('--x-end', `${xEnd}px`);
    particle.style.setProperty('--y-end', `${yEnd}px`);
    
    container.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1200);
}