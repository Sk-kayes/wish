
// Mobile tap functionality
const mobileCards = document.querySelectorAll('#mobileGallery .memory-card');

mobileCards.forEach(card => {
    let originalMessage = card.querySelector('.memory-message').textContent;
    let hoverMessage = card.dataset.message;
    let isToggled = false;

    card.addEventListener('click', function () {
        const messageEl = this.querySelector('.memory-message');

        // Add tap effect
        this.classList.add('tapped');
        setTimeout(() => this.classList.remove('tapped'), 150);

        // Toggle message
        if (!isToggled) {
            messageEl.textContent = hoverMessage;
            isToggled = true;
        } else {
            messageEl.textContent = originalMessage;
            isToggled = false;
        }

        // Create floating heart effect
        createFloatingHeart(this);
    });
});

// Desktop hover effects with floating hearts
const desktopCards = document.querySelectorAll('#desktopGallery .memory-card');

desktopCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        createFloatingHeart(this);
    });
});

// Create floating heart animation
function createFloatingHeart(element) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '💖';

    const rect = element.getBoundingClientRect();
    heart.style.left = (rect.left + Math.random() * rect.width) + 'px';
    heart.style.top = rect.bottom + 'px';
    heart.style.position = 'fixed';
    heart.style.zIndex = '1000';

    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 4000);
}

// Smooth scroll for carousel
const carousel = document.getElementById('mobileGallery');
if (carousel) {
    carousel.style.scrollBehavior = 'smooth';
}

// Add shimmer effect periodically to placeholder images
setInterval(() => {
    const placeholderImages = document.querySelectorAll('.memory-image.placeholder');
    if (placeholderImages.length > 0) {
        const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
        randomImage.style.animation = 'none';
        setTimeout(() => {
            randomImage.style.animation = '';
        }, 100);
    }
}, 3000);

// Function to help users add photos programmatically
function addPhoto(cardIndex, imageUrl) {
    const desktopImages = document.querySelectorAll('#desktopGallery .memory-image');
    const mobileImages = document.querySelectorAll('#mobileGallery .memory-image');

    if (cardIndex >= 1 && cardIndex <= 12) {
        const index = cardIndex - 1;

        // Update desktop version
        if (desktopImages[index]) {
            desktopImages[index].style.backgroundImage = `url('${imageUrl}')`;
            desktopImages[index].classList.remove('placeholder');
            desktopImages[index].textContent = '';
        }

        // Update mobile version
        if (mobileImages[index]) {
            mobileImages[index].style.backgroundImage = `url('${imageUrl}')`;
            mobileImages[index].classList.remove('placeholder');
            mobileImages[index].textContent = '';
        }
    }
}

// Example usage (you can call these in the browser console):
addPhoto(1, 'img1.jpg');
addPhoto(2, 'img2.jpg');
addPhoto(3, 'img3.jpg');
addPhoto(4, 'img4.jpg');
addPhoto(5, 'img5.jpg');
addPhoto(6, 'img6.jpg');
addPhoto(7, 'img7.jpg');
addPhoto(8, 'img8.jpg');
addPhoto(9, 'img9.jpg');
addPhoto(10, 'img10.jpg');
addPhoto(11, 'img11.jpg');
addPhoto(12, 'img12.jpg');
// addPhoto(2, 'path/to/your/second-photo.jpg');
// etc.