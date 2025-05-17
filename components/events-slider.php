<section class="events-slider-section" id="events-slider" data-section-loaded="false">
    <!-- Section Heading -->
    <div class="events-heading-container">
        <h2 class="events-heading">
            <span class="heading-line">School</span> 
            <span class="heading-line highlight">Events & Activities</span>
        </h2>
        <p class="events-subheading">Stay updated with our latest events, notices, and spotlights</p>
    </div>
    
    <!-- Circular Events Cards Container with Lazy Initialization -->
    <div class="circular-events-container">
        <!-- Event Card 1 - Latest Events (Green) -->
        <div class="circular-event-card lazy-card" id="event-latest">
            <div class="circle-bg green-bg">
                <div class="icon-container">
                    <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                </div>
                <h3 class="circle-title">Latest Events</h3>
                <div class="event-preview">
                    <p>Stay up-to-date with our latest events and activities</p>
                </div>
            </div>
        </div>

        <!-- Event Card 2 - Notices (Blue) -->
        <div class="circular-event-card lazy-card" id="event-notice">
            <div class="circle-bg blue-bg">
                <div class="icon-container">
                    <i class="fas fa-bullhorn" aria-hidden="true"></i>
                </div>
                <h3 class="circle-title">Notice Board</h3>
                <div class="event-preview">
                    <p>Important announcements and notices for students and parents</p>
                </div>
            </div>
        </div>

        <!-- Event Card 3 - Spotlight (Purple) -->
        <div class="circular-event-card lazy-card" id="event-spotlight">
            <div class="circle-bg purple-bg">
                <div class="icon-container">
                    <i class="fas fa-star" aria-hidden="true"></i>
                </div>
                <h3 class="circle-title">Spotlight</h3>
                <div class="event-preview">
                    <p>Highlighting special achievements and upcoming featured events</p>
                </div>
            </div>
        </div>

        <!-- Event Card 4 - Activities (Orange) -->
        <div class="circular-event-card lazy-card" id="event-activities">
            <div class="circle-bg orange-bg">
                <div class="icon-container">
                    <i class="fas fa-child" aria-hidden="true"></i>
                </div>
                <h3 class="circle-title">Activities</h3>
                <div class="event-preview">
                    <p>Fun and educational activities for student development</p>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Decorative Elements - These will be lazy loaded -->
    <div class="events-bg-elements">
        <!-- Will be populated via JavaScript when section is visible -->
    </div>
    
    <!-- Optimized script loading -->
    <script>
        // Lazy loading implementation for events section
        document.addEventListener('DOMContentLoaded', function() {
            // Using IntersectionObserver to lazy load content when section becomes visible
            if ('IntersectionObserver' in window) {
                const eventsSection = document.getElementById('events-slider');
                const decorativeContainer = document.querySelector('.events-bg-elements');
                
                // Create the observer
                const sectionObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && eventsSection.getAttribute('data-section-loaded') === 'false') {
                            // Mark as loaded
                            eventsSection.setAttribute('data-section-loaded', 'true');
                            
                            // 1. Add animations to cards with delay
                            const cards = document.querySelectorAll('.lazy-card');
                            cards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.classList.add('card-loaded');
                                }, index * 150); // Stagger animation
                            });
                            
                            // 2. Lazy load decorative elements
                            decorativeContainer.innerHTML = `
                                <div class="events-shape shape1"></div>
                                <div class="events-shape shape2"></div>
                                <div class="events-shape shape3"></div>
                                <div class="events-shape shape4"></div>
                                <div class="floating-icon icon1"><i class="fas fa-graduation-cap"></i></div>
                                <div class="floating-icon icon2"><i class="fas fa-book"></i></div>
                                <div class="floating-icon icon3"><i class="fas fa-microscope"></i></div>
                                <div class="floating-icon icon4"><i class="fas fa-paint-brush"></i></div>
                                <div class="floating-icon icon5"><i class="fas fa-calculator"></i></div>
                            `;
                            
                            // 3. Load additional scripts after section is visible
                            const eventsPopupScript = document.createElement('script');
                            eventsPopupScript.src = 'assets/js/events-popup.js';
                            eventsPopupScript.async = true;
                            document.body.appendChild(eventsPopupScript);
                            
                            const animationsScript = document.createElement('script');
                            animationsScript.src = 'assets/js/animations.js';
                            animationsScript.async = true;
                            document.body.appendChild(animationsScript);
                            
                            // Stop observing once loaded
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    root: null, // viewport
                    rootMargin: '0px 0px 100px 0px', // start loading when within 100px of viewport
                    threshold: 0.1 // trigger when 10% of element is visible
                });
                
                // Start observing the section
                sectionObserver.observe(eventsSection);
            } else {
                // Fallback for browsers that don't support IntersectionObserver
                // Just load everything immediately
                document.getElementById('events-slider').setAttribute('data-section-loaded', 'true');
                document.querySelectorAll('.lazy-card').forEach(card => {
                    card.classList.add('card-loaded');
                });
                
                // Load scripts
                const eventsPopupScript = document.createElement('script');
                eventsPopupScript.src = 'assets/js/events-popup.js';
                document.body.appendChild(eventsPopupScript);
                
                const animationsScript = document.createElement('script');
                animationsScript.src = 'assets/js/animations.js';
                document.body.appendChild(animationsScript);
            }
        });
    </script>
    
    <style>
        /* Add these styles for lazy loading effects */
        .lazy-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .card-loaded {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Initially hide decorative elements until they're loaded */
        .events-bg-elements {
            opacity: 0;
            transition: opacity 0.8s ease;
        }
        
        #events-slider[data-section-loaded="true"] .events-bg-elements {
            opacity: 1;
        }
    </style>
</section>
