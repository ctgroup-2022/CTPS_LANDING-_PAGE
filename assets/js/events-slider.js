document.addEventListener('DOMContentLoaded', function() {
    // Navigation button functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const eventsCards = document.querySelectorAll('.events-card');
    
    // Initialize button 3D effects
    initButtonEffects();
    
    // Initialize card 3D hover effects
    initCardEffects();
    
    // Set up event items as a continuous slider
    initContinuousSlider();
    
    // Set up slider controls
    initSliderControls();
    
    // Generate dynamic particles
    generateParticles();
    
    // Event listeners for navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the target card to highlight
            const targetId = this.getAttribute('data-target');
            
            // Apply focus effect to the target card
            eventsCards.forEach(card => {
                if (card.id === targetId) {
                    card.classList.add('focused');
                    // Highlight card with animation
                    highlightCard(card);
                } else {
                    card.classList.remove('focused');
                    // Reset card animation
                    resetCard(card);
                }
            });
        });
    });
    
    // Function to initialize continuous slider
    function initContinuousSlider() {
        const eventItems = document.querySelectorAll('#event-latest .event-items');
        
        eventItems.forEach(itemContainer => {
            // Clone all event items
            const items = itemContainer.querySelectorAll('.event-item');
            const itemsArray = Array.from(items);
            
            // Create a clone of each item
            itemsArray.forEach(item => {
                const clone = item.cloneNode(true);
                itemContainer.appendChild(clone);
            });
            
            // Add the continuous scrolling class
            itemContainer.classList.add('scrolling-content');
            
            // Pause animation on hover
            itemContainer.addEventListener('mouseenter', function() {
                this.style.animationPlayState = 'paused';
            });
            
            itemContainer.addEventListener('mouseleave', function() {
                this.style.animationPlayState = 'running';
            });
            
            // Listen for the end of the animation to reset
            itemContainer.addEventListener('animationiteration', function() {
                // Reset animation smoothly
                this.style.animationPlayState = 'running';
            });
        });
    }
    
    // Enhanced continuous slider functionality
    function setupContinuousScroll() {
        const eventContainers = document.querySelectorAll('.event-items');
        
        eventContainers.forEach(container => {
            // First, ensure all containers have the proper class
            container.classList.add('scrolling-content');
            
            // Clone all event items to ensure continuous scrolling
            const eventItems = container.querySelectorAll('.event-item');
            const clonedItems = [];
            
            // Only proceed if we have items to clone
            if (eventItems.length === 0) return;
            
            // Clone each item
            eventItems.forEach(item => {
                const clone = item.cloneNode(true);
                clonedItems.push(clone);
            });
            
            // Add cloned items to container
            clonedItems.forEach(clone => {
                container.appendChild(clone);
            });
            
            // Add continuous-scroll class after cloning
            container.classList.add('continuous-scroll');
            
            // Mouse interactions
            container.addEventListener('mouseenter', function() {
                this.style.animationPlayState = 'paused';
            });
            
            container.addEventListener('mouseleave', function() {
                this.style.animationPlayState = 'running';
            });
            
            // When animation completes, reset smoothly
            container.addEventListener('animationiteration', function() {
                // Briefly pause at the top before continuing
                this.style.animationPlayState = 'paused';
                
                setTimeout(() => {
                    this.style.animationPlayState = 'running';
                }, 100);
            });
        });
    }
    
    // Function to initialize slider controls
    function initSliderControls() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const paginationDots = document.querySelectorAll('.pagination-dot');
        const eventItems = document.querySelector('#event-latest .event-items');
        let currentIndex = 0;
        
        // Only proceed if we have all required elements
        if (!prevBtn || !nextBtn || !paginationDots.length || !eventItems) return;
        
        const itemsPerPage = 3; // Number of items visible at once
        const totalItems = eventItems.querySelectorAll('.event-item').length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        
        // Update dots to match total pages
        updatePaginationDots();
        
        // Function to update pagination dots
        function updatePaginationDots() {
            paginationDots.forEach((dot, index) => {
                if (index < totalPages) {
                    dot.style.display = 'block';
                    dot.classList.toggle('active', index === currentIndex);
                } else {
                    dot.style.display = 'none';
                }
            });
        }
        
        // Previous button click
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + totalPages) % totalPages;
                showPage(currentIndex);
                updatePaginationDots();
            });
        }
        
        // Next button click
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % totalPages;
                showPage(currentIndex);
                updatePaginationDots();
            });
        }
        
        // Pagination dot click
        paginationDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentIndex = index;
                showPage(currentIndex);
                updatePaginationDots();
            });
        });
        
        // Function to show a specific page of items
        function showPage(pageIndex) {
            // Calculate the offset for the animation
            const offset = -pageIndex * (100 / totalPages);
            eventItems.style.animationPlayState = 'paused';
            eventItems.style.transform = `translateY(${offset}%)`;
            
            // After a brief pause, resume the animation
            setTimeout(() => {
                eventItems.style.transition = 'none';
                eventItems.style.transform = '';
                eventItems.style.animationPlayState = 'running';
                
                // Reset the transition after the transform is applied
                setTimeout(() => {
                    eventItems.style.transition = '';
                }, 50);
            }, 1000);
        }
    }
    
    // Enhanced slider controls functionality with progress bar
    function initEnhancedSliderControls() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const progressIndicator = document.querySelector('.progress-indicator');
        const currentSlideEl = document.querySelector('.current-slide');
        const totalSlidesEl = document.querySelector('.total-slides');
        
        // Get all unique events across all cards for counting
        const allEvents = document.querySelectorAll('.event-item');
        const uniqueEventCount = new Set([...allEvents].map(el => el.querySelector('h4').textContent)).size;
        
        // Set total slides
        if (totalSlidesEl) {
            totalSlidesEl.textContent = uniqueEventCount;
        }
        
        let currentSlide = 1;
        
        // Update the UI
        function updateSliderUI() {
            // Update the current slide number
            if (currentSlideEl) {
                currentSlideEl.textContent = currentSlide;
            }
            
            // Update progress bar
            if (progressIndicator) {
                const percentage = ((currentSlide - 1) / (uniqueEventCount - 1)) * 100;
                progressIndicator.style.left = `${percentage}%`;
            }
        }
        
        // Initialize
        updateSliderUI();
        
        // Previous button functionality
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                if (currentSlide > 1) {
                    currentSlide--;
                    updateSliderUI();
                    scrollToNextEvent(-1);
                } else {
                    // If at first slide, bounce animation
                    this.classList.add('btn-bounce');
                    setTimeout(() => {
                        this.classList.remove('btn-bounce');
                    }, 500);
                }
            });
        }
        
        // Next button functionality
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                if (currentSlide < uniqueEventCount) {
                    currentSlide++;
                    updateSliderUI();
                    scrollToNextEvent(1);
                } else {
                    // If at last slide, bounce animation
                    this.classList.add('btn-bounce');
                    setTimeout(() => {
                        this.classList.remove('btn-bounce');
                    }, 500);
                }
            });
        }
        
        // Function to scroll to next event
        function scrollToNextEvent(direction) {
            const eventContainers = document.querySelectorAll('.event-items');
            
            eventContainers.forEach(container => {
                const items = container.querySelectorAll('.event-item');
                if (items.length === 0) return;
                
                // Pause ongoing animation
                container.style.animationPlayState = 'paused';
                
                // Calculate the height of one item
                const itemHeight = items[0].offsetHeight + parseInt(getComputedStyle(items[0]).marginBottom);
                
                // Calculate current scroll position
                const currentScrollTop = container.scrollTop;
                
                // Calculate target scroll position
                const targetScrollTop = currentScrollTop + (itemHeight * direction);
                
                // Smooth scroll to target
                smoothScrollTo(container, targetScrollTop, 500).then(() => {
                    // Resume animation after scroll completes
                    container.style.animationPlayState = 'running';
                });
            });
        }
        
        // Helper function for smooth scrolling
        function smoothScrollTo(element, to, duration) {
            return new Promise(resolve => {
                const start = element.scrollTop;
                const change = to - start;
                const startTime = performance.now();
                
                function animate(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    if (elapsedTime >= duration) {
                        element.scrollTop = to;
                        resolve();
                    } else {
                        const t = elapsedTime / duration;
                        element.scrollTop = start + change * easeInOutQuad(t);
                        requestAnimationFrame(animate);
                    }
                }
                
                // Easing function
                function easeInOutQuad(t) {
                    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
                }
                
                requestAnimationFrame(animate);
            });
        }
        
        // Add button hover effects
        const sliderBtns = document.querySelectorAll('.slider-btn');
        sliderBtns.forEach(btn => {
            btn.addEventListener('mousemove', function(e) {
                const btnRect = this.getBoundingClientRect();
                const x = e.clientX - btnRect.left;
                const y = e.clientY - btnRect.top;
                
                // Calculate position for the glow effect
                const btnInner = this.querySelector('.slider-btn-inner');
                const glowElem = this.querySelector('.btn-glow');
                
                if (glowElem) {
                    glowElem.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)`;
                }
            });
        });
    }
    
    // Function to initialize button effects
    function initButtonEffects() {
        navButtons.forEach(button => {
            // Add 3D tilt effect to button icons
            const icon = button.querySelector('.btn-icon');
            
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate position relative to center
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate distance from center as a percentage
                const distanceX = (x - centerX) / centerX;
                const distanceY = (y - centerY) / centerY;
                
                // Apply 3D rotation effect
                this.style.transform = `perspective(800px) rotateX(${-distanceY * 5}deg) rotateY(${distanceX * 5}deg) translateZ(10px)`;
                
                // Move the icon for additional depth
                if (icon) {
                    icon.style.transform = `translateZ(30px) translateX(${distanceX * 5}px) translateY(${distanceY * 5}px)`;
                }
                
                // Add luminance effect
                const angle = Math.atan2(distanceY, distanceX) * (180 / Math.PI);
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                const brightness = 0.8 + distance * 0.3;
                this.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${brightness}) 0%, rgba(240,248,255,${brightness - 0.2}) 100%)`;
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.background = '';
                if (icon) {
                    icon.style.transform = '';
                }
            });
        });
    }
    
    // Function to initialize card 3D hover effects
    function initCardEffects() {
        eventsCards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                if (window.innerWidth < 992) return; // Skip on mobile
                
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Make the tilt effect subtle
                const rotateX = (y - centerY) / 30;
                const rotateY = (centerX - x) / 30;
                
                // Apply the transform
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                
                // Also apply effect to card header
                const header = this.querySelector('.card-header');
                if (header) {
                    header.style.transform = `translateZ(20px)`;
                }
                
                // Apply effect to event items
                const eventItems = this.querySelectorAll('.event-item');
                eventItems.forEach((item, index) => {
                    const itemY = Math.sin((index / eventItems.length) * Math.PI) * 10;
                    item.style.transform = `translateZ(${10 + itemY}px)`;
                });
            });
            
            card.addEventListener('mouseleave', function() {
                // Reset transform on mouse leave
                this.style.transform = '';
                
                // Reset header transform
                const header = this.querySelector('.card-header');
                if (header) {
                    header.style.transform = '';
                }
                
                // Reset event items transform
                const eventItems = this.querySelectorAll('.event-item');
                eventItems.forEach(item => {
                    item.style.transform = '';
                });
            });
        });
    }
    
    // Function to highlight a card with animation
    function highlightCard(card) {
        card.style.animation = 'none';
        card.offsetHeight; // Trigger reflow
        card.style.animation = 'cardHighlight 0.6s forwards';
    }
    
    // Function to reset a card animation
    function resetCard(card) {
        card.style.animation = 'none';
        card.offsetHeight; // Trigger reflow
        card.style.animation = '';
    }
    
    // Function to generate particles
    function generateParticles() {
        const particlesContainer = document.querySelector('.particles-container');
        if (!particlesContainer) return;
        
        // Create 30 particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            
            // Random size
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random opacity
            particle.style.opacity = Math.random() * 0.5;
            
            // Animation details
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 10;
            particle.style.animation = `floatParticle ${duration}s infinite ease-in-out ${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
        
        // Add animation style
        const style = document.createElement('style');
        style.textContent = `
            .particle {
                position: absolute;
                background: var(--event-primary);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1;
            }
            
            @keyframes floatParticle {
                0%, 100% { transform: translate(0, 0); opacity: 0.1; }
                25% { transform: translate(20px, -30px); opacity: 0.5; }
                50% { transform: translate(40px, 0); opacity: 0.1; }
                75% { transform: translate(20px, 30px); opacity: 0.3; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Event items hover effect
    const eventItems = document.querySelectorAll('.event-item');
    eventItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.event-arrow i');
            if (arrow) {
                arrow.style.transform = 'translateX(5px) scale(1.2)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.event-arrow i');
            if (arrow) {
                arrow.style.transform = '';
            }
        });
    });
    
    // Add dynamic 3D parallax effect based on mouse movement
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        // Move shapes based on mouse position
        const shapes = document.querySelectorAll('.events-shape');
        shapes.forEach((shape, index) => {
            const factor = (index + 1) * 20;
            shape.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
        });
        
        // Move floating icons based on mouse position
        const floatingIcons = document.querySelectorAll('.floating-icon');
        floatingIcons.forEach((icon, index) => {
            const factor = (index + 1) * 15;
            const currentTransform = window.getComputedStyle(icon).transform;
            icon.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px) ${currentTransform}`;
        });
    });
    
    // Set first button as active by default
    if (navButtons.length > 0) {
        navButtons[0].classList.add('active');
    }
});

// Initialize all new features
document.addEventListener('DOMContentLoaded', function() {
    setupContinuousScroll();
    initEnhancedSliderControls();
    initAutoplay();
    
    // Add CSS animation for button bounce
    const style = document.createElement('style');
    style.textContent = `
        @keyframes btnBounce {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .btn-bounce {
            animation: btnBounce 0.5s;
        }
    `;
    document.head.appendChild(style);
});

// Add these animations to CSS with JavaScript for more dynamic control
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cardHighlight {
            0% { transform: scale(1); box-shadow: var(--event-shadow); }
            50% { transform: scale(1.05); box-shadow: 0 20px 40px rgba(0, 86, 179, 0.4); }
            100% { transform: scale(1); box-shadow: var(--event-shadow); }
        }
    `;
    document.head.appendChild(style);
});

// Initialize autoplay functionality
function initAutoplay() {
    const autoplayBtn = document.querySelector('.autoplay-btn');
    const sliderControls = document.querySelector('.slider-controls');
    const progressIndicator = document.querySelector('.progress-indicator');
    let autoplayInterval;
    const autoplayDuration = 5000; // 5 seconds per slide
    
    // Set initial state (active/autoplay on)
    if (autoplayBtn) {
        startAutoplay();
        
        // Toggle autoplay when button is clicked
        autoplayBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                startAutoplay();
            } else {
                stopAutoplay();
            }
        });
    }
    
    // Start autoplay function
    function startAutoplay() {
        if (sliderControls) {
            sliderControls.classList.add('autoplay-active');
        }
        
        // Reset progress animation
        if (progressIndicator) {
            progressIndicator.style.animation = 'none';
            // Force reflow
            progressIndicator.offsetHeight;
            progressIndicator.style.animation = 'progressMove ' + (autoplayDuration/1000) + 's linear infinite';
        }
        
        // Clear any existing interval
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
        
        // Set new interval to advance slides
        autoplayInterval = setInterval(function() {
            const nextBtn = document.querySelector('.next-btn');
            if (nextBtn) {
                nextBtn.click();
            }
        }, autoplayDuration);
    }
    
    // Stop autoplay function
    function stopAutoplay() {
        if (sliderControls) {
            sliderControls.classList.remove('autoplay-active');
        }
        
        // Stop progress animation
        if (progressIndicator) {
            progressIndicator.style.animation = 'none';
        }
        
        // Clear interval
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }
    
    // Pause autoplay when user interacts with slider
    const sliderBtns = document.querySelectorAll('.prev-btn, .next-btn');
    sliderBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Temporarily stop autoplay
            stopAutoplay();
            
            // Restart after a delay if autoplay is active
            if (autoplayBtn && autoplayBtn.classList.contains('active')) {
                setTimeout(startAutoplay, 2000);
            }
        });
    });
    
    // Pause autoplay when hovering over events
    const eventItems = document.querySelectorAll('.event-items');
    eventItems.forEach(container => {
        container.addEventListener('mouseenter', function() {
            if (autoplayBtn && autoplayBtn.classList.contains('active')) {
                stopAutoplay();
            }
        });
        
        container.addEventListener('mouseleave', function() {
            if (autoplayBtn && autoplayBtn.classList.contains('active')) {
                startAutoplay();
            }
        });
    });
}

// Initialize circle card animations
function initCircleCardAnimations() {
    const circleCards = document.querySelectorAll('.circular-event-card');
    circleCards.forEach(card => {
        const circleElement = card.querySelector('.circle-bg');
        if (!circleElement) return;
        circleElement.addEventListener('click', function(e) {
            e.stopPropagation();
            // Simple scale animation
            this.style.transition = 'transform 0.3s cubic-bezier(.34,1.56,.64,1)';
            this.style.transform = 'scale(1.08)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
}

// Remove any popup or animation from "Read More" button and improve popup display
function initCircleCardPopups() {
    // This is now handled by events-popup.js
    // Keeping function to avoid errors but disabling functionality
    return;
}
