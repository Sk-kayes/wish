
        // Create floating hearts background
        function createFloatingHearts() {
            const heartsContainer = document.getElementById('floatingHearts');
            const heartEmojis = ['💖', '💕', '💘', '💝', '💗', '❤️'];
            
            for (let i = 0; i < 15; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 6 + 's';
                heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
                heartsContainer.appendChild(heart);
            }
        }

        // Create fireworks
        function createFirework(x, y) {
            const colors = ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffcccc', '#ff1744', '#f50057'];
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = x + 'px';
            firework.style.top = y + 'px';
            document.body.appendChild(firework);

            // Create particles
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'firework-particle';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                const angle = (i * 18) * Math.PI / 180;
                const velocity = Math.random() * 100 + 50;
                const dx = Math.cos(angle) * velocity;
                const dy = Math.sin(angle) * velocity;
                
                particle.style.transform = `translate(${dx}px, ${dy}px)`;
                firework.appendChild(particle);
            }

            // Remove firework after animation
            setTimeout(() => {
                document.body.removeChild(firework);
            }, 1500);
        }

        // Create heart particles
        function createHeartParticles() {
            const heartEmojis = ['💖', '💕', '💘', '💝', '💗', '❤️', '💜', '🧡'];
            
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart-particle';
                    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
                    heart.style.left = Math.random() * window.innerWidth + 'px';
                    heart.style.top = window.innerHeight + 'px';
                    document.body.appendChild(heart);
                    
                    setTimeout(() => {
                        document.body.removeChild(heart);
                    }, 2000);
                }, i * 100);
            }
        }

        // Multiple fireworks
        function launchFireworks() {
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const x = Math.random() * window.innerWidth;
                    const y = Math.random() * window.innerHeight * 0.6 + 100;
                    createFirework(x, y);
                }, i * 200);
            }
        }

        // Button event listeners
        document.getElementById('yesBtn').addEventListener('click', function() {
            // Hide popup
            document.getElementById('popup').style.display = 'none';
            
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            
            // Launch fireworks
            launchFireworks();
            
            // Create heart particles
            createHeartParticles();
            
            // More fireworks after delay
            setTimeout(launchFireworks, 1500);
        });

        document.getElementById('noBtn').addEventListener('click', function() {
            const popup = document.getElementById('popup');
            
            // Add shake animation
            popup.classList.add('shake');
            
            // Remove shake class after animation
            setTimeout(() => {
                popup.classList.remove('shake');
            }, 1500);
            
            // Optional: Change question text temporarily
            const question = popup.querySelector('.question');
            const originalText = question.textContent;
            question.innerHTML = 'Oops, I need to charm you better 😏💋<br><small style="font-size: 0.8em; opacity: 0.7;">Try again...</small>';
            
            setTimeout(() => {
                question.textContent = originalText;
            }, 2000);
        });

        // Initialize floating hearts
        createFloatingHearts();

        // Add some random sparkle effects
        setInterval(() => {
            if (Math.random() > 0.7) {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createFirework(x, y);
            }
        }, 5000);