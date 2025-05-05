document.addEventListener('DOMContentLoaded', function() {
    // Make sure jQuery is loaded before using it
    if (typeof jQuery !== 'undefined') {
        // Initial state - ensure content is visible for active tab
        $('.tab-item.active .tab-content').css('max-height', '500px');
        $('.tab-image-wrapper:not(:first-child)').hide();

        // Tab click event
        $('.tab-item').click(function() {
            const tabId = $(this).data('tab');
            
            // Close all other tabs
            $('.tab-item').removeClass('active');
            $('.tab-item .tab-content').css('max-height', '0');
            
            // Open the clicked tab
            $(this).addClass('active');
            $(this).find('.tab-content').css('max-height', '800px'); // Increased for better visibility
            
            // Handle images
            $('.tab-image-wrapper').hide();
            $('#' + tabId + '-image').fadeIn(300);
        });
    } else {
        console.error('jQuery is not loaded. FAQ functionality will not work.');
        
        // Fallback with vanilla JS if jQuery isn't available
        const tabs = document.querySelectorAll('.tab-item');
        const imageWrappers = document.querySelectorAll('.tab-image-wrapper');
        
        // Hide all but first image
        imageWrappers.forEach((wrapper, index) => {
            if (index !== 0) wrapper.style.display = 'none';
        });
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to current tab
                this.classList.add('active');
                
                // Hide all images
                imageWrappers.forEach(wrapper => {
                    wrapper.style.display = 'none';
                });
                
                // Show the selected image
                const selectedImage = document.getElementById(tabId + '-image');
                if (selectedImage) {
                    selectedImage.style.display = 'block';
                }
            });
        });
    }

    // Initialize FAQ functionality with error handling
    try {
        const faqItems = document.querySelectorAll('.faq-item');
        const categoryBtns = document.querySelectorAll('.category-btn');
        
        // Apply simple CSS animations
        setTimeout(() => {
            applySimpleAnimations();
        }, 100);
        
        function applySimpleAnimations() {
            // Get elements
            const sectionHeader = document.querySelector('.section-header');
            const categoriesContainer = document.querySelector('.faq-categories');
            const faqCta = document.querySelector('.faq-cta');
            const shapes = document.querySelectorAll('.shape');
            
            // Add fade-in to section header
            if (sectionHeader) {
                sectionHeader.classList.add('fade-in');
            }
            
            // Add animations to category buttons
            if (categoryBtns) {
                categoryBtns.forEach((btn, index) => {
                    btn.style.animationDelay = (0.1 * index) + 's';
                    btn.classList.add('fade-in');
                });
            }
            
            // Add animations to FAQ items
            if (faqItems) {
                faqItems.forEach((item, index) => {
                    item.style.animationDelay = (0.1 * index) + 's';
                    item.classList.add('fade-in');
                });
            }
            
            // Add animation to CTA
            if (faqCta) {
                faqCta.classList.add('fade-in');
            }
            
            // Add floating animation to shapes
            if (shapes) {
                shapes.forEach(shape => {
                    shape.classList.add('floating');
                });
            }
        }
        
        // Improve mobile scrolling for category buttons
        const categoryContainer = document.querySelector('.faq-categories');
        if (categoryContainer && window.innerWidth <= 768) {
            // Add visual indicator for scrollable categories
            const indicator = document.createElement('div');
            indicator.className = 'scroll-indicator';
            indicator.innerHTML = '<i class="fas fa-chevron-right"></i>';
            indicator.style.cssText = 'position:absolute; right:5px; top:50%; transform:translateY(-50%); color:#018CCF; animation:pulse 1.5s infinite; z-index:5; font-size:12px; opacity:0.7;';
            
            if (categoryContainer.scrollWidth > categoryContainer.clientWidth) {
                categoryContainer.style.position = 'relative';
                categoryContainer.appendChild(indicator);
                
                // Hide indicator after user has scrolled
                categoryContainer.addEventListener('scroll', function() {
                    if (this.scrollLeft > 30) {
                        indicator.style.opacity = '0';
                        setTimeout(() => {
                            indicator.remove();
                        }, 300);
                    }
                });
            }
        }
        
        // Adjust answer height calculation for mobile
        function updateAnswerHeight(item) {
            const answer = item.querySelector('.faq-answer');
            const content = item.querySelector('.answer-content');
            if (answer && content) {
                // Add extra space on mobile to prevent cut-off
                const extraSpace = window.innerWidth <= 576 ? 40 : 30;
                answer.style.maxHeight = (content.offsetHeight + extraSpace) + 'px';
            }
        }
        
        // FAQ Toggle Functionality - Fixed version
        faqItems.forEach(item => {
            if (!item) return;
            
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const content = item.querySelector('.answer-content');
            
            if (!question || !answer || !content) return;
            
            // Make sure question is clickable
            question.style.cursor = 'pointer';
            
            question.addEventListener('click', () => {
                // If this item is already open, close it
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    answer.style.maxHeight = '0px';
                    return;
                }
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) otherAnswer.style.maxHeight = '0px';
                    }
                });
                
                // Open this item
                item.classList.add('active');
                
                // Calculate the correct height for the answer
                updateAnswerHeight(item);
                
                // Scroll item into view if needed
                const itemRect = item.getBoundingClientRect();
                if (itemRect.bottom > window.innerHeight) {
                    window.scrollTo({
                        top: window.pageYOffset + itemRect.top - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Category Filter Functionality - Enhanced version
        if (categoryBtns.length > 0) {
            // Make sure there's always an active button
            let hasActiveButton = false;
            categoryBtns.forEach(btn => {
                if (btn.classList.contains('active')) {
                    hasActiveButton = true;
                }
            });
            
            if (!hasActiveButton && categoryBtns[0]) {
                categoryBtns[0].classList.add('active');
            }
            
            // Add click handlers to category buttons
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    if (!category) return;
                    
                    // Update active state for buttons
                    categoryBtns.forEach(otherBtn => {
                        otherBtn.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // Count visible items to ensure smooth animation
                    let visibleCount = 0;
                    
                    // Filter items with CSS transitions
                    faqItems.forEach(item => {
                        if (!item) return;
                        
                        // Close all items first
                        item.classList.remove('active');
                        const itemAnswer = item.querySelector('.faq-answer');
                        if (itemAnswer) itemAnswer.style.maxHeight = '0px';
                        
                        const itemCategory = item.getAttribute('data-category');
                        
                        // Show/hide based on category
                        if (category === 'all' || itemCategory === category) {
                            visibleCount++;
                            
                            // Reset display and set initial state for animation
                            item.style.display = '';
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(20px)';
                            
                            // Animate in with staggered delay
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                                item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                            }, 50 * visibleCount); // Stagger based on visible count
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Trigger click on the active button to initialize
            const activeBtn = document.querySelector('.category-btn.active');
            if (activeBtn) {
                setTimeout(() => activeBtn.click(), 300);
            }
        }
        
        // Add resize listener for responsive adjustments
        window.addEventListener('resize', () => {
            const activeItems = document.querySelectorAll('.faq-item.active');
            activeItems.forEach(updateAnswerHeight);
        });
        
        // Add these functions for mobile optimization
        function fixMobileResponsiveness() {
            if (window.innerWidth <= 576) {
                // Fix for heights of active FAQs
                document.querySelectorAll('.faq-item.active').forEach(item => {
                    const answer = item.querySelector('.faq-answer');
                    if (answer) {
                        answer.style.maxHeight = 'none';
                        answer.style.height = 'auto';
                        answer.style.overflow = 'visible';
                    }
                });
                
                // Fix images on mobile
                document.querySelectorAll('.faq-img img').forEach(img => {
                    img.style.width = '100%';
                    img.style.height = 'auto';
                    img.style.maxHeight = 'none';
                    img.style.objectFit = 'contain';
                    
                    // Force reload images when they load
                    img.addEventListener('load', function() {
                        const faqItem = this.closest('.faq-item');
                        if (faqItem && faqItem.classList.contains('active')) {
                            const answer = faqItem.querySelector('.faq-answer');
                            if (answer) {
                                setTimeout(() => {
                                    answer.style.maxHeight = 'none';
                                    answer.style.height = 'auto';
                                    answer.style.overflow = 'visible';
                                }, 10);
                            }
                        }
                    });
                });
                
                // Make category buttons scrollable
                const categoriesContainer = document.querySelector('.faq-categories');
                if (categoriesContainer) {
                    categoriesContainer.style.overflowX = 'auto';
                    categoriesContainer.style.webkitOverflowScrolling = 'touch';
                    
                    // Center active category button
                    const activeBtn = categoriesContainer.querySelector('.category-btn.active');
                    if (activeBtn) {
                        setTimeout(() => {
                            activeBtn.scrollIntoView({
                                behavior: 'smooth',
                                block: 'nearest',
                                inline: 'center'
                            });
                        }, 100);
                    }
                }
                
                // Modify text on tiny screens
                if (window.innerWidth <= 350) {
                    document.querySelectorAll('.category-btn').forEach(btn => {
                        if (btn.textContent.includes('Questions')) {
                            btn.textContent = 'All';
                        }
                    });
                }
            }
        }
        
        // Apply mobile fixes after page loads
        window.addEventListener('load', fixMobileResponsiveness);
        window.addEventListener('resize', fixMobileResponsiveness);
        window.addEventListener('orientationchange', () => {
            setTimeout(fixMobileResponsiveness, 300);
        });
        
        // Enhance FAQ question clicks for mobile
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (!question) return;
            
            // Enhance the click behavior
            const originalClick = question.onclick;
            question.onclick = function(e) {
                if (originalClick) {
                    originalClick.call(this, e);
                }
                
                if (window.innerWidth <= 576) {
                    // Force answer to display correctly after animation
                    setTimeout(() => {
                        if (item.classList.contains('active')) {
                            const answer = item.querySelector('.faq-answer');
                            if (answer) {
                                answer.style.maxHeight = 'none';
                                answer.style.height = 'auto';
                                answer.style.overflow = 'visible';
                            }
                        }
                    }, 300);
                }
            };
        });
        
    } catch (error) {
        console.error('Error in FAQ initialization:', error);
        // Provide fallback for critical functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                this.closest('.faq-item')?.classList.toggle('active');
            });
        });
    }
});