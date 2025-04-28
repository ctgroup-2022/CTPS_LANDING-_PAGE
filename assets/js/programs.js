document.addEventListener('DOMContentLoaded', function() {
    // Get all program cards
    const programCards = document.querySelectorAll('.program-card');
    
    // Add shine effect element to each card
    programCards.forEach(card => {
        const shineEffect = document.createElement('div');
        shineEffect.className = 'shine-effect';
        card.appendChild(shineEffect);
        
        // Process all cards to set icon colors
        const colorAttribute = card.getAttribute('data-color');
        const icon = card.querySelector('.program-icon');
        if (icon) {
            icon.setAttribute('data-color', colorAttribute);
        }
    });
    
    // Enhanced hover effects with dynamic shadows and transforms
    programCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            // Get position of mouse relative to card
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;
            
            // Calculate rotation based on mouse position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 3; // max 3 degrees
            const rotateX = ((centerY - y) / centerY) * 2; // max 2 degrees
            
            // Apply subtle rotation with translateZ for more depth
            this.style.transform = `translateY(-12px) scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            
            // Enhanced shadow based on mouse position
            const shadowX = (x - centerX) / 8;
            const shadowY = (y - centerY) / 8;
            this.style.boxShadow = `${shadowX}px ${shadowY + 25}px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2) inset`;
            
            // Enhanced light reflection on icon
            const iconWrapper = this.querySelector('.program-icon-wrapper');
            if (iconWrapper) {
                const lightX = (x / rect.width) * 100;
                const lightY = (y / rect.height) * 100;
                iconWrapper.style.background = `radial-gradient(circle at ${lightX}% ${lightY}%, white 10%, #f8f9fa 70%)`;
            }
        });
        
        card.addEventListener('mouseenter', function() {
            // Slightly adjust image on hover for subtle effect
            const bgImage = this.querySelector('.card-bg-image');
            if (bgImage) {
                bgImage.style.transform = 'scale(1.05)';
                bgImage.style.filter = 'brightness(0.75) contrast(1.15)';
            }
            
            // Add pulse animation to icon
            const icon = this.querySelector('.program-icon');
            if (icon) {
                icon.style.animation = 'pulseIcon 1.5s infinite alternate';
            }
            
            // Enhance text readability when image is visible
            const title = this.querySelector('.program-title');
            const description = this.querySelector('.program-description');
            
            if (title) {
                title.style.textShadow = '0 2px 8px rgba(0, 0, 0, 0.8)';
            }
            
            if (description) {
                description.style.textShadow = '0 2px 8px rgba(0, 0, 0, 0.8)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset all dynamic styles
            this.style.transform = '';
            this.style.boxShadow = '';
            
            // Reset icon wrapper background
            const iconWrapper = this.querySelector('.program-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.style.background = '';
            }
            
            // Reset image scaling
            const bgImage = this.querySelector('.card-bg-image');
            if (bgImage) {
                bgImage.style.transform = '';
                bgImage.style.filter = 'brightness(0.7) contrast(1.2)';
            }
            
            // Remove pulse animation from icon
            const icon = this.querySelector('.program-icon');
            if (icon) {
                icon.style.animation = '';
            }
            
            // Reset text shadows
            const title = this.querySelector('.program-title');
            const description = this.querySelector('.program-description');
            
            if (title) {
                title.style.textShadow = '';
            }
            
            if (description) {
                description.style.textShadow = '';
            }
        });
    });
    
    // Add keyframes for icon pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulseIcon {
            0% {
                transform: scale(1);
                filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.1));
            }
            100% {
                transform: scale(1.2) rotate(-5deg);
                filter: drop-shadow(0 3px 7px rgba(0, 0, 0, 0.2));
            }
        }
    `;
    document.head.appendChild(style);
    
    // Animate cards when they come into view with staggered effect
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, idx) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, idx * 150); // Increased delay between cards
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe each program card with enhanced initial state
        programCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) scale(0.95)';
            card.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
            observer.observe(card);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        programCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Add floating particles to background
    const container = document.querySelector('.programs-container');
    if (container) {
        // Create particles
        for (let i = 0; i < 15; i++) {
            createParticle(container);
        }
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random animation duration and delay
        const duration = Math.random() * 15 + 5;
        const delay = Math.random() * 5;
        particle.style.animation = `float-particle ${duration}s ${delay}s infinite ease-in-out`;
        
        container.appendChild(particle);
    }
    
    // Create background elements
    createBackgroundElements();
    
    // Add keyframes for shape animation
    const shapeAnimStyle = document.createElement('style');
    shapeAnimStyle.textContent = `
        @keyframes floatShape {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            25% {
                transform: translateY(-20px) rotate(90deg);
            }
            50% {
                transform: translateY(0) rotate(180deg);
            }
            75% {
                transform: translateY(20px) rotate(270deg);
            }
            100% {
                transform: translateY(0) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(shapeAnimStyle);

    // Remove the click event from cards and only add it to the icon wrappers
    programCards.forEach(card => {
        const iconWrapper = card.querySelector('.program-icon-wrapper');
        
        // Add click event only to the icon wrapper
        if (iconWrapper) {
            iconWrapper.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event bubbling
                
                // Get program data from parent card
                const card = this.closest('.program-card');
                const programId = card.getAttribute('data-id');
                const programTitle = card.querySelector('.program-title') ? 
                    card.querySelector('.program-title').textContent :
                    card.querySelector('.card-title').textContent;
                const programDescription = card.querySelector('.program-description') ? 
                    card.querySelector('.program-description').textContent : '';
                const programIconClass = card.querySelector('.program-icon').classList[1];
                const programImageSrc = card.querySelector('.card-bg-image').getAttribute('src');
                
                // Create circular popup with this program's data
                createCircularPopup(programId, programTitle, programDescription, programIconClass, programImageSrc);
            });
        }
    });
    
    // Function to create and show circular program popup that matches the image exactly
    function createCircularPopup(id, title, description, iconClass, imageSrc) {
        // Create popup container if it doesn't exist
        let popup = document.getElementById('program-popup');
        
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'program-popup';
            popup.className = 'program-popup';
            document.body.appendChild(popup);
        }

        // Generate HTML for circular popup content matching the image exactly
        const popupHTML = `
            <div class="popup-content circular-popup">
                <div class="popup-close"><i class="fas fa-times"></i></div>
                <div class="popup-inner">
                    <h3 class="popup-title">Sign Up For 5% Off</h3>
                    <h4 class="popup-subtitle">Your 1st Order</h4>
                    <p class="popup-description">
                        Approved by you - No spammy promotional emails, just cool stuff we think you'll like ♥
                    </p>
                    <div class="popup-action">
                        <input type="email" placeholder="Your Email" class="popup-input">
                        <button class="popup-button">Yes, Please! <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="popup-footer">
                        <a href="#" class="popup-no-thanks">No, Thanks</a>
                    </div>
                </div>
            </div>
        `;
        
        // Set popup content
        popup.innerHTML = popupHTML;
        
        // Add event listeners for closing popup
        const closeBtn = popup.querySelector('.popup-close');
        closeBtn.addEventListener('click', closePopup);
        
        const noThanksBtn = popup.querySelector('.popup-no-thanks');
        if (noThanksBtn) {
            noThanksBtn.addEventListener('click', function(e) {
                e.preventDefault();
                closePopup();
            });
        }
        
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                closePopup();
            }
        });
        
        // Add keyboard support (Escape key)
        document.addEventListener('keydown', handleEscKey);
        
        // Show popup with animation
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
        
        // Prevent page scrolling when popup is open
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close popup
    function closePopup() {
        const popup = document.getElementById('program-popup');
        if (popup) {
            popup.classList.remove('active');
            
            // Wait for animation to finish before removing
            setTimeout(() => {
                popup.remove();
                document.body.style.overflow = '';
            }, 300);
            
            // Remove keyboard listener
            document.removeEventListener('keydown', handleEscKey);
        }
    }
    
    // Handle Escape key press
    function handleEscKey(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    }
    
    // Enhanced icon animation
    programCards.forEach(card => {
        // Create 3D animation effect for icons
        const icon = card.querySelector('.program-icon');
        const iconWrapper = card.querySelector('.program-icon-wrapper');
        
        if (icon && iconWrapper) {
            // Add floating animation to icons
            const iconFloatAnimation = `
                @keyframes iconFloat${Math.floor(Math.random() * 1000)} {
                    0%, 100% { transform: translateZ(20px); }
                    50% { transform: translateZ(30px) rotate(5deg); }
                }
            `;
            const iconStyle = document.createElement('style');
            iconStyle.textContent = iconFloatAnimation;
            document.head.appendChild(iconStyle);
            
            // Apply unique animation to each icon
            icon.style.animation = `iconFloat${Math.floor(Math.random() * 1000)} 3s infinite ease-in-out`;
        }
    });
    
    // Add click event to all "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            
            // Get program data from parent card
            const card = this.closest('.program-card');
            const programId = card.getAttribute('data-id');
            const programTitle = card.querySelector('.program-title') ? 
                card.querySelector('.program-title').textContent :
                card.querySelector('.card-title').textContent;
            const programDescription = card.querySelector('.program-description') ? 
                card.querySelector('.program-description').textContent : '';
            
            // Create circular popup with this program's data
            createExactCircularPopup(programId, programTitle, programDescription);
        });
    });
    
    // Function to create circular popup exactly matching the reference image
    function createExactCircularPopup(id, title, description) {
        // Create popup container if it doesn't exist
        let popup = document.getElementById('program-popup');
        
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'program-popup';
            popup.className = 'program-popup';
            document.body.appendChild(popup);
        }
        
        // Generate HTML for circular popup content
        const popupHTML = `
            <div class="popup-content circular-popup">
                <div class="popup-close"><i class="fas fa-times"></i></div>
                <div class="popup-inner">
                    <h3 class="popup-title">Sign Up For 5% Off</h3>
                    <h4 class="popup-subtitle">Your 1st Order</h4>
                    <p class="popup-description">
                        Approved by you - No spammy promotional emails, just cool stuff we think you'll like ♥
                    </p>
                    <div class="popup-action">
                        <input type="email" placeholder="Your Email" class="popup-input">
                        <button class="popup-button">Yes, Please! <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <div class="popup-footer">
                        <a href="#" class="popup-no-thanks">No, Thanks</a>
                    </div>
                </div>
            </div>
        `;
        
        // Set popup content
        popup.innerHTML = popupHTML;
        
        // Add event listeners for closing popup
        const closeBtn = popup.querySelector('.popup-close');
        closeBtn.addEventListener('click', closePopup);
        
        const noThanksBtn = popup.querySelector('.popup-no-thanks');
        if (noThanksBtn) {
            noThanksBtn.addEventListener('click', function(e) {
                e.preventDefault();
                closePopup();
            });
        }
        
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                closePopup();
            }
        });
        
        // Add keyboard support (Escape key)
        document.addEventListener('keydown', handleEscKey);
        
        // Show popup with animation
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);
        
        // Prevent page scrolling when popup is open
        document.body.style.overflow = 'hidden';
    }
});

// Add additional floating particles to background with better distribution
function createBackgroundElements() {
    const container = document.querySelector('.programs-container');
    if (!container) return;

    // Create particles with different sizes and colors
    for (let i = 0; i < 25; i++) {
        createFloatingParticle(container, i);
    }
    
    // Create additional decorative elements
    for (let i = 0; i < 3; i++) {
        createGeometricShape(container, i);
    }
}

function createFloatingParticle(container, index) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Varied sizes for visual interest
    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Better distribution across the container
    const posX = 5 + (Math.random() * 90); // 5-95% to keep away from edges
    const posY = 5 + (Math.random() * 90);
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Alternate colors between primary and accent
    if (index % 3 === 0) {
        particle.style.background = 'var(--primary-light)';
        particle.style.opacity = '0.15';
    } else if (index % 3 === 1) {
        particle.style.background = 'var(--accent)';
        particle.style.opacity = '0.12';
    } else {
        particle.style.background = 'var(--primary)';
        particle.style.opacity = '0.08';
    }
    
    // Varied animation duration and delay for natural movement
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 10;
    particle.style.animation = `float-particle ${duration}s ${delay}s infinite ease-in-out`;
    
    container.appendChild(particle);
}

function createGeometricShape(container, index) {
    const shape = document.createElement('div');
    shape.classList.add('geo-shape');
    
    // Different shapes
    if (index % 3 === 0) {
        // Square
        shape.style.width = '40px';
        shape.style.height = '40px';
        shape.style.borderRadius = '4px';
        shape.style.transform = 'rotate(45deg)';
    } else if (index % 3 === 1) {
        // Triangle (using border trick)
        shape.style.width = '0';
        shape.style.height = '0';
        shape.style.borderLeft = '25px solid transparent';
        shape.style.borderRight = '25px solid transparent';
        shape.style.borderBottom = '40px solid rgba(0, 168, 255, 0.05)';
        shape.style.background = 'transparent';
    } else {
        // Hexagon
        shape.style.width = '35px';
        shape.style.height = '20px';
        shape.style.background = 'rgba(0, 86, 179, 0.04)';
        shape.style.position = 'relative';
        shape.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
    }
    
    // Position
    const posX = 10 + (Math.random() * 80);
    const posY = 10 + (Math.random() * 80);
    shape.style.left = `${posX}%`;
    shape.style.top = `${posY}%`;
    
    // Common styles
    shape.style.position = 'absolute';
    shape.style.background = index % 2 === 0 ? 'rgba(0, 86, 179, 0.04)' : 'rgba(0, 168, 255, 0.03)';
    shape.style.pointerEvents = 'none';
    shape.style.zIndex = '-1';
    
    // Animation
    const duration = 30 + (index * 10);
    shape.style.animation = `floatShape ${duration}s infinite linear`;
    
    container.appendChild(shape);
}
