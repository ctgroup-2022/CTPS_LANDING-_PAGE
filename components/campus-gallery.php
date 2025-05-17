<section class="campus-gallery-section">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Our Campus</span>
            <h2 class="section-title">Experience Campus Life</h2>
            <p class="section-subtitle">Explore our beautiful campus through stunning imagery</p>
        </div>
        
        <div class="campus-image-grid">
            <div class="grid-item large" data-aos="fade-up" data-aos-delay="0">
                <img src="assets/gallery/gallery2.jpg" alt="Campus Main Building" loading="lazy">
                <div class="image-overlay">
                    <h3>Main Building</h3>
                    <p>The heart of our educational institution</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/gallery/gallery1.jpg" alt="Science Laboratory" loading="lazy">
                <div class="image-overlay">
                    <h3>Science Lab</h3>
                    <p>Equipped with modern technology</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/gallery/gallery3.jpg" alt="Sports Facilities" loading="lazy">
                <div class="image-overlay">
                    <h3>Sports Field</h3>
                    <p>Where champions are made</p>
                </div>
            </div>
            <div class="grid-item vertical" data-aos="fade-up" data-aos-delay="300">
                <img src="assets/gallery/gallery4.jpg" alt="Library" loading="lazy">
                <div class="image-overlay">
                    <h3>Library</h3>
                    <p>A world of knowledge</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="400">
                <img src="assets/gallery/gallery5.jpg" alt="Cultural Events" loading="lazy">
                <div class="image-overlay">
                    <h3>Auditorium</h3>
                    <p>For performances and events</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="500">
                <img src="assets/gallery/gallery7.jpg" alt="Student Activities" loading="lazy">
                <div class="image-overlay">
                    <h3>Student Hub</h3>
                    <p>Center for activities and gatherings</p>
                </div>
            </div>
        </div>
        
        <div class="view-more-container">
            <a href="gallery.php" class="btn-view-more">
                <span>View Full Gallery</span>
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>

    <!-- Add enhanced lazy loading script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Check if IntersectionObserver is supported
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            
                            // Add loading class for animation
                            img.classList.add('image-loading');
                            
                            // Create high-res version
                            const highResImage = new Image();
                            highResImage.src = img.src;
                            
                            // When high-res image loads, replace and animate in
                            highResImage.onload = function() {
                                img.src = highResImage.src;
                                img.classList.remove('image-loading');
                                img.classList.add('image-loaded');
                            };
                            
                            // Handle image loading errors
                            highResImage.onerror = function() {
                                img.classList.remove('image-loading');
                                img.classList.add('image-error');
                            };
                            
                            // Stop observing after loading
                            observer.unobserve(img);
                        }
                    });
                }, {
                    rootMargin: '50px 0px', // Start loading when within 50px
                    threshold: 0.1 // 10% visibility triggers loading
                });
                
                // Observer all campus gallery images
                document.querySelectorAll('.campus-image-grid img').forEach(img => {
                    // Add placeholder blur effect
                    img.style.filter = 'blur(5px)';
                    img.style.transition = 'filter 0.5s ease-out';
                    
                    // Start observing
                    imageObserver.observe(img);
                });
            }
            
            // Optimize AOS animations to trigger only when in viewport
            if (typeof AOS !== 'undefined') {
                // Disable AOS on mobile for better performance
                if (window.innerWidth < 768) {
                    AOS.init({
                        disable: true
                    });
                } else {
                    AOS.init({
                        once: true, // Only animate once
                        offset: 100, // Trigger earlier
                        delay: 0 // Reduce delay for better performance
                    });
                }
            }
        });
    </script>
    
    <style>
        /* Enhanced lazy loading styles */
        .campus-image-grid img {
            will-change: filter; /* Hint to browser for optimization */
            transform: translateZ(0); /* Force GPU acceleration */
        }
        
        .image-loading {
            opacity: 0.7;
        }
        
        .image-loaded {
            filter: blur(0) !important;
            opacity: 1;
        }
        
        .image-error {
            opacity: 0.5;
            filter: grayscale(100%) !important;
        }
        
        /* Optimize grid for better performance */
        .campus-image-grid {
            contain: layout style; /* Improve rendering performance */
        }
        
        /* Optimize animation performance */
        [data-aos] {
            transform: translateZ(0); /* Force GPU acceleration */
            backface-visibility: hidden; /* Reduce paints */
        }
    </style>
</section>
