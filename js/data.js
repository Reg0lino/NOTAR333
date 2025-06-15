// NotaR333_OS - Gamification & App Data v4.2 (Final Streamlined)

// --- RANK DATA ---
const ranks = [
    { points: 0, name: "Novice Notary" },
    { points: 500, name: "Adept Artist" },
    { points: 1200, name: "Succulent Signer" },
    { points: 2500, name: "Sloth Scholar" },
    { points: 5000, name: "Notary Prime ✨" }
];

// --- PUNS DATA ---
const puns = [
    "You're on a roll!", "Amazing work!", "Look at you go!",
    "Keep it up!", "That was purr-fect!", "You're as sharp as a cactus!"
];


// --- CAT-ALOG DATA ---
const allCatGifs = [
    'cat_welcome.png', 'cat_coins.png', 'cat_thinking.png', 'cat_goggles.png',
    'cat_sergeant.png', 'cat_certificate.png', 'cat_ace.png', 'cat_streak.png',
    'cat_ninja.png', 'cat_wizard.png', 'cat_zen.png', 'cat_study.png',
    'cat_roman.png', 'cat_architect.png', 'cat_cyborg.png', 'cat_judge.png',
    'cat_galaxy.png' // Removed the meta-cheevo cats
];


// --- CHEEVO (ACHIEVEMENT) DATA ---
// Simplified list - only performance-based achievements remain.
const cheevoData = [
    // Tier 1
    { id: 'firstSession', title: 'First Steps', description: 'Complete your first quiz session.', icon: '🏁', points: 25, catImage: 'cat_welcome.png' },
    { id: 'first100', title: 'Point Collector', description: 'Earn your first 100 points.', icon: '💰', points: 50, catImage: 'cat_coins.png' },
    { id: 'firstWeakSpot', title: 'A Worthy Opponent', description: 'Get your first question wrong. We\'ll get it next time!', icon: '🧐', points: 10, catImage: 'cat_thinking.png' },
    { id: 'firstReview', title: 'Back for More', description: 'Complete your first "Review Weak Spots" session.', icon: '🔬', points: 75, catImage: 'cat_goggles.png' },
    
    // Tier 2
    { id: 'perfectDrill', title: 'Drill Sergeant', description: 'Get a perfect score (20/20) on a Practice Drill.', icon: '🎯', points: 200, catImage: 'cat_sergeant.png' },
    { id: 'passExamSim', title: 'Certified Ready', description: 'Pass an Exam Simulation with 70% or higher.', icon: '📜', points: 150, catImage: 'cat_certificate.png' },
    { id: 'aceExamSim', title: 'Exam Ace', description: 'Get 90% or higher on an Exam Simulation.', icon: '💎', points: 300, catImage: 'cat_ace.png' },
    { id: 'streak5', title: 'On a Roll!', description: 'Answer 5 questions correctly in a row.', icon: '🔥', points: 50, catImage: 'cat_streak.png' },
    { id: 'weaknessEliminated', title: 'Nemesis Vanquished', description: 'Correctly answer a question that was on your Weak Spots list.', icon: '⚔️', points: 100, catImage: 'cat_ninja.png' },

    // Tier 3
    { id: 'totalPoints1000', title: 'Kilopoint', description: 'Earn a total of 1,000 points.', icon: '✨', points: 100, catImage: 'cat_wizard.png' },
    { id: 'clearWeakSpots', title: 'Clean Slate', description: 'Clear your entire Weak Spots list down to zero.', icon: '🧹', points: 250, catImage: 'cat_zen.png' },
    { id: 'fiveSessions', title: 'Dedicated Student', description: 'Complete 5 total quiz sessions.', icon: '📚', points: 150, catImage: 'cat_study.png' },
    { id: 'totalQuestions100', title: 'Centurion', description: 'Answer 100 total questions.', icon: '🛡️', points: 100, catImage: 'cat_roman.png' },

    // Tier 4
    { id: 'masterCategoryFoundations', title: 'Foundation Builder', description: 'Master every question in the "Foundations" category.', icon: '🏛️', points: 150, catImage: 'cat_architect.png' },
    { id: 'masterCategoryREN', title: 'Digital Deacon', description: 'Master every question in the "Electronic Notarization" category.', icon: '💻', points: 150, catImage: 'cat_cyborg.png' },
    { id: 'masterCategoryProhibited', title: 'Guardian of the Law', description: 'Master every question in the "Prohibited Conduct" category.', icon: '⚖️', points: 150, catImage: 'cat_judge.png' },
    { id: 'masterAll', title: 'Notary Prime', description: 'Master every single question in the database.', icon: '👑', points: 1000, catImage: 'cat_galaxy.png' },
];