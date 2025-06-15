// NotaR333_OS - Visual Effects Engine v3.7 (Final)

/**
 * Triggers a confetti burst effect.
 * @param {object} options - Configuration for the confetti.
 * @param {HTMLElement} options.sourceElement - The element to burst from.
 * @param {number} [options.count=20] - The number of particles.
 * @param {HTMLElement} [options.container=document.getElementById('particle-container')] - The container to append particles to.
 */
// NotaR333_OS - Visual Effects Engine v5.0 (Living Universe)

// --- Confetti Engine ---
function triggerConfetti({ sourceElement, count = 20, container }) {
    if (!sourceElement) return;
    const particleContainer = container || document.getElementById('particle-container');
    if (!particleContainer) return;

    const rect = sourceElement.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 + window.pageXOffset;
    const startY = rect.top + rect.height / 2 + window.pageYOffset;
    
    for (let i = 0; i < count; i++) {
        createConfettiParticle(startX, startY, particleContainer);
    }
}

function createConfettiParticle(startX, startY, container) {
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


// --- NEW: Starfield Engine ---

/**
 * Initializes all layers of the starfield background.
 */
function initializeStarfield() {
    const container = document.getElementById('particle-container');
    if (!container) return;

    // Layer 1: Distant Stars (Pure CSS, just needs the divs)
    const stars1 = document.createElement('div');
    stars1.id = 'stars1';
    const stars2 = document.createElement('div');
    stars2.id = 'stars2';
    const stars3 = document.createElement('div');
    stars3.id = 'stars3';
    container.append(stars1, stars2, stars3);

    // Layer 2: Drifting Hero Stars
    for (let i = 0; i < 50; i++) {
        createHeroStar(container);
    }

    // Layer 3: Occasional Shooting Stars
    setInterval(tryShootingStar, 2000); // Try to make one every 4 seconds
}

/**
 * Creates a single drifting "hero" star.
 * @param {HTMLElement} container - The container to append the star to.
 */
function createHeroStar(container) {
    const star = document.createElement('div');
    star.className = 'hero-star';

    // Randomize properties
    const size = Math.random() * 3 + 1; // Size from 1px to 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    const colors = [
        getComputedStyle(document.documentElement).getPropertyValue('--primary-neon'),
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-neon'),
        getComputedStyle(document.documentElement).getPropertyValue('--accent-color')
    ];
    star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.boxShadow = `0 0 ${size * 2}px ${star.style.backgroundColor}`;
    
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 70 + 20}s`;
    star.style.animationDelay = `${Math.random() * -90}s`;

    container.appendChild(star);
}

/**
 * Has a chance to create a shooting star.
 */
function tryShootingStar() {
    // 10% chance to fire
    if (Math.random() < 0.1) {
        const container = document.getElementById('particle-container');
        if (!container) return;

        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        // Random start position and angle
        const startX = Math.random() * 100;
        const startY = Math.random() * 30; // Start near the top
        const angle = Math.random() * 40 + 70; // Angle between 70 and 110 degrees

        star.style.left = `${startX}vw`;
        star.style.top = `${startY}vh`;
        star.style.transform = `rotate(${angle}deg)`;

        container.appendChild(star);

        // Remove after animation completes
        star.addEventListener('animationend', () => {
            star.remove();
        });
    }
}