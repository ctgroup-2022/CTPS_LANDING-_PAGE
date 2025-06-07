<section class="campus-gallery-section">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Our Campus</span>
            <h2 class="section-title">Experience Campus Life</h2>
            <p class="section-subtitle">Explore our beautiful campus through stunning imagery</p>
        </div>
        
        <div class="campus-image-grid">
            <div class="grid-item large" data-aos="fade-up" data-aos-delay="0">
                <!-- Critical first image with modern formats and fetchpriority -->
                <picture>
                    <source type="image/webp" srcset="assets/gallery/gallery2-small.webp 400w, assets/gallery/gallery2.webp 800w">
                    <img src="assets/gallery/gallery2-small.jpg" 
                         data-src="assets/gallery/gallery2.jpg" 
                         srcset="assets/gallery/gallery2-small.jpg 400w, assets/gallery/gallery2.jpg 800w"
                         sizes="(max-width: 768px) 100vw, 50vw"
                         width="800" height="600"
                         alt="Campus Main Building" 
                         fetchpriority="high"
                         class="optimized-image first-image">
                </picture>
                <div class="image-overlay">
                    <h3>Main Building</h3>
                    <p>The heart of our educational institution</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="100">
                <!-- Using native lazy loading as fallback with WebP format -->
                <picture>
                    <source type="image/webp" data-srcset="assets/gallery/gallery1-small.webp 300w, assets/gallery/gallery1.webp 600w">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                         data-src="assets/gallery/gallery1.jpg" 
                         data-srcset="assets/gallery/gallery1-small.jpg 300w, assets/gallery/gallery1.jpg 600w"
                         data-sizes="(max-width: 768px) 50vw, 25vw"
                         width="400" height="300"
                         alt="Science Laboratory" 
                         loading="lazy"
                         class="optimized-image">
                </picture>
                <div class="image-overlay">
                    <h3>Science Lab</h3>
                    <p>Equipped with modern technology</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="200">
                <picture>
                    <source type="image/webp" data-srcset="assets/gallery/gallery3-small.webp 300w, assets/gallery/gallery3.webp 600w">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                         data-src="assets/gallery/gallery3.jpg" 
                         data-srcset="assets/gallery/gallery3-small.jpg 300w, assets/gallery/gallery3.jpg 600w"
                         data-sizes="(max-width: 768px) 50vw, 25vw"
                         width="400" height="300"
                         loading="lazy"
                         alt="Sports Facilities" 
                         class="optimized-image">
                </picture>
                <div class="image-overlay">
                    <h3>Sports Field</h3>
                    <p>Where champions are made</p>
                </div>
            </div>
            <div class="grid-item vertical" data-aos="fade-up" data-aos-delay="300">
                <picture>
                    <source type="image/webp" data-srcset="assets/gallery/gallery4-small.webp 300w, assets/gallery/gallery4.webp 600w">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                         data-src="assets/gallery/gallery4.jpg" 
                         data-srcset="assets/gallery/gallery4-small.jpg 300w, assets/gallery/gallery4.jpg 600w"
                         data-sizes="(max-width: 768px) 50vw, 25vw"
                         width="400" height="600"
                         alt="Library" 
                         loading="lazy"
                         class="optimized-image">
                </picture>
                <div class="image-overlay">
                    <h3>Library</h3>
                    <p>A world of knowledge</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="400">
                <picture>
                    <source type="image/webp" data-srcset="assets/gallery/gallery5-small.webp 300w, assets/gallery/gallery5.webp 600w">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                         data-src="assets/gallery/gallery5.jpg" 
                         data-srcset="assets/gallery/gallery5-small.jpg 300w, assets/gallery/gallery5.jpg 600w"
                         data-sizes="(max-width: 768px) 50vw, 25vw"
                         width="400" height="300"
                         alt="Cultural Events" 
                         loading="lazy"
                         class="optimized-image">
                </picture>
                <div class="image-overlay">
                    <h3>Auditorium</h3>
                    <p>For performances and events</p>
                </div>
            </div>
            <div class="grid-item" data-aos="fade-up" data-aos-delay="500">
                <picture>
                    <source type="image/webp" data-srcset="assets/gallery/gallery7-small.webp 300w, assets/gallery/gallery7.webp 600w">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" 
                         data-src="assets/gallery/gallery7.jpg" 
                         data-srcset="assets/gallery/gallery7-small.jpg 300w, assets/gallery/gallery7.jpg 600w"
                         data-sizes="(max-width: 768px) 50vw, 25vw"
                         width="400" height="300"
                         alt="Student Activities" 
                         loading="lazy"
                         class="optimized-image">
                </picture>
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

    <!-- Move JavaScript to external file -->
    <script src="assets/js/image-lazy-loader.js" defer></script>
    
    <!-- Critical inline styles only, move the rest to the CSS file -->
    <style>
    /* Minimum styles needed for initial render */
    .optimized-image {
        opacity: 0;
        transition: opacity 0.3s ease;
        background-color: #f0f7ff;
    }
    .loaded { opacity: 1; }
    </style>
</section>
