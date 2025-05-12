<section id="programs-section programs" class="programs-container">
    <!-- Background decorative elements -->
    <div class="bg-decoration circle-1"></div>
    <div class="bg-decoration circle-2"></div>
    <div class="bg-decoration wave-1"></div>
    <div class="bg-decoration wave-2"></div>
    
    <div class="programs-header">
        <div class="programs-subtitle">EXPLORE OUR PROGRAMS</div>
        <h2 class="programs-title">Educational Excellence Categories</h2>
    </div>
    
    <div class="programs-grid">
        <?php
        $programs = [
            [
                'id' => 1,
                'title' => 'Library Resources',
                'description' => 'Access our extensive collection of books, digital resources, and research materials.',
                'icon' => 'book-open',
                'color' => 'blue',
                'image' => 'assets/programs/library.jpg'
            ],
            [
                'id' => 2,
                'title' => 'Arts & Creativity',
                'description' => 'Express yourself through visual arts, design, and creative explorations.',
                'icon' => 'palette',
                'color' => 'orange',
                'image' => 'assets/programs/art.jpg'
            ],
            [
                'id' => 3,
                'title' => 'Academic Research',
                'description' => 'Engage in scholarly research with guidance from experienced mentors.',
                'icon' => 'search',
                'color' => 'red',
                'image' => 'assets/programs/library.jpg'
            ],
            [
                'id' => 4,
                'title' => 'Athletic Training',
                'description' => 'Develop physical skills through our comprehensive sports programs.',
                'icon' => 'running',
                'color' => 'green',
                'image' => 'assets/programs/sports.jpg'
            ],
            [
                'id' => 5,
                'title' => 'Music Education',
                'description' => 'Learn musical theory and practice with our dedicated instructors.',
                'icon' => 'music',
                'color' => 'purple',
                'image' => 'assets/programs/music.jpg'
            ],
            [
                'id' => 6,
                'title' => 'Health Sciences',
                'description' => 'Prepare for careers in healthcare with our specialized programs.',
                'icon' => 'heartbeat',
                'color' => 'teal',
                'image' => 'assets/programs/medical.jpg'
            ]
        ];
        
        foreach ($programs as $index => $program) :
        ?>
            <div class="program-card" data-id="<?php echo $program['id']; ?>" data-color="<?php echo $program['color']; ?>">
                <img src="<?php echo $program['image']; ?>" class="card-bg-image" alt="<?php echo $program['title']; ?>">
                <div class="program-icon-wrapper">
                    <i class="fas fa-<?php echo $program['icon']; ?> program-icon"></i>
                </div>
                <!-- Add visible title to card front -->
                <h3 class="card-title"><?php echo $program['title']; ?></h3>
                
                <!-- Add Read More button -->
                <button class="read-more-btn">Read More</button>
                
                <!-- Hidden content for popup -->
                <div class="program-content">
                    <h3 class="program-title"><?php echo $program['title']; ?></h3>
                    <p class="program-description"><?php echo $program['description']; ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>
