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
            $(this).find('.tab-content').css('max-height', '500px');
            
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
        
        // Set up GSAP animations if available
        if (typeof gsap !== 'undefined') {
            try {
                // Animate section header
                gsap.from('.faq-section .section-header', {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
                
                // Animate category buttons
                gsap.from('.category-btn', {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(1.5)',
                    delay: 0.3
                });
                
                // Animate FAQ items with stagger
                gsap.from('.faq-item', {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                    delay: 0.5
                });
                
                // Animate CTA box
                const ctaElement = document.querySelector('.faq-cta');
                if (ctaElement) {
                    gsap.from('.faq-cta', {
                        scale: 0.9,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'elastic.out(1, 0.5)',
                        delay: 0.8
                    });
                }
                
                // Animate shapes
                const shapes = document.querySelectorAll('.shape');
                if (shapes.length) {
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
            } catch (animError) {
                console.warn('GSAP animation error:', animError);
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
                // Add a small buffer to ensure content is fully visible
                answer.style.maxHeight = (content.offsetHeight + 20) + 'px';
                
                // Scroll item into view if not fully visible (with animation)
                const itemRect = item.getBoundingClientRect();
                if (itemRect.bottom > window.innerHeight) {
                    const scrollOptions = {
                        top: window.pageYOffset + itemRect.top - 100,
                        behavior: 'smooth'
                    };
                    window.scrollTo(scrollOptions);
                }
            });
        });
        
        // Category Filter Functionality - Fixed version
        if (categoryBtns.length > 0) {
            // Ensure at least one button is active initially
            let hasActiveButton = false;
            categoryBtns.forEach(btn => {
                if (btn.classList.contains('active')) {
                    hasActiveButton = true;
                }
            });
            
            if (!hasActiveButton && categoryBtns[0]) {
                categoryBtns[0].classList.add('active');
            }
            
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    if (!category) return;
                    
                    // Update active state for buttons
                    categoryBtns.forEach(otherBtn => {
                        otherBtn.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // Filter items with animation
                    faqItems.forEach(item => {
                        if (!item) return;
                        
                        // Close all items first
                        item.classList.remove('active');
                        const itemAnswer = item.querySelector('.faq-answer');
                        if (itemAnswer) itemAnswer.style.maxHeight = '0px';
                        
                        const itemCategory = item.getAttribute('data-category');
                        
                        // Show/hide based on category
                        if (category === 'all' || itemCategory === category) {
                            item.style.display = '';
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(20px)';
                            
                            // Simple animation fallback if GSAP isn't available
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0)';
                                item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                            }, 50 * Array.from(faqItems).indexOf(item)); // Stagger effect
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Trigger initial filtering if a category button is already active
            const activeBtn = document.querySelector('.category-btn.active');
            if (activeBtn) {
                // Use setTimeout to ensure DOM is fully ready
                setTimeout(() => {
                    activeBtn.click();
                }, 100);
            }
        }
        
        // Add resize listener to correctly update maxHeight of opened answers
        window.addEventListener('resize', () => {
            const activeItems = document.querySelectorAll('.faq-item.active');
            activeItems.forEach(item => {
                const answer = item.querySelector('.faq-answer');
                const content = item.querySelector('.answer-content');
                if (answer && content) {
                    answer.style.maxHeight = (content.offsetHeight + 20) + 'px';
                }
            });
        });
        
    } catch (error) {
        console.error('Error in FAQ initialization:', error);
    }
});