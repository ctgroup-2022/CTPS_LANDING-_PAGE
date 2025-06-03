<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
    <!-- Preload critical fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<section id="gallery" class="facilities-gallery">
    <div class="container">
        <div class="section-header text-center">
            <h2 class="section-title">Our Gallery</h2>
            <div class="title-underline"></div>
            <p class="section-subtitle">Explore our world-class facilities and engaging activities</p>
        </div>
        
        <div class="facilities-grid">
            <!-- Large Card -->
            <div class="facility-card large" data-title="Hands-On Robotics Learning" data-description="In this engaging classroom setting, students dive into the world of robotics through practical, real-world tasks. The image captures a young learner focused intently on assembling and programming a robot, highlighting the school's commitment to experiential learning. By providing access to tools and technology, students are encouraged to innovate, collaborate, and develop critical thinking skills essential for the future.">
                <div class="facility-image">
                    <!-- First visible image loads normally -->
                    <img src="assets/gallery/gallery10.jpg" alt="Hands-On Robotics Learning" loading="lazy" width="800" height="420" class="lazy-image">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>HANDS-ON ROBOTICS LEARNING</h3>
                    <p>In this engaging classroom setting, students dive into the world of robotics through practical, real-world tasks.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
            
            <!-- Small Cards -->
            <div class="facility-card small" data-title="Annual Showcase" data-description="Students present their year-long projects during our showcase event, demonstrating their creativity, innovation, and academic growth. This event brings together parents, teachers, and industry professionals to celebrate student achievements.">
                <div class="facility-image">
                    <!-- Use data-src for deferred loading -->
                    <img data-src="assets/gallery/gallery2.jpg" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 420' %3E%3C/svg%3E" alt="Annual Showcase" loading="lazy" width="400" height="420" class="lazy-image">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>ANNUAL SHOWCASE</h3>
                    <p>Students present their year-long projects during our showcase event.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
            
            <div class="facility-card small" data-title="Celebrating Culture Through Young Performers" data-description="Dressed in vibrant traditional attire, the young children take the stage with confidence and charm, performing a colorful cultural dance. The beautifully decorated backdrop and coordinated costumes bring regional heritage to life, creating a joyful and educational experience for both performers and audience. Events like these nurture confidence, teamwork, and cultural pride among students from an early age.">
                <div class="facility-image">
                    <img src="assets/gallery/gallery4.jpg" alt="Celebrating Culture Through Young Performers" loading="lazy" width="400" height="380">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>CELEBRATING CULTURE</h3>
                    <p>Dressed in vibrant traditional attire, the young children take the stage with confidence and charm, performing a colorful cultural dance.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
            
            <!-- Large Card -->
            <div class="facility-card large" data-title="Celebrating Culture Through Young Performers" data-description="Dressed in vibrant traditional attire, the young children take the stage with confidence and charm, performing a colorful cultural dance. The beautifully decorated backdrop and coordinated costumes bring regional heritage to life, creating a joyful and educational experience for both performers and audience. Events like these nurture confidence, teamwork, and cultural pride among students from an early age.">
                <div class="facility-image">
                    <img src="assets/gallery/gallery9.jpg" alt="Celebrating Culture Through Young Performers" loading="lazy" width="800" height="380">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>CELEBRATING CULTURE</h3>
                    <p>Dressed in vibrant traditional attire, the young children take the stage with confidence and charm, performing a colorful cultural dance.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
            
            <!-- Extra Large Cards (Last Row) -->
            <div class="facility-card extra-large" data-title="Interactive Science Learning in the Laboratory" data-description="In a well-equipped science lab, students eagerly observe a hands-on experiment conducted by their teacher. Such interactive sessions not only deepen conceptual understanding but also ignite curiosity and critical thinking. The practical approach helps students connect textbook theories with real-world applications, making science both fun and meaningful.">
                <div class="facility-image">
                    <img src="assets/gallery/gallery6.jpg" alt="Interactive Science Learning in the Laboratory" loading="lazy" width="650" height="450">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>INTERACTIVE SCIENCE LEARNING</h3>
                    <p>In a well-equipped science lab, students eagerly observe a hands-on experiment conducted by their teacher.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
            
            <div class="facility-card extra-large" data-title="Skating Into Fitness and Fun" data-description="With safety gear on and excitement in their eyes, the young students enthusiastically participate in a skating activity under the guidance of their coach. This engaging session not only promotes physical fitness but also helps in improving balance, coordination, and confidence. Such activities ensure that learning goes beyond the classroom, making education a joyful and holistic experience.">
                <div class="facility-image">
                    <img src="assets/gallery/gallery8.png" alt="Skating Into Fitness and Fun" loading="lazy" width="650" height="450">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>SKATING INTO FITNESS AND FUN</h3>
                    <p>With safety gear on and excitement in their eyes, the young students enthusiastically participate in a skating activity under the guidance of their coach.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Modal Popup (loaded only when needed) -->
    <div class="facility-modal">
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <div class="modal-image-container">
                <img src="" alt="" class="modal-image">
            </div>
            <div class="modal-details">
                <h2 class="modal-title"></h2>
                <p class="modal-description"></p>
            </div>
        </div>
    </div>
</section>

<style>
    .facilities-gallery {
        padding: 80px 0;
        background: linear-gradient(135deg, #f0f7ff 0%, #e8f4ff 100%);
        position: relative;
        overflow: hidden;
    }
    
    /* Simplified decorative elements */
    .facilities-gallery::before,
    .facilities-gallery::after,
    .facilities-gallery .container::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        z-index: 0;
    }
    
    .facilities-gallery::before {
        top: -150px;
        right: -150px;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(74, 144, 226, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    }
    
    .facilities-gallery::after {
        bottom: -150px;
        left: -150px;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(0, 168, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
    }
    
    .container {
        position: relative;
        z-index: 1;
        max-width: 1320px;
        margin: 0 auto;
        padding: 0 30px;
    }
    
    /* Optimized grid layout */
    .facilities-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 30px;
        position: relative;
        z-index: 2;
    }
    
    /* Card base styles */
    .facility-card {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 15px 35px rgba(0, 86, 179, 0.15);
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                    box-shadow 0.4s ease;
        cursor: pointer;
        min-height: 300px;
    }
    
    /* Grid positioning */
    .facility-card:nth-child(1) { grid-column: span 8; height: 420px; }
    .facility-card:nth-child(2) { grid-column: span 4; height: 420px; }
    .facility-card:nth-child(3) { grid-column: span 4; height: 380px; }
    .facility-card:nth-child(4) { grid-column: span 8; height: 380px; }
    .facility-card:nth-child(5) { grid-column: span 6; height: 450px; }
    .facility-card:nth-child(6) { grid-column: span 6; height: 450px; }
    
    .facility-card:hover {
        transform: translateY(-15px);
        box-shadow: 0 20px 40px rgba(0, 86, 179, 0.25);
    }
    
    .facility-image {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    
    .facility-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
        will-change: transform;
    }
    
    .facility-card:hover .facility-image img {
        transform: scale(1.1);
    }
    
    .facility-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
        transition: background 0.4s ease;
    }
    
    .facility-card:hover .facility-overlay {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
    }
    
    .facility-content {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 30px;
        color: white;
        z-index: 1;
    }
    
    /* Section header */
    .section-header {
        text-align: center;
        margin: 0 auto 80px;
        max-width: 900px;
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .section-title {
        font-size: 3.8rem;
        color: #0056b3;
        margin-bottom: 20px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 0 2px 10px rgba(0, 86, 179, 0.15);
    }
    
    .title-underline {
        height: 5px;
        width: 180px;
        background: linear-gradient(90deg, #0056b3, #00a8ff);
        margin: 0 auto 25px;
        border-radius: 3px;
        box-shadow: 0 3px 6px rgba(0, 86, 179, 0.15);
    }
    
    .section-subtitle {
        max-width: 700px;
        margin: 0 auto;
        color: #666;
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 1.6;
    }
    
    /* Modal Styles */
    .facility-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 999;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    
    .facility-modal.active {
        display: flex;
        opacity: 1;
    }
    
    .modal-content {
        background: white;
        width: 80%;
        max-width: 900px;
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        max-height: 85vh;
        transform: translateY(50px);
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    }
    
    .facility-modal.active .modal-content {
        transform: translateY(0);
    }
    
    .modal-image-container {
        width: 100%;
        height: 400px;
        overflow: hidden;
    }
    
    .modal-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .modal-details {
        padding: 30px;
    }
    
    .modal-title {
        color: #0056b3;
        font-size: 2.2rem;
        margin-bottom: 20px;
        position: relative;
    }
    
    .modal-title:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #0056b3, #00a8ff);
        border-radius: 2px;
    }
    
    .modal-description {
        color: #666;
        font-size: 1.1rem;
        line-height: 1.7;
    }
    
    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 2rem;
        color: white;
        cursor: pointer;
        width: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 10;
    }
    
    /* Enhanced lazy loading styles */
    .lazy-image {
        transition: opacity 0.3s ease;
        opacity: 0;
    }
    
    .lazy-image.loaded {
        opacity: 1;
    }
    
    /* Placeholder pulse animation for lazy images */
    @keyframes placeholderPulse {
        0% { background-color: rgba(0, 86, 179, 0.1); }
        50% { background-color: rgba(0, 86, 179, 0.05); }
        100% { background-color: rgba(0, 86, 179, 0.1); }
    }
    
    .facility-image img[data-src] {
        animation: placeholderPulse 1.5s ease-in-out infinite;
        background-color: rgba(0, 86, 179, 0.1);
        min-height: 100px;
    }
    
    /* Responsive styles */
    @media (max-width: 992px) {
        .facilities-grid {
            grid-template-columns: repeat(4, 1fr);
        }
        
        .facility-card:nth-child(1) { grid-column: 1 / span 4; }
        .facility-card:nth-child(2) { grid-column: 1 / span 2; }
        .facility-card:nth-child(3) { grid-column: 3 / span 2; }
        .facility-card:nth-child(4) { grid-column: 1 / span 4; }
        .facility-card:nth-child(5) { grid-column: 1 / span 2; }
        .facility-card:nth-child(6) { grid-column: 3 / span 2; }
    }
    
    @media (max-width: 768px) {
        .section-title {
            font-size: 2.8rem;
        }
        
        .facilities-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .facility-card:nth-child(1) { grid-column: 1 / span 2; }
        .facility-card:nth-child(2) { grid-column: 1 / span 1; }
        .facility-card:nth-child(3) { grid-column: 2 / span 1; }
        .facility-card:nth-child(4) { grid-column: 1 / span 2; }
        .facility-card:nth-child(5) { grid-column: 1 / span 2; }
        .facility-card:nth-child(6) { grid-column: 1 / span 2; }
        
        .facility-card.large, 
        .facility-card.extra-large {
            height: 350px;
        }
        
        .facility-card.small {
            height: 250px;
        }
        
        .modal-image-container {
            height: 300px;
        }
    }
    
    @media (max-width: 576px) {
        .section-title {
            font-size: 2.2rem;
        }
        
        .facilities-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }
        
        .facility-card:nth-child(n) {
            grid-column: 1;
            height: 280px;
        }
        
        .modal-image-container {
            height: 220px;
        }
    }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const facilityCards = document.querySelectorAll('.facility-card');
    const viewButtons = document.querySelectorAll('.view-btn');
    const modal = document.querySelector('.facility-modal');
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const modalClose = document.querySelector('.modal-close');
    
    // Use event delegation for better performance
    document.querySelector('.facilities-grid').addEventListener('click', function(e) {
        // Handle view button clicks
        if (e.target.closest('.view-btn')) {
            e.stopPropagation();
            
            const card = e.target.closest('.facility-card');
            const image = card.querySelector('.facility-image img').getAttribute('src');
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');
            
            // Create a loading state for modal image
            modalImage.classList.add('loading');
            modalImage.style.filter = 'blur(10px)';
            
            // Set initial data
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Preload the high-res image before showing
            const tempImg = new Image();
            tempImg.onload = function() {
                modalImage.setAttribute('src', image);
                modalImage.setAttribute('alt', title);
                setTimeout(() => {
                    modalImage.classList.remove('loading');
                    modalImage.style.filter = '';
                }, 100);
            };
            tempImg.onerror = function() {
                modalImage.setAttribute('src', 'assets/placeholders/error-image.jpg');
                modalImage.setAttribute('alt', 'Image failed to load');
                modalImage.classList.remove('loading');
                modalImage.style.filter = '';
            };
            tempImg.src = image;
        }
        // Handle card clicks
        else if (e.target.closest('.facility-card') && !e.target.closest('.view-btn')) {
            facilityCards.forEach(c => c.classList.remove('selected'));
            e.target.closest('.facility-card').classList.add('selected');
        }
    });
    
    // Close modal functions
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Clear modal image after transition
        setTimeout(() => {
            modalImage.setAttribute('src', '');
        }, 500);
    }
    
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
    
    // Optimized lazy loading implementation
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    if (img.dataset.src) {
                        // Load full image
                        const fullImg = new Image();
                        fullImg.onload = function() {
                            img.src = img.dataset.src;
                            img.classList.add('loaded');
                            img.removeAttribute('data-src');
                        };
                        fullImg.onerror = function() {
                            img.src = 'assets/placeholders/error-image.jpg';
                            img.classList.add('error');
                        };
                        fullImg.src = img.dataset.src;
                    } else {
                        img.classList.add('loaded');
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '100px 0px',
            threshold: 0.01
        });
        
        // Observe all lazy images
        document.querySelectorAll('.lazy-image, .facility-image img').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
});
</script>
</body>
</html>