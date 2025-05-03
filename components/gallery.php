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
<section id="gallery" class="facilities-gallery">
    <div class="container">
        <div class="section-header text-center">
            <h2 class="section-title">Our Gallery</h2>
            <div class="title-underline"></div>
            <p class="section-subtitle">Explore our world-class facilities and engaging activities</p>
        </div>
        
        <div class="facilities-grid">
            <!-- Large Card -->
            <div class="facility-card large" data-title="Main Building" data-description="Our state-of-the-art main building provides students with modern learning spaces designed to inspire creativity and academic excellence. The architecture blends contemporary design with functional spaces that support various learning styles.">
                <div class="facility-image">
                    <img src="assets/gallery/gallery1.jpg" alt="Main Building" loading="lazy">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>MAIN BUILDING</h3>
                    <p>Our state-of-the-art main building provides students with modern learning spaces.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
            
            <!-- Small Cards -->
            <div class="facility-card small" data-title="Annual Showcase" data-description="Students present their year-long projects during our showcase event, demonstrating their creativity, innovation, and academic growth. This event brings together parents, teachers, and industry professionals to celebrate student achievements.">
                <div class="facility-image">
                    <img src="assets/gallery/gallery2.jpg" alt="Annual Showcase" loading="lazy">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>ANNUAL SHOWCASE</h3>
                    <p>Students present their year-long projects during our showcase event.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
            
            <div class="facility-card small" data-title="Interactive Classes" data-description="Our innovative teaching methods encourage active participation and collaborative learning. Interactive classes ensure that students are engaged, motivated, and developing critical thinking skills through hands-on experiences.">
                <div class="facility-image">
                    <img src="assets/gallery/gallery3.jpg" alt="Interactive Classes" loading="lazy">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>INTERACTIVE CLASSES</h3>
                    <p>Our innovative teaching methods encourage active participation and collaborative learning.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
            
            <!-- Large Card -->
            <div class="facility-card large" data-title="Innovation Lab" data-description="Students work on cutting-edge projects in our fully equipped laboratories designed to foster innovation and experimentation. Our labs feature the latest technology and resources needed for advanced research and practical learning experiences.">
                <div class="facility-image">
                    <img src="assets/gallery/gallery4.jpg" alt="Innovation Lab" loading="lazy">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>INNOVATION LAB</h3>
                    <p>Students work on cutting-edge projects in our fully equipped laboratories.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
            
            <!-- Extra Large Cards (Last Row) -->
            <div class="facility-card extra-large" data-title="Recreation Area" data-description="Well-designed spaces for students to relax and engage in activities that promote mental well-being and social interaction. Our recreation areas include comfortable seating, game zones, and serene environments that help students unwind between classes.">
                <div class="facility-image">
                    <img src="assets/gallery/gallery5.jpg" alt="Recreation Area" loading="lazy">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>RECREATION AREA</h3>
                    <p>Well-designed spaces for students to relax and engage in activities that promote mental well-being and social interaction.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
            
            <div class="facility-card extra-large" data-title="Cultural Festival" data-description="Annual celebration of diversity through performances and cultural exchanges that showcase our global community. The festival features music, dance, art, cuisine, and traditions from around the world, promoting cultural understanding and appreciation.">
                <div class="facility-image">
                    <img src="assets/gallery/gallery7.jpg" alt="Cultural Festival" loading="lazy">
                    <div class="facility-overlay"></div>
                </div>
                <div class="facility-content">
                    <h3>CULTURAL FESTIVAL</h3>
                    <p>Annual celebration of diversity through performances and cultural exchanges that showcase our global community.</p>
                    <div class="view-btn">View More</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Modal Popup -->
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
    
    /* Enhanced decorative elements for better visual appeal */
    .facilities-gallery::before {
        content: '';
        position: absolute;
        top: -150px;
        right: -150px;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(74, 144, 226, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
        z-index: 0;
    }
    
    .facilities-gallery::after {
        content: '';
        position: absolute;
        bottom: -150px;
        left: -150px;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 168, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
        z-index: 0;
    }
    
    /* Additional decorative element for visual interest */
    .facilities-gallery .container::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
        z-index: 0;
    }
    
    .container {
        position: relative;
        z-index: 1;
        max-width: 1320px;
        margin: 0 auto;
        padding: 0 30px;
    }
    
    /* Improved grid layout with better spacing */
    .facilities-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: minmax(250px, auto);
        gap: 30px;
        max-width: 100%;
        margin: 0 auto;
        position: relative;
        z-index: 2;
    }
    
    /* More distinct card sizes for better alternating pattern */
    .facility-card {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 15px 35px rgba(0, 86, 179, 0.15);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
        min-height: 300px;
    }
    
    /* Clear alternating pattern of large and small cards */
    .facility-card:nth-child(1) {
        grid-column: span 8;
        grid-row: span 1;
        height: 420px;
    }
    
    .facility-card:nth-child(2) {
        grid-column: span 4;
        grid-row: span 1;
        height: 420px;
    }
    
    .facility-card:nth-child(3) {
        grid-column: span 4;
        grid-row: span 1;
        height: 380px;
    }
    
    .facility-card:nth-child(4) {
        grid-column: span 8;
        grid-row: span 1;
        height: 380px;
    }
    
    .facility-card:nth-child(5) {
        grid-column: span 6;
        grid-row: span 1;
        height: 450px;
    }
    
    .facility-card:nth-child(6) {
        grid-column: span 6;
        grid-row: span 1;
        height: 450px;
    }
    
    .facility-card:hover {
        transform: translateY(-15px);
        box-shadow: 0 20px 40px rgba(0, 86, 179, 0.25);
    }
    
    .facility-card:hover .facility-overlay {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
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
        transition: all 0.4s ease;
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
    
    /* Enhanced Gallery Heading - Centered & Prominent */
    .section-header {
        text-align: center;
        margin: 0 auto 80px;
        position: relative;
        max-width: 900px;
        width: 100%;
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .section-title {
        width: 100%;
        text-align: center;
        font-size: 3.8rem;
        color: #0056b3;
        margin-bottom: 20px;
        font-weight: 800;
        position: relative;
        text-transform: uppercase;
        letter-spacing: 2px;
        display: inline-block;
        text-shadow: 0 2px 10px rgba(0, 86, 179, 0.15);
    }
    
    .section-title::before {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        background: rgba(0, 168, 255, 0.1);
        border-radius: 50%;
        left: -40px;
        top: 50%;
        transform: translateY(-50%);
    }
    
    .section-title::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        background: rgba(0, 168, 255, 0.1);
        border-radius: 50%;
        right: -40px;
        top: 50%;
        transform: translateY(-50%);
    }
    
    /* Repositioned title underline below the title */
    .title-underline {
        height: 5px;
        width: 180px; /* Increased width for better visibility */
        background: linear-gradient(90deg, #0056b3, #00a8ff);
        margin: 0 auto 25px; /* This centers it horizontally */
        border-radius: 3px;
        position: relative;
        left: 0; /* Reset any potential offset */
        right: 0; /* Reset any potential offset */
        /* Add drop shadow for depth */
        box-shadow: 0 3px 6px rgba(0, 86, 179, 0.15);
        align-self: center; /* Ensures centering within flex container */
        display: block; /* Ensures block behavior for proper centering */
    }
    
    /* Adjust the side elements to maintain proper spacing */
    .title-underline::before {
        content: '';
        position: absolute;
        width: 60px;
        height: 5px;
        background: linear-gradient(90deg, #00a8ff, #4ac7ff);
        left: -80px;
        border-radius: 3px;
        opacity: 0.6;
    }
    
    .title-underline::after {
        content: '';
        position: absolute;
        width: 60px;
        height: 5px;
        background: linear-gradient(90deg, #4ac7ff, #00a8ff);
        right: -80px;
        border-radius: 3px;
        opacity: 0.6;
    }
    
    .section-subtitle {
        max-width: 700px;
        margin: 0 auto;
        color: #666;
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 1.6;
    }
    
    @media (max-width: 768px) {
        .section-title {
            font-size: 2.8rem;
        }
        
        .section-title::before,
        .section-title::after {
            display: none;
        }
        
        .title-underline::before,
        .title-underline::after {
            display: none;
        }
    }
    
    @media (max-width: 576px) {
        .section-title {
            font-size: 2.2rem;
        }
        
        .section-subtitle {
            font-size: 1.1rem;
        }
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
    
    .modal-close:hover {
        background: rgba(0, 0, 0, 0.6);
        transform: rotate(90deg);
    }
    
    @media (max-width: 992px) {
        .facilities-grid {
            grid-template-columns: repeat(4, 1fr);
        }
        
        /* Adjust grid placement for medium screens */
        .facility-card:nth-child(1) {
            grid-column: 1 / span 4;
            grid-row: 1;
        }
        
        .facility-card:nth-child(2) {
            grid-column: 1 / span 2;
            grid-row: 2;
        }
        
        .facility-card:nth-child(3) {
            grid-column: 3 / span 2;
            grid-row: 2;
        }
        
        .facility-card:nth-child(4) {
            grid-column: 1 / span 4;
            grid-row: 3;
        }
        
        .facility-card:nth-child(5) {
            grid-column: 1 / span 2;
            grid-row: 4;
        }
        
        .facility-card:nth-child(6) {
            grid-column: 3 / span 2;
            grid-row: 4;
        }
    }
    
    @media (max-width: 768px) {
        .section-title {
            font-size: 2rem;
        }
        
        .facilities-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        /* Adjust grid placement for small screens */
        .facility-card:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: 1;
        }
        
        .facility-card:nth-child(2) {
            grid-column: 1 / span 1;
            grid-row: 2;
        }
        
        .facility-card:nth-child(3) {
            grid-column: 2 / span 1;
            grid-row: 2;
        }
        
        .facility-card:nth-child(4) {
            grid-column: 1 / span 2;
            grid-row: 3;
        }
        
        .facility-card:nth-child(5) {
            grid-column: 1 / span 2;
            grid-row: 4;
        }
        
        .facility-card:nth-child(6) {
            grid-column: 1 / span 2;
            grid-row: 5;
        }
        
        .facility-card.large, 
        .facility-card.extra-large {
            height: 350px;
        }
        
        .facility-card.small {
            height: 250px;
        }
        
        .modal-content {
            width: 95%;
        }
        
        .modal-image-container {
            height: 300px;
        }
        
        .modal-title {
            font-size: 1.8rem;
        }
    }
    
    @media (max-width: 576px) {
        .facilities-grid {
            grid-template-columns: 1fr;
        }
        
        /* Adjust grid placement for very small screens */
        .facility-card:nth-child(n) {
            grid-column: 1;
            grid-row: auto;
            height: 280px;
        }
        
        .facility-content h3 {
            font-size: 1.5rem;
        }
        
        .modal-image-container {
            height: 220px;
        }
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const facilityCards = document.querySelectorAll('.facility-card');
        const viewButtons = document.querySelectorAll('.view-btn');
        const modal = document.querySelector('.facility-modal');
        const modalImage = document.querySelector('.modal-image');
        const modalTitle = document.querySelector('.modal-title');
        const modalDescription = document.querySelector('.modal-description');
        const modalClose = document.querySelector('.modal-close');
        
        // Only open modal when "View More" button is clicked
        viewButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card's click event from triggering
                
                const card = this.closest('.facility-card');
                const image = card.querySelector('.facility-image img').getAttribute('src');
                const title = card.getAttribute('data-title');
                const description = card.getAttribute('data-description');
                
                modalImage.setAttribute('src', image);
                modalImage.setAttribute('alt', title);
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            });
        });
        
        // Make cards interactive but not opening modal
        facilityCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Only handle card clicks, not "View More" button clicks
                if (!e.target.closest('.view-btn')) {
                    // Optional: Add highlighting/selection effect
                    facilityCards.forEach(c => c.classList.remove('selected'));
                    this.classList.add('selected');
                }
            });
        });
        
        // Close modal when X button is clicked
        modalClose.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
        
        // Close modal when clicking outside the content
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable scrolling
            }
        });
        
        // Close modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Re-enable scrolling
            }
        });
    });
</script>
</body>
</html>