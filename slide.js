// Create floating hearts
function createFloatingHearts() {
    const heartsContainer = document.getElementById('floating-hearts');
    const heartSymbols = ['💕', '💖', '💗', '💝', '💘'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';

        heartsContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 8000);
    }, 2000);
}

// Create sparkles
function createSparkles() {
    const sparkles = ['✨', '⭐', '🌟', '💫'];

    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';

        document.body.appendChild(sparkle);

        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 6000);
    }, 3000);
}

// Mobile touch support for cards
function addMobileSupport() {
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        let isFlipped = false;

        card.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const inner = card.querySelector('.flip-card-inner');

            if (!isFlipped) {
                inner.style.transform = 'rotateY(180deg)';
                isFlipped = true;
            } else {
                inner.style.transform = 'rotateY(0deg)';
                isFlipped = false;
            }
        });
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    createSparkles();
    addMobileSupport();
});

// Add click handlers to cards
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', playClickSound);
});