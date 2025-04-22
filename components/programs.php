<section id="programs-section" class="programs-container">
    <div class="programs-header">
        <h2 class="programs-title">Our Educational Programs</h2>
        <p class="programs-subtitle">Discover excellence in education at Connecticut Public Schools</p>
    </div>
    
    <div class="programs-grid">
        <?php
        $programs = [
            [
                'id' => 1,
                'title' => 'Music',
                'description' => 'Comprehensive music education programs including instrumental, vocal, and theoretical training for all skill levels.',
                'icon' => 'music',
                'color' => 'blue',
                'image' => 'assets/programs/music.jpg'
            ],
            [
                'id' => 2,
                'title' => 'Arts & Creativity',
                'description' => 'Comprehensive visual and performing arts curriculum to nurture creative expression and artistic talents.',
                'icon' => 'palette',
                'color' => 'purple',
                'image' => 'assets/programs/art.jpg'
            ],
            [
                'id' => 3,
                'title' => 'Library',
                'description' => 'Extensive library resources with digital and print collections supporting research, literacy, and lifelong learning.',
                'icon' => 'book',
                'color' => 'red',
                'image' => 'assets/programs/library.jpg' // Fixed missing closing quote
            ],
            [
                'id' => 4,
                'title' => 'Sports',
                'description' => 'Competitive and recreational sports programs developing athleticism, teamwork, and physical fitness.',
                'icon' => 'running',
                'color' => 'green',
                'image' => 'assets/programs/sports.jpg'
            ],
            [
                'id' => 5,
                'title' => 'Early Learning',
                'description' => 'Foundation programs for our youngest learners with play-based curriculum and developmental support.',
                'icon' => 'child',
                'color' => 'yellow',
                'image' => 'assets/programs/artroom.jpg'
            ],
            [
                'id' => 6,
                'title' => 'Medical',
                'description' => 'Health science education and medical preparation programs for students interested in healthcare careers.',
                'icon' => 'medkit',
                'color' => 'teal',
                'image' => 'assets/programs/medical.jpg'
            ]
        ];
        
        foreach ($programs as $program) :
        ?>
            <div class="program-card" data-id="<?php echo $program['id']; ?>" data-color="<?php echo $program['color']; ?>">
                <div class="card-bg-image" style="background-image: url('<?php echo $program['image']; ?>')"></div>
                <div class="card-overlay"></div>
                <div class="program-content">
                    <div class="program-icon-wrapper">
                        <i class="fas fa-<?php echo $program['icon']; ?> program-icon"></i>
                    </div>
                    <h3 class="program-title"><?php echo $program['title']; ?></h3>
                    <p class="program-description"><?php echo $program['description']; ?></p>
                    <a href="#" class="program-link">Learn More <i class="fas fa-arrow-right" style="margin-left: 5px; font-size: 0.9em;"></i></a>
                </div>
                <div class="card-shine"></div>
            </div>
        <?php endforeach; ?>
    </div>
    
    <div class="programs-cta">
        <h3>Interested in our programs?</h3>
        <a href="#contact" class="btn-primary">Contact Us Today <i class="fas fa-paper-plane" style="margin-left: 8px;"></i></a>
    </div>
</section>
