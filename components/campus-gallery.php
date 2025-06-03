<section class="campus-gallery-section">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Our Campus</span>
            <h2 class="section-title">Experience Campus Life</h2>
            <p class="section-subtitle">Explore our beautiful campus through stunning imagery</p>
        </div>
        
        <div class="campus-image-grid">
            <div class="grid-item large" data-aos="fade-up" data-aos-delay="0">
                <!-- Optimized first image - loaded immediately -->
                <img src="assets/gallery/gallery2-small.jpg" 
                     data-src="assets/gallery/gallery2.jpg" 
                     srcset="assets/gallery/gallery2-small.jpg 400w, assets/gallery/gallery2.jpg 800w"
                     sizes="(max-width: 768px) 100vw, 50vw"
                     width="800" height="600"
                     alt="Campus Main Building" 
                     class="optimized-image first-image">
                <div class="image-overlay">
                    <h3>Main Building</h3>
                    <p>The heart of our educational institution</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="100">
                <!-- Other images use tiny placeholders and get lazy loaded -->
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                     data-src="assets/gallery/gallery1.jpg" 
                     data-srcset="assets/gallery/gallery1-small.jpg 300w, assets/gallery/gallery1.jpg 600w"
                     data-sizes="(max-width: 768px) 50vw, 25vw"
                     width="400" height="300"
                     alt="Science Laboratory" 
                     class="optimized-image">
                <div class="image-overlay">
                    <h3>Science Lab</h3>
                    <p>Equipped with modern technology</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="200">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                     data-src="assets/gallery/gallery3.jpg" 
                     data-srcset="assets/gallery/gallery3-small.jpg 300w, assets/gallery/gallery3.jpg 600w"
                     data-sizes="(max-width: 768px) 50vw, 25vw"
                     width="400" height="300"
                     alt="Sports Facilities" 
                     class="optimized-image">
                <div class="image-overlay">
                    <h3>Sports Field</h3>
                    <p>Where champions are made</p>
                </div>
            </div>
            <div class="grid-item vertical" data-aos="fade-up" data-aos-delay="300">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                     data-src="assets/gallery/gallery4.jpg" 
                     data-srcset="assets/gallery/gallery4-small.jpg 300w, assets/gallery/gallery4.jpg 600w"
                     data-sizes="(max-width: 768px) 50vw, 25vw"
                     width="400" height="600"
                     alt="Library" 
                     class="optimized-image">
                <div class="image-overlay">
                    <h3>Library</h3>
                    <p>A world of knowledge</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="400">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                     data-src="assets/gallery/gallery5.jpg" 
                     data-srcset="assets/gallery/gallery5-small.jpg 300w, assets/gallery/gallery5.jpg 600w"
                     data-sizes="(max-width: 768px) 50vw, 25vw"
                     width="400" height="300"
                     alt="Cultural Events" 
                     class="optimized-image">
                <div class="image-overlay">
                    <h3>Auditorium</h3>
                    <p>For performances and events</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="500">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                     data-src="assets/gallery/gallery7.jpg" 
                     data-srcset="assets/gallery/gallery7-small.jpg 300w, assets/gallery/gallery7.jpg 600w"
                     data-sizes="(max-width: 768px) 50vw, 25vw"
                     width="400" height="300"
                     alt="Student Activities" 
                     class="optimized-image">
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

    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Optimized image loading with IntersectionObserver
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // Apply srcset and sizes if available
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                            img.sizes = img.dataset.sizes || '';
                        }
                        
                        // Apply src after a tiny delay to prioritize srcset loading
                        if (img.dataset.src) {
                            // Add loading class
                            img.classList.add('loading');
                            
                            setTimeout(() => {
                                img.src = img.dataset.src;
                                
                                // Listen for image load
                                img.onload = function() {
                                    img.classList.remove('loading');
                                    img.classList.add('loaded');
                                };
                                
                                // Handle errors
                                img.onerror = function() {
                                    img.classList.remove('loading');
                                    img.classList.add('error');
                                    img.src = 'assets/placeholders/error-image.jpg';
                                };
                            }, 10);
                        }
                        
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });
            
            // Observe all images except the first one (which loads immediately)
            document.querySelectorAll('.optimized-image:not(.first-image)').forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            document.querySelectorAll('.optimized-image').forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                        img.sizes = img.dataset.sizes || '';
                    }
                }
                
                img.classList.add('loaded');
            });
        }
    });
    </script>
    
    <style>
    /* Image optimization styles */
    .optimized-image {
        opacity: 0;
        transition: opacity 0.5s ease;
        background-color: #f0f7ff; /* Light background color while loading */
    }
    
    /* Progressive loading animation */
    .loading {
        opacity: 0.5;
        animation: pulse 1.5s infinite alternate;
    }
    
    .loaded {
        opacity: 1;
    }
    
    .error {
        opacity: 0.7;
        filter: grayscale(100%);
    }
    
    @keyframes pulse {
        0% { opacity: 0.3; }
        100% { opacity: 0.6; }
    }
    </style>
</section>
