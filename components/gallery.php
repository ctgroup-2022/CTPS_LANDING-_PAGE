<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800;900&family=Playfair+Display:wght@700;800;900&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
<!-- INNOVATIVE GALLERY DESIGN - Hero section removed -->
<section id="gallery" class="pg-gallery-section">
    <div class="gallery-glow-bg"></div>
    
    <!-- Added centered section heading for features -->
    <div class="section-header features-header">
        <div class="section-title-wrap">
            <h2 class="section-title">Our Facilities</h2>
            <div class="title-underline"></div>
        </div>
        <p>Discover what makes our institution exceptional</p>
    </div>
    
    <!-- Feature blocks with 3D icons -->
    <div class="feature-blocks">
        <div class="feature-block">
            <div class="feature-icon icon-3d">
                <div class="icon-3d-wrapper">
                    <div class="icon-3d-front">
                        <img src="assets/icons/infra.png" alt="Infrastructure">
                    </div>
                    <div class="icon-3d-back">
                        <img src="assets/icons/infra.png" alt="Infrastructure">
                    </div>
                    <div class="icon-3d-left"></div>
                    <div class="icon-3d-right"></div>
                    <div class="icon-3d-top"></div>
                    <div class="icon-3d-bottom"></div>
                </div>
            </div>
            <h3>Infrastructure</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
        </div>
        
        <div class="feature-block">
            <div class="feature-icon icon-3d">
                <div class="icon-3d-wrapper">
                    <div class="icon-3d-front">
                        <img src="assets/icons/apple.png" alt="Certified Tutors">
                    </div>
                    <div class="icon-3d-back">
                        <img src="assets/icons/apple.png" alt="Certified Tutors">
                    </div>
                    <div class="icon-3d-left"></div>
                    <div class="icon-3d-right"></div>
                    <div class="icon-3d-top"></div>
                    <div class="icon-3d-bottom"></div>
                </div>
            </div>
            <h3>Certified Tutors</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
        </div>
        
        <div class="feature-block">
            <div class="feature-icon icon-3d">
                <div class="icon-3d-wrapper">
                    <div class="icon-3d-front">
                        <img src="assets/icons/children.png" alt="Small Class Size">
                    </div>
                    <div class="icon-3d-back">
                        <img src="assets/icons/children.png" alt="Small Class Size">
                    </div>
                    <div class="icon-3d-left"></div>
                    <div class="icon-3d-right"></div>
                    <div class="icon-3d-top"></div>
                    <div class="icon-3d-bottom"></div>
                </div>
            </div>
            <h3>Small Class Size</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
        </div>
    </div>

    <div class="feature-blocks second-row">
        <div class="feature-block">
            <div class="feature-icon icon-3d">
                <div class="icon-3d-wrapper">
                    <div class="icon-3d-front">
                        <img src="assets/icons/conference.png" alt="Infant Care">
                    </div>
                    <div class="icon-3d-back">
                        <img src="assets/icons/conference.png" alt="Infant Care">
                    </div>
                    <div class="icon-3d-left"></div>
                    <div class="icon-3d-right"></div>
                    <div class="icon-3d-top"></div>
                    <div class="icon-3d-bottom"></div>
                </div>
            </div>
            <h3>Infant Care</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
        </div>
        
        <div class="feature-block">
            <div class="feature-icon icon-3d">
                <div class="icon-3d-wrapper">
                    <div class="icon-3d-front">
                        <img src="assets/icons/bus.png" alt="Safety First">
                    </div>
                    <div class="icon-3d-back">
                        <img src="assets/icons/bus.png" alt="Safety First">
                    </div>
                    <div class="icon-3d-left"></div>
                    <div class="icon-3d-right"></div>
                    <div class="icon-3d-top"></div>
                    <div class="icon-3d-bottom"></div>
                </div>
            </div>
            <h3>Safety First</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
        </div>
        
        <div class="feature-block">
            <div class="feature-icon icon-3d">
                <div class="icon-3d-wrapper">
                    <div class="icon-3d-front">
                        <img src="assets/icons/dancing.png" alt="Activities">
                    </div>
                    <div class="icon-3d-back">
                        <img src="assets/icons/dancing.png" alt="Activities">
                    </div>
                    <div class="icon-3d-left"></div>
                    <div class="icon-3d-right"></div>
                    <div class="icon-3d-top"></div>
                    <div class="icon-3d-bottom"></div>
                </div>
            </div>
            <h3>Activities</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.</p>
        </div>
    </div>

    <!-- Bento Grid Gallery -->
    <div class="gallery-container">
        <div class="section-header">
            <div class="section-title-wrap">
                <h2 class="section-title">Our Gallery</h2>
                <div class="title-underline"></div>
            </div>
            <p>Explore our world-class facilities and engaging activities</p>
        </div>
        
        <div class="category-filter">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="campus">Campus</button>
            <button class="filter-btn" data-filter="events">Events</button>
            <button class="filter-btn" data-filter="learning">Learning</button>
            <button class="filter-btn" data-filter="projects">Projects</button>
        </div>
        
        <!-- Bento Grid Layout -->
        <div class="bento-grid-container">
            <div class="bento-grid">
                <!-- Featured Item (Large) -->
                <div class="bento-item featured" data-category="campus">
                    <div class="bento-card">
                        <img src="assets/gallery/gallery1.jpg" alt="Main Campus Building" loading="lazy">
                        <div class="overlay">
                            <span class="item-category">Campus</span>
                            <h3>Main Building</h3>
                            <p>Our state-of-the-art main building provides students with modern learning spaces.</p>
                            <button class="view-details" data-image="assets/gallery/gallery1.jpg">View Larger</button>
                        </div>
                    </div>
                </div>
                
                <!-- Vertical Item -->
                <div class="bento-item vertical" data-category="events">
                    <div class="bento-card">
                        <img src="assets/gallery/gallery2.jpg" alt="Annual Showcase" loading="lazy">
                        <div class="overlay">
                            <span class="item-category">Events</span>
                            <h3>Annual Showcase</h3>
                            <p>Students present their year-long projects during our showcase event.</p>
                            <button class="view-details" data-image="assets/gallery/gallery2.jpg">View Larger</button>
                        </div>
                    </div>
                </div>
                
                <!-- Horizontal Item -->
                <div class="bento-item horizontal" data-category="learning">
                    <div class="bento-card">
                        <img src="assets/gallery/gallery3.jpg" alt="Interactive Learning" loading="lazy">
                        <div class="overlay">
                            <span class="item-category">Learning</span>
                            <h3>Interactive Classes</h3>
                            <p>Our innovative teaching methods encourage active participation and collaborative learning.</p>
                            <button class="view-details" data-image="assets/gallery/gallery3.jpg">View Larger</button>
                        </div>
                    </div>
                </div>
                
                <!-- Square Item 1 -->
                <div class="bento-item square" data-category="projects">
                    <div class="bento-card">
                        <img src="assets/gallery/gallery4.jpg" alt="Innovation Lab" loading="lazy">
                        <div class="overlay">
                            <span class="item-category">Projects</span>
                            <h3>Innovation Lab</h3>
                            <p>Students work on cutting-edge projects in our fully equipped laboratories.</p>
                            <button class="view-details" data-image="assets/gallery/gallery4.jpg">View Larger</button>
                        </div>
                    </div>
                </div>
                
                <!-- Square Item 2 -->
                <div class="bento-item square" data-category="campus">
                    <div class="bento-card">
                        <img src="assets/gallery/gallery5.jpg" alt="Recreation Area" loading="lazy">
                        <div class="overlay">
                            <span class="item-category">Campus</span>
                            <h3>Recreation Area</h3>
                            <p>Well-designed spaces for students to relax and engage in activities.</p>
                            <button class="view-details" data-image="assets/gallery/gallery5.jpg">View Larger</button>
                        </div>
                    </div>
                </div>
                
                <!-- Vertical Item 2 -->
                <div class="bento-item vertical" data-category="events">
                    <div class="bento-card">
                        <img src="assets/gallery/gallery7.jpg" alt="Cultural Festival" loading="lazy">
                        <div class="overlay">
                            <span class="item-category">Events</span>
                            <h3>Cultural Festival</h3>
                            <p>Annual celebration of diversity through performances and cultural exchanges.</p>
                            <button class="view-details" data-image="assets/gallery/gallery7.jpg">View Larger</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script src="assets/js/gallery.js"></script>
</body>
</html>