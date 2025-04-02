document.addEventListener('DOMContentLoaded', function () {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Hide all tab panes
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Show the selected tab pane - Add error handling
            const tabId = this.getAttribute('data-tab') + '-tab';
            const selectedPane = document.getElementById(tabId);
            if (selectedPane) {
                selectedPane.classList.add('active');
            }
        });
    });

    // Touch event variables - shared between card and tab swipe
    let touchStartX = 0;
    let touchEndX = 0;

    // Mobile touch enhancement for cards
    const infoCards = document.querySelectorAll('.info-card');

    infoCards.forEach(card => {
        // Add normal hover effect for desktop
        card.addEventListener('mouseenter', function () {
            this.classList.add('hover');
        });

        card.addEventListener('mouseleave', function () {
            this.classList.remove('hover');
        });

        // Add touch support for mobile
        card.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        card.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            // If user didn't swipe (just tapped)
            if (Math.abs(touchEndX - touchStartX) < 10) {
                // Toggle hover class on tap
                this.classList.toggle('hover');
            }
        }, { passive: true });
    });

    // Optimize animations for lower-end devices - add error handling for browser compatibility
    const isLowEndDevice = () => {
        try {
            return (
                !window.matchMedia('(min-width: 768px)').matches ||
                (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4) ||
                (navigator.deviceMemory !== undefined && navigator.deviceMemory < 4)
            );
        } catch (e) {
            console.warn('Device capability check failed:', e);
            return true; // Assume low-end device if check fails
        }
    };

    // Initialize GSAP animations if available and not a low-end device - add error handling
    try {
        if (typeof gsap !== 'undefined' && !isLowEndDevice()) {
            // Section header animation - check if element exists
            const sectionHeader = document.querySelector('.section-header');
            if (sectionHeader) {
                gsap.from('.section-header', {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            }

            // Tab buttons animation - check if buttons exist
            if (tabButtons.length > 0) {
                gsap.from('.tab-btn', {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.5)'
                });
            }

            // Animate cards with stagger effect when they enter viewport
            if (infoCards.length > 0) {
                try {
                    if (typeof ScrollTrigger !== 'undefined') {
                        gsap.from('.info-card', {
                            y: 40,
                            opacity: 0,
                            duration: 0.6,
                            stagger: 0.1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: '.cards-container',
                                start: 'top bottom-=100px',
                                toggleActions: 'play none none none'
                            }
                        });
                    } else {
                        // Fallback animation if ScrollTrigger is not available
                        gsap.from('.info-card', {
                            y: 40,
                            opacity: 0,
                            duration: 0.6,
                            stagger: 0.1,
                            ease: 'power2.out',
                            delay: 0.4
                        });
                    }
                } catch (scrollError) {
                    console.warn('ScrollTrigger animation failed:', scrollError);
                }
            }

            // Animate shapes - check if shapes exist
            const shapes = document.querySelectorAll('.shape');
            if (shapes.length > 0) {
                gsap.to('.shape', {
                    y: 'random(-20, 20)',
                    x: 'random(-20, 20)',
                    rotation: 'random(-10, 10)',
                    duration: 'random(5, 8)',
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    stagger: 0.3
                });
            }
        } else {
            // Simple CSS-based animation for low-end devices
            document.querySelectorAll('.section-header, .tab-btn, .info-card').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
        }
    } catch (animationError) {
        console.error('Animation error:', animationError);
        // Ensure visibility if animations fail
        document.querySelectorAll('.section-header, .tab-btn, .info-card').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }

    // Fix tab layout on window resize - add error handling
    window.addEventListener('resize', function () {
        const tabNav = document.querySelector('.tab-navigation');
        if (tabNav) {
            if (window.innerWidth < 576) {
                tabNav.style.flexDirection = 'column';
            } else {
                tabNav.style.flexDirection = 'row';
            }
        }
    });

    // Also set initial tab layout
    const tabNav = document.querySelector('.tab-navigation');
    if (tabNav) {
        if (window.innerWidth < 576) {
            tabNav.style.flexDirection = 'column';
        } else {
            tabNav.style.flexDirection = 'row';
        }
    }

    // Preload card images for better UX
    const preloadImages = () => {
        try {
            const images = document.querySelectorAll('.card-img img');
            images.forEach(img => {
                const src = img.getAttribute('src');
                if (src) {
                    const newImg = new Image();
                    newImg.src = src;
                }
            });
        } catch (e) {
            console.warn('Image preloading failed:', e);
        }
    };
    preloadImages();

    // Add swipe support for tab navigation on mobile - using shared touch variables
    const tabContent = document.querySelector('.tab-content');

    if (tabContent) {
        tabContent.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        tabContent.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        const swipeThreshold = 80; // Minimum distance required for swipe
        const activeTabBtn = document.querySelector('.tab-btn.active');

        if (!activeTabBtn) return;

        // Calculate swipe distance
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) < swipeThreshold) return;

        const allButtons = Array.from(document.querySelectorAll('.tab-btn'));
        const currentIndex = allButtons.indexOf(activeTabBtn);

        // Right to left swipe (next tab)
        if (swipeDistance < 0 && currentIndex < allButtons.length - 1) {
            allButtons[currentIndex + 1].click();
        }
        // Left to right swipe (previous tab)
        else if (swipeDistance > 0 && currentIndex > 0) {
            allButtons[currentIndex - 1].click();
        }
    }

    // Add notification badge updating (for demo purposes)
    const updateBadges = () => {
        const badges = document.querySelectorAll('.card-badge');
        badges.forEach(badge => {
            if (badge.classList.contains('new')) {
                // Simulate new content by adding a subtle animation
                setInterval(() => {
                    badge.classList.add('pulse');
                    setTimeout(() => {
                        badge.classList.remove('pulse');
                    }, 1000);
                }, 5000);
            }
        });
    };
    updateBadges();

    // Add debug helper - disable in production
    const enableDebug = false;
    if (enableDebug) {
        console.log('Info Hub Components:', {
            tabButtons: tabButtons.length,
            tabPanes: tabPanes.length,
            infoCards: infoCards.length,
            isLowEnd: isLowEndDevice(),
            hasGSAP: typeof gsap !== 'undefined',
            hasScrollTrigger: typeof ScrollTrigger !== 'undefined',
            width: window.innerWidth
        });
    }
});