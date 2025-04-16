<section class="counter-section">
    <div class="counter-overlay"></div>
    <div class="container">
        <div class="section-header" style="opacity: 1 !important; visibility: visible !important; animation: none !important;">
            <h2 class="counter-title" style="opacity: 1 !important; visibility: visible !important; display: block !important; transform: none !important; animation: none !important; transition: none !important;">Discover Our <span class="highlight">Impact</span></h2>
            <p class="counter-subtitle">Achievements that inspire excellence</p>
        </div>
        
        <div class="counter-container">
            <div class="counter-item">
                <div class="counter-icon">
                    <i class="fas fa-user-graduate"></i>
                </div>
                <div class="counter-number" data-count="5000">0</div>
                <div class="counter-text">Happy Students</div>
            </div>
            
            <div class="counter-item">
                <div class="counter-icon">
                    <i class="fas fa-chalkboard-teacher"></i>
                </div>
                <div class="counter-number" data-count="200">0</div>
                <div class="counter-text">Expert Teachers</div>
            </div>
            
            <div class="counter-item">
                <div class="counter-icon">
                    <i class="fas fa-award"></i>
                </div>
                <div class="counter-number" data-count="50">0</div>
                <div class="counter-text">Awards Won</div>
            </div>
            
            <div class="counter-item">
                <div class="counter-icon">
                    <i class="fas fa-book-open"></i>
                </div>
                <div class="counter-number" data-count="100">0</div>
                <div class="counter-text">Courses Offered</div>
            </div>
        </div>
    </div>
</section>

<script>
    // Ensure the heading remains visible
    document.addEventListener('DOMContentLoaded', function() {
        const heading = document.querySelector('.counter-title');
        const headerSection = document.querySelector('.section-header');
        
        // Initial enforcement
        makeVisible();
        
        // Keep checking to make sure it stays visible
        function makeVisible() {
            heading.style.opacity = '1';
            heading.style.visibility = 'visible';
            heading.style.display = 'block';
            headerSection.style.opacity = '1';
            headerSection.style.visibility = 'visible';
        }
        
        // Set repeated checks
        setInterval(makeVisible, 100);
    });
</script>