<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CT Public School - Quality Education from Pre-Nursery to +2</title>
    <meta name="description" content="CT Public School offers quality education from pre-nursery to +2 with modern facilities, experienced faculty, and holistic development approach.">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"> -->
    <!-- <link rel="stylesheet" href="assets/css/bootstrap.min.css"> -->
    <!-- <link rel="stylesheet" href="assets/css/theme.css"> -->
    <!-- <link rel="stylesheet" href="assets/css/custom.css"> -->
    <!-- <link rel="stylesheet" href="assets/css/animations.css"> -->
    <link rel="stylesheet" href="assets/css/header.css">
    <link rel="stylesheet" href="assets/css/hero.css">
    <link rel="stylesheet" href="assets/css/about.css">
    <link rel="stylesheet" href="assets/css/counter.css">
    <!-- <link rel="stylesheet" href="assets/css/interactive.css"> -->
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
    <!-- <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"> -->
</head>

<body>
    <?php include 'includes/header.php'; ?>
    <?php include 'components/hero.php'; ?>
    <?php include 'components/about.php'; ?>
    <?php include 'components/counter.php'; ?>

    <!-- Hero Section -->


    <!-- About Section -->


    <!-- Programs Section -->
    <section class="programs-section py-6 bg-light" id="programs">
        <div class="container">
            <div class="section-header text-center mb-5">
                <span class="subtitle">Our Academic Programs</span>
                <h2 class="section-title">Comprehensive Education Pathway</h2>
                <p class="section-description">CT Public School offers a complete educational journey from early childhood to senior secondary levels</p>
            </div>

            <div class="programs-tabs">
                <ul class="nav nav-pills mb-5 justify-content-center" id="programsTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pre-primary-tab" data-bs-toggle="pill" data-bs-target="#pre-primary" type="button" role="tab">Pre-Primary</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="primary-tab" data-bs-toggle="pill" data-bs-target="#primary" type="button" role="tab">Primary</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="middle-tab" data-bs-toggle="pill" data-bs-target="#middle" type="button" role="tab">Middle</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="secondary-tab" data-bs-toggle="pill" data-bs-target="#secondary" type="button" role="tab">Secondary</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="senior-tab" data-bs-toggle="pill" data-bs-target="#senior" type="button" role="tab">Senior Secondary</button>
                    </li>
                </ul>

                <div class="tab-content" id="programsTabsContent">
                    <!-- Pre-Primary Tab -->
                    <div class="tab-pane fade show active" id="pre-primary" role="tabpanel">
                        <div class="row g-4">
                            <div class="col-lg-6">
                                <div class="program-image">
                                    <img src="assets/img/programs/pre-primary.jpg" alt="Pre-Primary Education" class="img-fluid rounded-4">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="program-content">
                                    <span class="program-badge">Ages 2.5-5 Years</span>
                                    <h3 class="mb-4">Early Childhood Education</h3>
                                    <p>Our pre-primary program focuses on developing foundational skills through play-based learning, fostering curiosity, creativity, and social skills. Children discover the joy of learning in a safe, nurturing environment.</p>

                                    <div class="program-highlights mt-4">
                                        <div class="highlight-item">
                                            <i class="bi bi-check-circle"></i>
                                            <span>Play-based learning approach</span>
                                        </div>
                                        <div class="highlight-item">
                                            <i class="bi bi-check-circle"></i>
                                            <span>Activity-centered curriculum</span>
                                        </div>
                                        <div class="highlight-item">
                                            <i class="bi bi-check-circle"></i>
                                            <span>Language and number readiness</span>
                                        </div>
                                        <div class="highlight-item">
                                            <i class="bi bi-check-circle"></i>
                                            <span>Social and emotional development</span>
                                        </div>
                                    </div>

                                    <div class="program-cta mt-4">
                                        <a href="#registration" class="btn btn-primary">Enroll Now</a>
                                        <a href="#" class="btn btn-outline-primary ms-3" data-bs-toggle="modal" data-bs-target="#curriculumModal">View Curriculum</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Add similar structures for other tabs -->
                </div>
            </div>
        </div>
    </section>

    <!-- Facilities Section -->
    <section class="facilities-section py-6" id="facilities">
        <div class="container">
            <div class="section-header text-center mb-5">
                <span class="subtitle">Our Campus</span>
                <h2 class="section-title">World-Class Facilities</h2>
                <p class="section-description">Providing an environment that nurtures learning and overall development</p>
            </div>

            <div class="row g-4">
                <div class="col-md-4">
                    <div class="facility-card">
                        <div class="facility-img">
                            <img src="assets/img/facilities/library.jpg" alt="Modern Library">
                        </div>
                        <div class="facility-content">
                            <div class="facility-icon">
                                <i class="bi bi-book"></i>
                            </div>
                            <h3>Modern Library</h3>
                            <p>A vast collection of books, digital resources, and comfortable reading spaces to foster a love for reading and research.</p>
                        </div>
                        <div class="facility-overlay"></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="facility-card">
                        <div class="facility-img">
                            <img src="assets/img/facilities/labs.jpg" alt="Science Labs">
                        </div>
                        <div class="facility-content">
                            <div class="facility-icon">
                                <i class="bi bi-flask"></i>
                            </div>
                            <h3>Science Labs</h3>
                            <p>Well-equipped physics, chemistry, and biology labs with modern apparatus for practical learning.</p>
                        </div>
                        <div class="facility-overlay"></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="facility-card">
                        <div class="facility-img">
                            <img src="assets/img/facilities/sports.jpg" alt="Sports Facilities">
                        </div>
                        <div class="facility-content">
                            <div class="facility-icon">
                                <i class="bi bi-trophy"></i>
                            </div>
                            <h3>Sports Complex</h3>
                            <p>Indoor and outdoor sports facilities including basketball court, cricket pitch, and athletics track.</p>
                        </div>
                        <div class="facility-overlay"></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="facility-card">
                        <div class="facility-img">
                            <img src="assets/img/facilities/computer-lab.jpg" alt="Computer Lab">
                        </div>
                        <div class="facility-content">
                            <div class="facility-icon">
                                <i class="bi bi-pc-display"></i>
                            </div>
                            <h3>Computer Labs</h3>
                            <p>Modern computer labs with latest hardware and software for digital literacy and programming skills.</p>
                        </div>
                        <div class="facility-overlay"></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="facility-card">
                        <div class="facility-img">
                            <img src="assets/img/facilities/art-room.jpg" alt="Arts & Crafts">
                        </div>
                        <div class="facility-content">
                            <div class="facility-icon">
                                <i class="bi bi-palette"></i>
                            </div>
                            <h3>Arts & Crafts Studio</h3>
                            <p>Creative spaces for visual arts, crafts, music, and performing arts to nurture artistic talents.</p>
                        </div>
                        <div class="facility-overlay"></div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="facility-card">
                        <div class="facility-img">
                            <img src="assets/img/facilities/cafeteria.jpg" alt="Cafeteria">
                        </div>
                        <div class="facility-content">
                            <div class="facility-icon">
                                <i class="bi bi-cup-hot"></i>
                            </div>
                            <h3>Cafeteria</h3>
                            <p>Hygienic cafeteria serving nutritious meals prepared under expert supervision for healthy eating.</p>
                        </div>
                        <div class="facility-overlay"></div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5">
                <a href="#virtual-tour" class="btn btn-primary">Take a Virtual Tour <i class="bi bi-arrow-right ms-2"></i></a>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials-section py-5 bg-light">
        <div class="container">
            <div class="section-title text-center mb-5">
                <h6 class="text-primary">TESTIMONIALS</h6>
                <h2>What Parents & Students Say</h2>
            </div>

            <div class="row testimonial-carousel">
                <div class="col-lg-4 col-md-6 mb-4 fade-in-up">
                    <div class="testimonial-card">
                        <div class="testimonial-content">
                            <div class="testimonial-rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>"CT Public School has provided my daughter with an excellent foundation. The teachers are caring and the facilities are top-notch."</p>
                        </div>
                        <div class="testimonial-author">
                            <img src="assets/img/testimonials/parent1.jpg" alt="Ritu Sharma" class="img-fluid rounded-circle">
                            <div>
                                <h5>Ritu Sharma</h5>
                                <p>Parent</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 fade-in-up" data-delay="0.2">
                    <div class="testimonial-card">
                        <div class="testimonial-content">
                            <div class="testimonial-rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>"The holistic approach to education at CT Public School has helped me develop not just academically but also as a confident individual."</p>
                        </div>
                        <div class="testimonial-author">
                            <img src="assets/img/testimonials/student1.jpg" alt="Rahul Verma" class="img-fluid rounded-circle">
                            <div>
                                <h5>Rahul Verma</h5>
                                <p>Student, Class 12</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 fade-in-up" data-delay="0.4">
                    <div class="testimonial-card">
                        <div class="testimonial-content">
                            <div class="testimonial-rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>"The school's emphasis on both academics and co-curricular activities has given my son a well-rounded education. Highly recommend!"</p>
                        </div>
                        <div class="testimonial-author">
                            <img src="assets/img/testimonials/parent2.jpg" alt="Amit Singh" class="img-fluid rounded-circle">
                            <div>
                                <h5>Amit Singh</h5>
                                <p>Parent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Registration Section -->
    <section class="registration-section py-6" id="registration">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="form-container shadow-lg">
                        <div class="form-header text-center mb-4">
                            <h2 class="text-primary">Apply for Admission</h2>
                            <p class="text-muted">Fill out the form below to begin your application process</p>
                        </div>

                        <form action="handlers/registration-handler.php" method="POST" id="registration-form" class="needs-validation" novalidate>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="studentName" name="student_name" placeholder="Student's Name" required>
                                        <label for="studentName">Student's Name</label>
                                        <div class="invalid-feedback">Please provide the student's name</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="parentName" name="parent_name" placeholder="Parent/Guardian's Name" required>
                                        <label for="parentName">Parent/Guardian's Name</label>
                                        <div class="invalid-feedback">Please provide parent/guardian's name</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email Address" required>
                                        <label for="email">Email Address</label>
                                        <div class="invalid-feedback">Please provide a valid email address</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="Phone Number" required>
                                        <label for="phone">Phone Number</label>
                                        <div class="invalid-feedback">Please provide a valid phone number</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="dob" name="dob" placeholder="Date of Birth" required>
                                        <label for="dob">Date of Birth (DD/MM/YYYY)</label>
                                        <div class="invalid-feedback">Please provide the student's date of birth</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-select" id="gradeApplying" name="grade_applying" required>
                                            <option value="" selected disabled>Select Grade</option>
                                            <option value="Pre-Nursery">Pre-Nursery</option>
                                            <option value="Nursery">Nursery</option>
                                            <option value="KG">KG</option>
                                            <option value="Grade 1">Grade 1</option>
                                            <option value="Grade 2">Grade 2</option>
                                            <option value="Grade 3">Grade 3</option>
                                            <option value="Grade 4">Grade 4</option>
                                            <option value="Grade 5">Grade 5</option>
                                            <option value="Grade 6">Grade 6</option>
                                            <option value="Grade 7">Grade 7</option>
                                            <option value="Grade 8">Grade 8</option>
                                            <option value="Grade 9">Grade 9</option>
                                            <option value="Grade 10">Grade 10</option>
                                            <option value="Grade 11">Grade 11</option>
                                            <option value="Grade 12">Grade 12</option>
                                        </select>
                                        <label for="gradeApplying">Grade Applying For</label>
                                        <div class="invalid-feedback">Please select a grade</div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control" id="address" name="address" style="height: 100px" placeholder="Address" required></textarea>
                                        <label for="address">Address</label>
                                        <div class="invalid-feedback">Please provide your address</div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="terms" name="terms" required>
                                        <label class="form-check-label" for="terms">I agree to the terms and conditions</label>
                                        <div class="invalid-feedback">You must agree before submitting</div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary w-100">Submit Application</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Virtual Tour Section -->
    <section id="virtual-tour" class="virtual-tour-section py-5 bg-light">
        <div class="container">
            <div class="section-title text-center mb-5">
                <h6 class="text-primary">EXPLORE OUR CAMPUS</h6>
                <h2>Take a Virtual Tour</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="virtual-tour-video ratio ratio-16x9 fade-in-up">
                        <iframe src="https://www.youtube.com/embed/your-video-id" title="CT Public School Virtual Tour" allowfullscreen></iframe>
                    </div>
                    <div class="text-center mt-4 fade-in-up" data-delay="0.2">
                        <a href="#registration" class="btn btn-primary btn-lg">Schedule a Visit</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter-section py-5 bg-primary-dark text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <h3>Stay Updated With School News</h3>
                    <p>Subscribe to our newsletter to receive updates about school events, achievements and more.</p>
                </div>
                <div class="col-lg-6">
                    <form class="newsletter-form" action="handlers/newsletter-handler.php" method="post">
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="Enter your email" required>
                            <button class="btn btn-light" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <?php include 'includes/toast-notifications.php'; ?>
    <?php include 'includes/footer.php'; ?>

    <!-- Back to Top Button -->
    <a href="#" class="back-to-top" id="backToTop"><i class="bi bi-arrow-up"></i></a>

    <!-- Scripts -->
    <!-- <script src="assets/js/bootstrap.bundle.min.js"></script> -->
    <!-- <script src="assets/js/gsap.min.js"></script> -->
    <!-- <script src="assets/js/ScrollTrigger.min.js"></script> -->
    <!-- <script src="assets/js/form-validation.js"></script> -->
    <!-- <script src="assets/js/animations.js"></script> -->
    <script src="assets/js/hero.js"></script>
    <script src="assets/js/header.js"></script>
    <script src="assets/js/about.js"></script>
    <script src="assets/js/counter.js"></script>
    // Add this before the closing body tag, along with your other scripts
</body>

</html>