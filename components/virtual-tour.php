<section id="virtual-tour" class="virtual-tour-section">
    <div class="tour-bg-elements">
        <div class="tour-shape shape1"></div>
        <div class="tour-shape shape2"></div>
        <div class="tour-shape shape3"></div>
        <div class="floating-icon tour-icon1"><i class="fas fa-graduation-cap"></i></div>
        <div class="floating-icon tour-icon2"><i class="fas fa-book"></i></div>
    </div>

    <div class="container">
        <div class="section-header">
            <span class="section-badge">EXPLORE OUR CAMPUS</span>
            <h2 class="section-title">Virtual Campus Tour</h2>
            <p class="section-subtitle">Experience our facilities and campus life from anywhere</p>
        </div>
        
        <!-- Iframe for Virtual Tour -->
        <div class="tour-iframe-container">
            <iframe 
                src="https://ctpublicschool.s3.ap-south-1.amazonaws.com/tour.html" 
                frameborder="0" 
                allowfullscreen
                loading="lazy"
                title="CT Public School Virtual Tour"
                class="virtual-tour-iframe">
            </iframe>
        </div>
        
       
    </div>
</section>

<style>
    .virtual-tour-section {
        padding: 80px 0;
        background: linear-gradient(135deg, #f0f7ff 0%, #e8f4ff 100%);
        position: relative;
        overflow: hidden;
    }
    
    .tour-bg-elements {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: 0;
    }
    
    .tour-shape {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 168, 255, 0.1) 0%, rgba(0, 86, 179, 0.05) 70%);
    }
    
    .shape1 {
        width: 400px;
        height: 400px;
        top: -100px;
        right: -100px;
    }
    
    .shape2 {
        width: 300px;
        height: 300px;
        bottom: 50px;
        left: -50px;
    }
    
    .shape3 {
        width: 200px;
        height: 200px;
        top: 40%;
        left: 10%;
    }
    
    .floating-icon {
        position: absolute;
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 25px rgba(0, 86, 179, 0.2);
        z-index: 1;
        animation: floatAnimation 5s infinite ease-in-out;
    }
    
    .floating-icon i {
        font-size: 1.5rem;
        color: #0056b3;
    }
    
    .tour-icon1 {
        top: 10%;
        right: 15%;
        animation-delay: 0.5s;
    }
    
    .tour-icon2 {
        bottom: 15%;
        right: 30%;
        animation-delay: 1.5s;
    }
    
    @keyframes floatAnimation {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
    }
    
    .section-header {
        text-align: center;
        margin-bottom: 50px;
        position: relative;
        z-index: 1;
    }
    
    .section-badge {
        display: inline-block;
        background: linear-gradient(45deg, #0056b3, #00a8ff);
        color: white;
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 15px;
        box-shadow: 0 4px 15px rgba(0, 86, 179, 0.3);
        letter-spacing: 1px;
    }
    
    .section-title {
        font-size: 2.5rem;
        color: #0056b3;
        margin-bottom: 15px;
        font-weight: 800;
    }
    
    .section-subtitle {
        font-size: 1.1rem;
        color: #666;
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.6;
    }
    
    .tour-iframe-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        margin-bottom: 50px;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 50px rgba(0, 86, 179, 0.15);
        z-index: 2;
    }
    
    .virtual-tour-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }
    
    .cta-container {
        background: linear-gradient(45deg, #0056b3, #00a8ff);
        border-radius: 20px;
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 15px 30px rgba(0, 86, 179, 0.25);
        position: relative;
        z-index: 2;
    }
    
    .cta-text p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.1rem;
    }
    
    .schedule-tour-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        background: white;
        color: #0056b3;
        padding: 15px 25px;
        border-radius: 30px;
        font-weight: 700;
        text-decoration: none;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .schedule-tour-btn:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }
    
    /* Responsive Adjustments */
    @media (max-width: 768px) {
        .cta-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
        }
        
        .section-title {
            font-size: 2rem;
        }
    }
    
    @media (max-width: 576px) {
        .section-title {
            font-size: 1.6rem;
        }
    }
</style>
