<section class="info-hub-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Stay <span>Updated</span></h2>
            <p class="section-subtitle">Events, notices, and school highlights</p>
        </div>

        <!-- Animated shapes -->
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>

        <div class="info-hub-tabs">
            <div class="tab-navigation">
                <button class="tab-btn active" data-tab="events">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Latest Events</span>
                </button>
                <button class="tab-btn" data-tab="notices">
                    <i class="fas fa-bullhorn"></i>
                    <span>Notice Board</span>
                </button>
                <button class="tab-btn" data-tab="spotlight">
                    <i class="fas fa-star"></i>
                    <span>Spotlight</span>
                </button>
            </div>

            <div class="tab-content">
                <!-- Content will be loaded dynamically by JavaScript -->
                <div class="tab-pane active" id="events-tab">
                    <div class="cards-container" id="events-container">
                        <div class="loading-spinner">
                            <i class="fas fa-circle-notch fa-spin"></i> Loading events...
                        </div>
                    </div>
                    <div class="view-more-container">
                        <a href="events.php" class="view-more-btn">View All Events <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="tab-pane" id="notices-tab">
                    <div class="cards-container" id="notices-container">
                        <div class="loading-spinner">
                            <i class="fas fa-circle-notch fa-spin"></i> Loading notices...
                        </div>
                    </div>
                    <div class="view-more-container">
                        <a href="notices.php" class="view-more-btn">View All Notices <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="tab-pane" id="spotlight-tab">
                    <div class="cards-container" id="spotlight-container">
                        <div class="loading-spinner">
                            <i class="fas fa-circle-notch fa-spin"></i> Loading highlights...
                        </div>
                    </div>
                    <div class="view-more-container">
                        <a href="spotlight.php" class="view-more-btn">View All Highlights <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

