/**
 * Enhanced Events Popup System with Auto-Scrolling Feature
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize popup system
    initEnhancedEventPopups();
    
    // Global variables for auto-scrolling
    let autoScrollInterval = null;
    let isPaused = false;
    let currentCardIndex = 0;
    let totalCards = 0;
    let scrollDuration = 3000; // 3 seconds per card
    
    /**
     * Initialize enhanced event popups
     */
    function initEnhancedEventPopups() {
        // Create popup overlay if it doesn't exist
        let popupOverlay = document.querySelector('.enhanced-popup-overlay');
        if (!popupOverlay) {
            popupOverlay = document.createElement('div');
            popupOverlay.className = 'enhanced-popup-overlay';
            document.body.appendChild(popupOverlay);
        }
        
        // Add event listeners to circular event cards
        const eventCards = document.querySelectorAll('.circular-event-card');
        eventCards.forEach(card => {
            setupCardListeners(card);
        });
        
        // Close popup when clicking on overlay
        popupOverlay.addEventListener('click', function(e) {
            if (e.target === popupOverlay) {
                closePopup();
            }
        });
        
        // Close popup with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePopup();
            }
        });
    }
    
    /**
     * Set up event listeners for cards
     */
    function setupCardListeners(card) {
        const circleElement = card.querySelector('.circle-bg');
        const learnMoreBtn = card.querySelector('.learn-more-btn');
        
        // Function to handle click event
        const handleCardClick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close any existing popup first
            closePopup(true).then(() => {
                setTimeout(() => createAndShowPopup(card), 100);
            });
        };
        
        // Add click events
        if (circleElement) {
            circleElement.addEventListener('click', handleCardClick);
        }
        
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', handleCardClick);
        }
    }
    
    /**
     * Close popup with animation
     */
    function closePopup(immediate = false) {
        return new Promise((resolve) => {
            const popupOverlay = document.querySelector('.enhanced-popup-overlay');
            if (!popupOverlay || !popupOverlay.classList.contains('active')) {
                resolve();
                return;
            }
            
            // Stop auto-scrolling when closing popup
            stopAutoScroll();
            
            popupOverlay.classList.remove('active');
            
            const timeout = immediate ? 0 : 500;
            setTimeout(() => {
                popupOverlay.innerHTML = '';
                document.body.style.overflow = '';
                resolve();
            }, timeout);
        });
    }
    
    /**
     * Create and show popup for a card
     */
    function createAndShowPopup(card) {
        // Extract card data
        const cardId = card.id;
        const category = cardId.replace('event-', '');
        const title = card.querySelector('.circle-title').textContent;
        const description = card.querySelector('.event-preview p').textContent;
        const iconClass = card.querySelector('.icon-container i').className;
        
        // Get event items
        const eventItems = collectEventItems(card);
        
        // Generate HTML for the popup
        const popupHTML = generatePopupHTML(category, title, description, iconClass, eventItems);
        
        // Insert HTML into the overlay
        const popupOverlay = document.querySelector('.enhanced-popup-overlay');
        popupOverlay.innerHTML = popupHTML;
        
        // Show the popup
        document.body.style.overflow = 'hidden'; // Prevent body scrolling
        setTimeout(() => {
            popupOverlay.classList.add('active');
        }, 50);
        
        // Initialize auto-scrolling after popup is visible
        setTimeout(() => {
            initAutoScroll();
            addPopupInteractions();
            setupPopupEventListeners();
        }, 800);
    }
    
    /**
     * Generate complete HTML for the popup
     */
    function generatePopupHTML(category, title, description, iconClass, eventItems) {
        return `
            <div class="enhanced-event-popup">
                <button class="enhanced-popup-close" aria-label="Close popup"><i class="fas fa-times"></i></button>
                
                <!-- Sidebar with event information -->
                <div class="enhanced-popup-sidebar">
                    <div class="sidebar-content">
                        <div class="popup-category">${capitalizeFirstLetter(category)}</div>
                        <h2 class="popup-title">${title}</h2>
                        <div class="popup-description">${description}</div>
                        
                        <div class="popup-meta">
                            <div class="popup-meta-item">
                                <div class="popup-meta-icon">
                                    <i class="fas fa-calendar-alt"></i>
                                </div>
                                <div>
                                    <span class="popup-meta-label">Date</span>
                                    <div class="popup-meta-text">${generateEventDate()}</div>
                                </div>
                            </div>
                            
                            <div class="popup-meta-item">
                                <div class="popup-meta-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <span class="popup-meta-label">Location</span>
                                    <div class="popup-meta-text">School Main Campus</div>
                                </div>
                            </div>
                            
                            <div class="popup-meta-item">
                                <div class="popup-meta-icon">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div>
                                    <span class="popup-meta-label">Time</span>
                                    <div class="popup-meta-text">9:00 AM - 11:00 AM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Background elements -->
                    <div class="sidebar-shape shape1"></div>
                    <div class="sidebar-shape shape2"></div>
                    ${generateParticles()}
                </div>
                
                <!-- Main content area -->
                <div class="enhanced-popup-content">
                    <!-- Featured events section with auto-scroll -->
                    <div class="popup-section">
                        <h3 class="popup-section-title">
                            <i class="fas fa-calendar-check"></i>
                            Featured Events
                        </h3>
                        
                        <div class="event-card-grid">
                            <div class="event-card-scroll-container">
                                ${generateEventCards(eventItems, category, iconClass)}
                            </div>
                            
                            <!-- Scroll indicator arrow -->
                            <div class="scroll-indicator-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                            
                            <!-- Scroll progress -->
                            <div class="scroll-progress-bar">
                                <div class="scroll-progress-indicator"></div>
                            </div>
                            
                            <!-- Card pagination dots -->
                            <div class="event-card-pagination"></div>
                            
                            <!-- Scroll controls -->
                            <div class="event-scroll-controls">
                                <button class="scroll-control-btn scroll-prev-btn" aria-label="Previous event">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="scroll-control-btn scroll-pause-btn" aria-label="Pause auto-scroll">
                                    <i class="fas fa-pause"></i>
                                </button>
                                <button class="scroll-control-btn scroll-next-btn" aria-label="Next event">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Related events section with auto-scroll -->
                    <div class="popup-section">
                        <h3 class="popup-section-title">
                            <i class="fas fa-link"></i>
                            Related Events
                        </h3>
                        
                        <div class="related-events-container">
                            <div class="related-events">
                                ${generateRelatedEvents(category)}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Additional information section -->
                    <div class="popup-section">
                        <h3 class="popup-section-title">
                            <i class="fas fa-info-circle"></i>
                            Additional Information
                        </h3>
                        
                        <div class="popup-additional-info">
                            <p>Please arrive 15 minutes before the event starts. For any questions or special accommodations, 
                            please contact the administration office at <strong>admin@school.edu</strong> or call <strong>(123) 456-7890</strong>.</p>
                        </div>
                    </div>
                    
                    <!-- Footer with CTA and share buttons -->
                    <div class="enhanced-popup-footer">
                        <button class="popup-cta-btn">Register Now <i class="fas fa-arrow-right"></i></button>
                        
                        <div class="popup-share">
                            <button class="popup-share-btn" aria-label="Share on Facebook"><i class="fab fa-facebook-f"></i></button>
                            <button class="popup-share-btn" aria-label="Share on Twitter"><i class="fab fa-twitter"></i></button>
                            <button class="popup-share-btn" aria-label="Share via Email"><i class="fas fa-envelope"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Initialize auto-scrolling functionality
     */
    function initAutoScroll() {
        const cardContainer = document.querySelector('.event-card-scroll-container');
        if (!cardContainer) return;
        
        const cards = cardContainer.querySelectorAll('.event-card');
        totalCards = cards.length;
        
        if (totalCards <= 1) return; // Don't scroll if there's only one card
        
        // Create pagination dots based on cards count
        createPaginationDots(totalCards);
        
        // Set active state for first card
        if (cards[0]) {
            cards[0].classList.add('active');
        }
        
        // Start auto-scrolling
        startAutoScroll();
        
        // Add event listeners to pause on hover
        const eventCardGrid = document.querySelector('.event-card-grid');
        if (eventCardGrid) {
            eventCardGrid.addEventListener('mouseenter', pauseAutoScroll);
            eventCardGrid.addEventListener('mouseleave', resumeAutoScroll);
        }
    }
    
    /**
     * Create pagination dots for cards
     */
    function createPaginationDots(count) {
        const paginationContainer = document.querySelector('.event-card-pagination');
        if (!paginationContainer) return;
        
        paginationContainer.innerHTML = '';
        
        for (let i = 0; i < count; i++) {
            const dot = document.createElement('div');
            dot.className = 'card-pagination-dot';
            if (i === 0) dot.classList.add('active');
            
            // Add click listener to jump to specific card
            dot.addEventListener('click', () => scrollToCard(i));
            
            paginationContainer.appendChild(dot);
        }
    }
    
    /**
     * Start auto-scrolling of cards
     */
    function startAutoScroll() {
        // Clear any existing interval
        stopAutoScroll();
        
        // Set flag
        isPaused = false;
        
        // Update UI
        const pauseBtn = document.querySelector('.scroll-pause-btn');
        if (pauseBtn) {
            pauseBtn.classList.remove('paused');
            pauseBtn.querySelector('i').className = 'fas fa-pause';
        }
        
        // Start progress animation
        updateProgressBar(0);
        
        // Start the interval
        autoScrollInterval = setInterval(() => {
            if (isPaused) return;
            
            // Increment current card index
            currentCardIndex = (currentCardIndex + 1) % totalCards;
            
            // Scroll to the next card
            scrollToCard(currentCardIndex);
            
        }, scrollDuration);
    }
    
    /**
     * Stop auto-scrolling
     */
    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }
    
    /**
     * Pause auto-scrolling (on hover/interaction)
     * Export to window object for mobile integration
     */
    function pauseAutoScroll() {
        isPaused = true;
        
        const pauseBtn = document.querySelector('.scroll-pause-btn');
        if (pauseBtn) {
            pauseBtn.classList.add('paused');
            pauseBtn.querySelector('i').className = 'fas fa-play';
        }
    }
    
    /**
     * Resume auto-scrolling (after hover/interaction)
     * Export to window object for mobile integration
     */
    function resumeAutoScroll() {
        isPaused = false;
        
        const pauseBtn = document.querySelector('.scroll-pause-btn');
        if (pauseBtn) {
            pauseBtn.classList.remove('paused');
            pauseBtn.querySelector('i').className = 'fas fa-pause';
        }
    }
    
    // Export functions for mobile integration
    window.pauseAutoScroll = pauseAutoScroll;
    window.resumeAutoScroll = resumeAutoScroll;
    
    /**
     * Scroll to a specific card
     */
    function scrollToCard(index) {
        const cardContainer = document.querySelector('.event-card-scroll-container');
        const cards = cardContainer.querySelectorAll('.event-card');
        
        if (index < 0 || index >= cards.length) return;
        
        // Update current index
        currentCardIndex = index;
        
        // Calculate scroll position
        const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
        const scrollPosition = index * cardWidth;
        
        // Apply smooth scroll
        cardContainer.style.transform = `translateX(-${scrollPosition}px)`;
        
        // Update active states
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        
        // Update pagination dots
        updatePaginationDots(index);
        
        // Update progress bar
        updateProgressBar(0); // Reset progress
        
        // Reset auto-scroll timer
        if (autoScrollInterval) {
            stopAutoScroll();
            startAutoScroll();
        }
    }
    
    /**
     * Update pagination dots to reflect current card
     */
    function updatePaginationDots(activeIndex) {
        const dots = document.querySelectorAll('.card-pagination-dot');
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        });
    }
    
    /**
     * Update progress bar animation
     */
    function updateProgressBar(startPercent = 0) {
        const progressBar = document.querySelector('.scroll-progress-indicator');
        if (!progressBar) return;
        
        // Reset progress
        progressBar.style.width = `${startPercent}%`;
        
        // Animate progress over time
        setTimeout(() => {
            progressBar.style.transition = `width ${scrollDuration}ms linear`;
            progressBar.style.width = '100%';
        }, 50);
    }
    
    /**
     * Set up event listeners for the popup
     */
    function setupPopupEventListeners() {
        // Close button
        const closeBtn = document.querySelector('.enhanced-popup-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                closePopup();
            });
        }
        
        // CTA button
        const ctaBtn = document.querySelector('.popup-cta-btn');
        if (ctaBtn) {
            ctaBtn.addEventListener('click', function() {
                alert('Registration successful! Thank you for registering for this event.');
            });
        }
        
        // Scroll control buttons
        setupScrollControls();
        
        // Share buttons
        const shareButtons = document.querySelectorAll('.popup-share-btn');
        shareButtons.forEach(button => {
            button.addEventListener('click', function() {
                const icon = this.querySelector('i');
                const platform = icon.classList.contains('fa-facebook-f') ? 'Facebook' :
                                icon.classList.contains('fa-twitter') ? 'Twitter' : 'Email';
                                
                alert(`Sharing via ${platform} - This would open the sharing dialog in a live implementation.`);
            });
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);
    }
    
    /**
     * Setup scroll control buttons
     */
    function setupScrollControls() {
        const prevBtn = document.querySelector('.scroll-prev-btn');
        const nextBtn = document.querySelector('.scroll-next-btn');
        const pauseBtn = document.querySelector('.scroll-pause-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                const newIndex = (currentCardIndex - 1 + totalCards) % totalCards;
                scrollToCard(newIndex);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                const newIndex = (currentCardIndex + 1) % totalCards;
                scrollToCard(newIndex);
            });
        }
        
        if (pauseBtn) {
            pauseBtn.addEventListener('click', function() {
                if (isPaused) {
                    resumeAutoScroll();
                } else {
                    pauseAutoScroll();
                }
            });
        }
    }
    
    /**
     * Handle keyboard navigation
     */
    function handleKeyboardNavigation(e) {
        if (!document.querySelector('.enhanced-popup-overlay.active')) return;
        
        switch (e.key) {
            case 'ArrowLeft':
                const prevIndex = (currentCardIndex - 1 + totalCards) % totalCards;
                scrollToCard(prevIndex);
                break;
                
            case 'ArrowRight':
                const nextIndex = (currentCardIndex + 1) % totalCards;
                scrollToCard(nextIndex);
                break;
                
            case ' ': // Space bar
                e.preventDefault();
                if (isPaused) {
                    resumeAutoScroll();
                } else {
                    pauseAutoScroll();
                }
                break;
        }
    }
    
    /**
     * Generate HTML for event cards with auto-scrolling
     */
    function generateEventCards(events, category, iconClass) {
        // Handle case with no events
        if (!events || events.length === 0) {
            const dummyEvents = [
                { title: `Upcoming ${capitalizeFirstLetter(category)} Event`, date: 'Coming Soon' },
                { title: 'Annual School Exhibition', date: 'June 15, 2023' },
                { title: 'Parent-Teacher Conference', date: 'July 5, 2023' }
            ];
            
            return generateCardHTML(dummyEvents, iconClass);
        }
        
        // Generate cards and add duplicates to make infinite scroll
        const duplicatedEvents = [...events];
        
        // Add duplicate cards if few events
        if (events.length < 5) {
            duplicatedEvents.push(...events);
        }
        
        return generateCardHTML(duplicatedEvents, iconClass);
    }
    
    /**
     * Generate HTML for cards
     */
    function generateCardHTML(events, iconClass) {
        return events.map((event, index) => `
            <div class="event-card" tabindex="0">
                <div class="event-card-header">
                    <div class="event-card-icon">
                        <i class="${getCategoryIcon(iconClass, index)}"></i>
                    </div>
                    <h4 class="event-card-title">${event.title}</h4>
                </div>
                <div class="event-card-content">
                    <div class="event-card-detail">
                        <div class="event-card-detail-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="event-card-detail-text">
                            ${getRandomLocation()}
                        </div>
                    </div>
                    <div class="event-card-detail">
                        <div class="event-card-detail-icon">
                            <i class="fas fa-user-friends"></i>
                        </div>
                        <div class="event-card-detail-text">
                            ${getRandomParticipants()}
                        </div>
                    </div>
                </div>
                <div class="event-card-footer">
                    <div>
                        <div class="event-date-label">Date</div>
                        <div class="event-date">${event.date}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    /**
     * Generate related events for auto-scrolling
     */
    function generateRelatedEvents(category) {
        // Create varied events based on category
        const eventsByCategory = {
            latest: [
                { title: "Annual Sports Day", date: "May 15, 2023" },
                { title: "Science Exhibition", date: "June 5, 2023" },
                { title: "Summer Camp Registration", date: "April 20, 2023" },
                { title: "Cultural Festival", date: "July 10, 2023" },
                { title: "Parent-Teacher Meeting", date: "June 25, 2023" }
            ],
            notice: [
                { title: "Fee Payment Deadline", date: "April 30, 2023" },
                { title: "School Uniform Update", date: "May 5, 2023" },
                { title: "Exam Schedule", date: "June 12, 2023" },
                { title: "Holiday Announcement", date: "April 15, 2023" },
                { title: "School Timing Change", date: "May 20, 2023" }
            ],
            spotlight: [
                { title: "Academic Achievement Awards", date: "June 30, 2023" },
                { title: "Student of the Month", date: "May 1, 2023" },
                { title: "National Competition Winners", date: "April 10, 2023" },
                { title: "Alumni Success Story", date: "May 25, 2023" },
                { title: "School Ranking Announcement", date: "June 5, 2023" }
            ],
            activities: [
                { title: "Basketball Tournament", date: "May 10, 2023" },
                { title: "Drama Club Performance", date: "June 8, 2023" },
                { title: "Chess Competition", date: "April 25, 2023" },
                { title: "Art Workshop", date: "May 15, 2023" },
                { title: "Debate Competition", date: "June 20, 2023" }
            ]
        };
        
        // Get events for current category, fallback to default
        const relatedEvents = eventsByCategory[category] || eventsByCategory.latest;
        
        return relatedEvents.map(event => `
            <div class="related-event-card">
                <h4 class="related-event-title">${event.title}</h4>
                <div class="related-event-date">
                    <i class="fas fa-calendar-alt"></i>
                    ${event.date}
                </div>
            </div>
        `).join('');
    }
    
    /**
     * Helper functions (existing)
     */
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function generateEventDate() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
        const currentDate = new Date();
        const futureDate = new Date(currentDate);
        futureDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 30) + 1);
        
        const day = futureDate.getDate();
        const month = months[futureDate.getMonth()];
        const year = futureDate.getFullYear();
        
        return `${month} ${day}, ${year}`;
    }
    
    function getCategoryIcon(baseIcon, index) {
        const icons = [
            baseIcon || 'fas fa-calendar-alt',
            'fas fa-calendar-check',
            'fas fa-calendar-day',
            'fas fa-star',
            'fas fa-bell',
            'fas fa-award'
        ];
        
        return icons[index % icons.length];
    }
    
    function getRandomLocation() {
        const locations = [
            'School Auditorium',
            'Main Campus',
            'Sports Ground',
            'Virtual Meeting',
            'Science Lab',
            'Library Hall'
        ];
        
        return locations[Math.floor(Math.random() * locations.length)];
    }
    
    function getRandomParticipants() {
        const participantTypes = [
            'All Students',
            'Grades 9-12',
            'Parents & Students',
            'Teaching Staff',
            'All Faculty Members',
            'Selected Students'
        ];
        
        return participantTypes[Math.floor(Math.random() * participantTypes.length)];
    }
    
    function generateParticles() {
        let particles = '';
        const count = 8;
        
        for (let i = 0; i < count; i++) {
            const size = Math.random() * 8 + 3;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            const opacity = Math.random() * 0.3 + 0.1;
            
            particles += `
                <div class="popup-particle" 
                     style="width: ${size}px; height: ${size}px; 
                            top: ${top}%; left: ${left}%; 
                            opacity: ${opacity};
                            animation-delay: ${delay}s;">
                </div>
            `;
        }
        
        return particles;
    }
    
    function addPopupInteractions() {
        const popup = document.querySelector('.enhanced-event-popup');
        if (!popup) return;
        
        popup.addEventListener('mousemove', function(e) {
            if (window.innerWidth < 768) return; // Skip on mobile
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate position relative to center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate distance from center as a percentage (-1 to 1)
            const distX = (x - centerX) / centerX;
            const distY = (y - centerY) / centerY;
            
            // Apply subtle 3D rotation (max 2 degrees)
            this.style.transform = `perspective(2000px) rotateX(${-distY * 2}deg) rotateY(${distX * 2}deg)`;
            
            // Move sidebar shapes for parallax effect
            const shapes = document.querySelectorAll('.sidebar-shape');
            shapes.forEach((shape, index) => {
                const factor = (index + 1) * 20;
                shape.style.transform = `translate(${distX * factor}px, ${distY * factor}px)`;
            });
            
            // Apply parallax to category badge and title
            const category = document.querySelector('.popup-category');
            const title = document.querySelector('.popup-title');
            const description = document.querySelector('.popup-description');
            
            if (category) category.style.transform = `translateZ(30px) translate(${distX * 15}px, ${distY * 15}px)`;
            if (title) title.style.transform = `translateZ(25px) translate(${distX * 10}px, ${distY * 10}px)`;
            if (description) description.style.transform = `translateZ(20px) translate(${distX * 5}px, ${distY * 5}px)`;
        });
        
        // Reset transforms on mouse leave
        popup.addEventListener('mouseleave', function() {
            this.style.transform = '';
            
            const shapes = document.querySelectorAll('.sidebar-shape');
            shapes.forEach(shape => {
                shape.style.transform = '';
            });
            
            const category = document.querySelector('.popup-category');
            const title = document.querySelector('.popup-title');
            const description = document.querySelector('.popup-description');
            
            if (category) category.style.transform = 'translateZ(30px)';
            if (title) title.style.transform = 'translateZ(25px)';
            if (description) description.style.transform = 'translateZ(20px)';
        });
    }
    
    /**
     * Collect event items from the card
     */
    function collectEventItems(card) {
        let eventItems = [];
        const detailsPanel = card.querySelector('.event-details-panel');
        
        if (detailsPanel) {
            const items = detailsPanel.querySelectorAll('.event-item');
            items.forEach(item => {
                const titleEl = item.querySelector('h4');
                const dateEl = item.querySelector('.event-date span');
                
                if (titleEl && dateEl) {
                    eventItems.push({
                        title: titleEl.textContent,
                        date: dateEl.textContent
                    });
                }
            });
        }
        
        return eventItems;
    }
});
