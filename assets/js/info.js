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

    // Load data from JSON file
    fetchInfoData();

    // Touch event variables - shared between card and tab swipe
    let touchStartX = 0;
    let touchEndX = 0;

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
            document.querySelectorAll('.section-header, .tab-btn').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
        }
    } catch (animationError) {
        console.error('Animation error:', animationError);
        // Ensure visibility if animations fail
        document.querySelectorAll('.section-header, .tab-btn').forEach(el => {
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

    // Fetch information data from JSON file
    function fetchInfoData() {
        fetch('JSON/info.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Process the data
                populateEvents(data.events);
                populateNotices(data.notices);
                populateSpotlight(data.spotlight);
                
                // After loading data, setup card interactions
                setupCardInteractions();
                
                // Update badges if needed
                updateBadges();
                
                // Animate cards if GSAP is available
                animateCards();
            })
            .catch(error => {
                console.error('Error fetching info data:', error);
                // Show error message in all containers
                document.querySelectorAll('.cards-container').forEach(container => {
                    container.innerHTML = `
                        <div class="error-message">
                            <i class="fas fa-exclamation-circle"></i>
                            <p>Failed to load content. Please try again later.</p>
                        </div>
                    `;
                });
            });
    }

    // Build event cards from data
    function populateEvents(events) {
        const eventsContainer = document.getElementById('events-container');
        if (!eventsContainer) return;
        
        if (!events || events.length === 0) {
            eventsContainer.innerHTML = '<div class="empty-state">No upcoming events at this time.</div>';
            return;
        }

        let html = '';
        events.forEach(event => {
            html += `
                <div class="info-card" data-category="${event.category}">
                    <div class="card-img">
                        <img src="${event.image}" alt="${event.title}" onerror="this.src='assets/images/placeholders/event-default.jpg'">
                        <div class="card-badge ${event.badgeType}">${event.badge}</div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${event.title}</h3>
                        <div class="card-meta">
                            <div class="meta-item">
                                <i class="fas fa-clock"></i>
                                <span>${event.date}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${event.location}</span>
                            </div>
                        </div>
                        <p class="card-text">${event.description}</p>
                        <a href="${event.link}" class="card-link">Read More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
        });
        
        eventsContainer.innerHTML = html;
    }

    // Build notice cards from data
    function populateNotices(notices) {
        const noticesContainer = document.getElementById('notices-container');
        if (!noticesContainer) return;
        
        if (!notices || notices.length === 0) {
            noticesContainer.innerHTML = '<div class="empty-state">No notices at this time.</div>';
            return;
        }

        let html = '';
        notices.forEach(notice => {
            html += `
                <div class="info-card" data-category="${notice.category}">
                    <div class="card-img">
                        <img src="${notice.image}" alt="${notice.title}" onerror="this.src='assets/images/placeholders/notice-default.jpg'">
                        <div class="card-badge ${notice.badgeType}">${notice.badge}</div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${notice.title}</h3>
                        <div class="card-meta">
                            <div class="meta-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span>${notice.date}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-users"></i>
                                <span>${notice.audience}</span>
                            </div>
                        </div>
                        <p class="card-text">${notice.description}</p>
                        <a href="${notice.link}" class="card-link">Read More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
        });
        
        noticesContainer.innerHTML = html;
    }

    // Build spotlight cards from data
    function populateSpotlight(spotlights) {
        const spotlightContainer = document.getElementById('spotlight-container');
        if (!spotlightContainer) return;
        
        if (!spotlights || spotlights.length === 0) {
            spotlightContainer.innerHTML = '<div class="empty-state">No spotlight items at this time.</div>';
            return;
        }

        let html = '';
        spotlights.forEach(spotlight => {
            // Build meta items dynamically based on what's available
            let metaHTML = '<div class="card-meta">';
            if (spotlight.award) {
                metaHTML += `
                    <div class="meta-item">
                        <i class="fas fa-trophy"></i>
                        <span>${spotlight.award}</span>
                    </div>
                `;
            }
            if (spotlight.team) {
                metaHTML += `
                    <div class="meta-item">
                        <i class="fas fa-users"></i>
                        <span>${spotlight.team}</span>
                    </div>
                `;
            }
            if (spotlight.location) {
                metaHTML += `
                    <div class="meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${spotlight.location}</span>
                    </div>
                `;
            }
            if (spotlight.initiative) {
                metaHTML += `
                    <div class="meta-item">
                        <i class="fas fa-leaf"></i>
                        <span>${spotlight.initiative}</span>
                    </div>
                `;
            }
            if (spotlight.participants) {
                metaHTML += `
                    <div class="meta-item">
                        <i class="fas fa-users"></i>
                        <span>${spotlight.participants}</span>
                    </div>
                `;
            }
            metaHTML += '</div>';
            
            html += `
                <div class="info-card spotlight-card" data-category="${spotlight.category}">
                    <div class="card-img">
                        <img src="${spotlight.image}" alt="${spotlight.title}" onerror="this.src='assets/images/placeholders/spotlight-default.jpg'">
                        <div class="card-badge ${spotlight.badgeType}">${spotlight.badge}</div>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${spotlight.title}</h3>
                        ${metaHTML}
                        <p class="card-text">${spotlight.description}</p>
                        <a href="${spotlight.link}" class="card-link">${spotlight.linkText || 'Read More'} <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
        });
        
        spotlightContainer.innerHTML = html;
    }

    // Setup interaction for cards after they're loaded
    function setupCardInteractions() {
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
    }

    // Animate cards with GSAP if available
    function animateCards() {
        const infoCards = document.querySelectorAll('.info-card');
        
        if (typeof gsap !== 'undefined' && !isLowEndDevice() && infoCards.length > 0) {
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
                // Make cards visible if animation fails
                infoCards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.transform = 'none';
                });
            }
        } else {
            // Make sure cards are visible without animation on low-end devices
            infoCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'none';
            });
        }
    }

    // Add notification badge updating (for demo purposes)
    function updateBadges() {
        const badges = document.querySelectorAll('.card-badge.new');
        badges.forEach(badge => {
            // Simulate new content by adding a subtle animation
            setInterval(() => {
                badge.classList.add('pulse');
                setTimeout(() => {
                    badge.classList.remove('pulse');
                }, 1000);
            }, 5000);
        });
    }

    // Preload card images for better UX
    function preloadImages() {
        try {
            const images = document.querySelectorAll('.card-img img');
            images.forEach(img => {
                const src = img.getAttribute('src');
                if (src) {
                    const newImg = new Image();
                    newImg.src = src;
                    
                    // Add error handler for images
                    newImg.onerror = function() {
                        img.classList.add('error');
                        if (img.parentNode) {
                            img.parentNode.classList.add('image-error');
                        }
                    };
                }
            });
        } catch (e) {
            console.warn('Image preloading failed:', e);
        }
    }

    // Add debug helper - disable in production
    const enableDebug = false;
    if (enableDebug) {
        console.log('Info Hub Components:', {
            tabButtons: tabButtons.length,
            tabPanes: tabPanes.length,
            isLowEnd: isLowEndDevice(),
            hasGSAP: typeof gsap !== 'undefined',
            hasScrollTrigger: typeof ScrollTrigger !== 'undefined',
            width: window.innerWidth
        });
    }
});