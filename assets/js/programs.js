document.addEventListener('DOMContentLoaded', function() {
    // Split the title text into individual letters for the wave animation
    const programsTitle = document.querySelector('.programs-title');
    if (programsTitle) {
        const text = programsTitle.innerText;
        let newHTML = '';
        
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                newHTML += ' ';
            } else {
                newHTML += `<span style="--i:${i}">${text[i]}</span>`;
            }
        }
        
        programsTitle.innerHTML = newHTML;
    }

    // Animate program cards when they come into view
    const programCards = document.querySelectorAll('.program-card');
    const programsCta = document.querySelector('.programs-cta');
    
    // Create tilt effect on cards
    programCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            const rotateX = deltaY * -8; // Reduced from -10 to work better with the shape
            const rotateY = deltaX * 8;  // Reduced from 10
            
            // Only apply rotation without vertical movement
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            
            // Add dynamic lighting effect adjusted for blue theme
            const iconWrapper = this.querySelector('.program-icon-wrapper');
            if (iconWrapper) {
                const lightX = x / rect.width * 100;
                const lightY = y / rect.height * 100;
                iconWrapper.style.background = `radial-gradient(circle at ${lightX}% ${lightY}%, var(--accent), var(--primary-dark))`;
                // Keep the rotation for rhombus shape
                iconWrapper.style.transform = `rotate(45deg) scale(1.1)`;
            }
            
            // Add magnetic effect to button
            const link = this.querySelector('.program-link');
            if (link) {
                const linkRect = link.getBoundingClientRect();
                const linkCenterX = linkRect.left + linkRect.width / 2;
                const linkCenterY = linkRect.top + linkRect.height / 2;
                
                const linkDeltaX = (e.clientX - linkCenterX) / (rect.width / 2) * 10;
                const linkDeltaY = (e.clientY - linkCenterY) / (rect.height / 2) * 5;
                
                // Only apply magnetic effect when close to button
                const distance = Math.sqrt(Math.pow(e.clientX - linkCenterX, 2) + Math.pow(e.clientY - linkCenterY, 2));
                if (distance < 100) {
                    link.style.transform = `translate(${linkDeltaX}px, ${linkDeltaY}px) scale(1.05)`;
                } else {
                    link.style.transform = '';
                }
            }
            
            // Add shine effect direction
            const mouseX = e.pageX - rect.left;
            const mouseY = e.pageY - rect.top;
            const reflectionDeg = Math.atan2(mouseY, mouseX) * (180 / Math.PI) + 90;
            
            // Update reflection position based on mouse
            const shine = this.querySelector('.card-shine');
            if (shine) {
                shine.style.transform = `rotate(${reflectionDeg}deg)`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset to initial state without any transform
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            const iconWrapper = this.querySelector('.program-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.style.background = '';
                iconWrapper.style.transform = 'rotate(45deg)';
            }
            
            // Reset link transform
            const link = this.querySelector('.program-link');
            if (link) {
                link.style.transform = '';
            }
        });
    });
    
    // Enhanced hover effects for program cards
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            // Create sparkle effect
            createSparkles(this);
            createAdvancedSparkles(this);
            
            // Add hover class for additional animations
            this.classList.add('card-hover');
            
            // Animate the description to "float up"
            const description = this.querySelector('.program-description');
            if (description) {
                description.style.transform = 'translateZ(30px)';
                description.style.opacity = '1';
            }
            
            // Make the icon pulse
            const icon = this.querySelector('.program-icon');
            if (icon) {
                icon.style.animation = 'iconPulse 1s infinite alternate';
            }
            
            // Animated entrance sequence for card elements
            const iconWrapper = this.querySelector('.program-icon-wrapper');
            const title = this.querySelector('.program-title');
            const desc = this.querySelector('.program-description');
            const link = this.querySelector('.program-link');
            
            if (iconWrapper) {
                iconWrapper.style.animation = 'popIn 0.5s forwards cubic-bezier(0.34, 1.56, 0.64, 1)';
                iconWrapper.style.animationDelay = '0s';
            }
            
            if (title) {
                title.style.animation = 'popIn 0.5s forwards cubic-bezier(0.34, 1.56, 0.64, 1)';
                title.style.animationDelay = '0.1s';
            }
            
            if (desc) {
                desc.style.animation = 'popIn 0.5s forwards cubic-bezier(0.34, 1.56, 0.64, 1)';
                desc.style.animationDelay = '0.2s';
            }
            
            if (link) {
                link.style.animation = 'popIn 0.5s forwards cubic-bezier(0.34, 1.56, 0.64, 1)';
                link.style.animationDelay = '0.3s';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset to initial state without any transform
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            const iconWrapper = this.querySelector('.program-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.style.background = '';
                iconWrapper.style.transform = 'rotate(45deg)';
            }
            
            // Remove hover class
            this.classList.remove('card-hover');
            
            // Reset description
            const description = this.querySelector('.program-description');
            if (description) {
                description.style.transform = 'translateZ(0)';
            }
            
            // Reset icon animation
            const icon = this.querySelector('.program-icon');
            if (icon) {
                icon.style.animation = 'float 3s ease-in-out infinite';
            }
            
            // Remove any sparkles
            const sparkles = this.querySelectorAll('.card-sparkle');
            sparkles.forEach(sparkle => sparkle.remove());
        });
        
        // Add decorative elements to cards
        const decoration1 = document.createElement('div');
        decoration1.classList.add('card-decoration');
        card.appendChild(decoration1);
        
        const decoration2 = document.createElement('div');
        decoration2.classList.add('card-decoration');
        card.appendChild(decoration2);
        
        // Highlight first word in title
        const title = card.querySelector('.program-title');
        if (title) {
            const text = title.innerText;
            const firstWord = text.split(' ')[0];
            const restOfText = text.slice(firstWord.length);
            title.innerHTML = `<span class="highlight">${firstWord}</span>${restOfText}`;
        }
    });
    
    // Function to create sparkle effects on card hover
    function createSparkles(card) {
        // Create 5 sparkles at random positions
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                if (!card.matches(':hover')) return;
                
                const sparkle = document.createElement('div');
                sparkle.className = 'card-sparkle';
                
                // Random position within the card
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // Style the sparkle
                sparkle.style.cssText = `
                    position: absolute;
                    left: ${x}%;
                    top: ${y}%;
                    width: 12px;
                    height: 12px;
                    background: transparent;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10;
                    box-shadow: 0 0 10px 2px var(--accent);
                `;
                
                // Add sparkle animation
                sparkle.animate(
                    [
                        { 
                            transform: 'scale(0) rotate(0deg)',
                            opacity: 0 
                        },
                        { 
                            transform: 'scale(1) rotate(180deg)',
                            opacity: 0.8,
                            boxShadow: '0 0 20px 2px var(--accent)'
                        },
                        { 
                            transform: 'scale(0) rotate(360deg)',
                            opacity: 0 
                        }
                    ], 
                    { 
                        duration: 700,
                        easing: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)'
                    }
                );
                
                // Add to card and remove after animation
                card.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 700);
            }, i * 100); // Stagger the sparkle creation
        }
    }
    
    // Create advanced sparkle effects
    function createAdvancedSparkles(card) {
        // Create different types of sparkles
        const sparkleTypes = [
            { size: '8px', color: 'var(--primary)', duration: 1.5, delay: 0 },
            { size: '12px', color: 'var(--accent)', duration: 2, delay: 0.3 },
            { size: '6px', color: 'var(--primary-light)', duration: 1.8, delay: 0.6 }
        ];
        
        // Create 10 sparkles
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                if (!card.matches(':hover')) return;
                
                // Get random sparkle type
                const sparkleType = sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)];
                
                // Create sparkle element
                const sparkle = document.createElement('div');
                sparkle.className = 'card-sparkle';
                
                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // Style sparkle
                sparkle.style.cssText = `
                    position: absolute;
                    left: ${x}%;
                    top: ${y}%;
                    width: ${sparkleType.size};
                    height: ${sparkleType.size};
                    background-color: ${sparkleType.color};
                    border-radius: 50%;
                    filter: blur(1px);
                    pointer-events: none;
                    z-index: 100;
                    opacity: 0;
                `;
                
                // Add to card
                card.appendChild(sparkle);
                
                // Animate sparkle
                sparkle.animate([
                    { 
                        transform: 'scale(0) rotate(0deg)', 
                        opacity: 0,
                        filter: 'blur(2px)' 
                    },
                    { 
                        transform: 'scale(1) rotate(180deg)', 
                        opacity: 0.9,
                        filter: 'blur(0px)',
                        offset: 0.6
                    },
                    { 
                        transform: 'scale(0) rotate(360deg)', 
                        opacity: 0,
                        filter: 'blur(2px)' 
                    }
                ], {
                    duration: sparkleType.duration * 1000,
                    easing: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
                    delay: sparkleType.delay * 1000
                });
                
                // Remove sparkle after animation
                setTimeout(() => {
                    if(sparkle.parentNode === card) {
                        card.removeChild(sparkle);
                    }
                }, (sparkleType.duration + sparkleType.delay) * 1000);
            }, i * 200);
        }
    }
    
    // Add keyframe animation for the icon pulse
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes iconPulse {
            0% { transform: rotate(-45deg) scale(1); }
            100% { transform: rotate(-45deg) scale(1.2); }
        }
    `;
    document.head.appendChild(styleSheet);
    
    // Add keyframe for pop-in animation
    const popInStyle = document.createElement('style');
    popInStyle.innerHTML = `
        @keyframes popIn {
            0% { transform: scale(0.9); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(popInStyle);
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -10% 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation with delay for staggered effect
                    const index = Array.from(programCards).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.style.animation = 'fadeIn 0.8s forwards cubic-bezier(0.21, 0.61, 0.35, 1)';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                    }, index * 150);
                    
                    // Unobserve after animation
                    observer.unobserve(entry.target);
                    
                    // Add entrance animation to card elements
                    const icon = entry.target.querySelector('.program-icon-wrapper');
                    const title = entry.target.querySelector('.program-title');
                    const desc = entry.target.querySelector('.program-description');
                    const link = entry.target.querySelector('.program-link');
                    
                    if (icon) setTimeout(() => { icon.style.animation = 'pulse 3s infinite'; }, index * 150 + 300);
                    if (title) setTimeout(() => { title.style.animation = 'fadeInUp 0.5s forwards'; }, index * 150 + 400);
                    if (desc) setTimeout(() => { desc.style.animation = 'fadeInUp 0.5s forwards'; }, index * 150 + 500);
                    if (link) setTimeout(() => { link.style.animation = 'fadeInUp 0.5s forwards'; }, index * 150 + 600);
                }
            });
        }, observerOptions);
        
        // Observe each program card
        programCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            observer.observe(card);
        });
        
        // Separate observer for CTA section with more dramatic effect
        const ctaObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                programsCta.style.animation = 'fadeInUp 1s cubic-bezier(0.21, 0.61, 0.35, 1) forwards';
                programsCta.style.opacity = '1';
                programsCta.style.transform = 'translateY(0)';
                
                // Add particle effects when CTA appears
                createParticles();
                
                ctaObserver.unobserve(programsCta);
            }
        }, { threshold: 0.5 });
        
        if (programsCta) {
            programsCta.style.opacity = '0';
            programsCta.style.transform = 'translateY(30px)';
            ctaObserver.observe(programsCta);
        }
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        programCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            }, index * 100);
        });
        
        if (programsCta) {
            programsCta.style.opacity = '1';
            programsCta.style.transform = 'translateY(0)';
        }
    }
    
    // Create particle effects for the CTA section
    function createParticles() {
        const programsSection = document.getElementById('programs-section');
        if (!programsSection) return;
        
        // Create container for particles
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        particleContainer.style.position = 'absolute';
        particleContainer.style.top = '0';
        particleContainer.style.left = '0';
        particleContainer.style.width = '100%';
        particleContainer.style.height = '100%';
        particleContainer.style.pointerEvents = 'none';
        particleContainer.style.overflow = 'hidden';
        particleContainer.style.zIndex = '0';
        
        programsSection.appendChild(particleContainer);
        
        // Create particles
        for (let i = 0; i < 30; i++) {
            createParticle(particleContainer);
        }
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        
        // Random size between 5px and 15px
        const size = Math.random() * 10 + 5;
        
        // Style the particle
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = getRandomColor();
        particle.style.borderRadius = '50%';
        particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
        particle.style.pointerEvents = 'none';
        
        // Random starting position
        const startPositionX = Math.random() * 100;
        const startPositionY = Math.random() * 100;
        particle.style.left = `${startPositionX}%`;
        particle.style.top = `${startPositionY}%`;
        
        // Add animation
        const duration = Math.random() * 20 + 10; // Between 10-30s
        const delay = Math.random() * 5; // Between 0-5s
        
        particle.style.animation = `floatParticle ${duration}s ${delay}s infinite linear`;
        
        // Add keyframe animation dynamically
        if (!document.getElementById('particle-animation')) {
            const style = document.createElement('style');
            style.id = 'particle-animation';
            style.innerHTML = `
                @keyframes floatParticle {
                    0% {
                        transform: translateY(0) translateX(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.5;
                    }
                    90% {
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        container.appendChild(particle);
        
        // Remove particle after animation completes
        setTimeout(() => {
            container.removeChild(particle);
            createParticle(container); // Create a new particle to replace it
        }, (duration + delay) * 1000);
    }
    
    // Update particle colors to use the blue theme
    function getRandomColor() {
        const colors = [
            'rgba(0, 86, 179, 0.7)',   // primary
            'rgba(0, 168, 255, 0.7)',  // accent
            'rgba(74, 144, 226, 0.7)', // primary-light
            'rgba(0, 61, 122, 0.7)',   // darker variation
            'rgba(173, 216, 230, 0.7)' // lighter variation
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
