<section class="hero-section">
        <!-- Background Slider -->
        <div class="bg-slider">
            <div class="bg-slide active" style="background-image: url('assets/hero/hero1.JPG')"></div>
            <div class="bg-slide" style="background-image: url('assets/hero/hero2.JPG')"></div>
            <div class="bg-slide" style="background-image: url('assets/hero/hero3.JPG')"></div>
            <div class="bg-slide" style="background-image: url('assets/hero/hero4.JPG')"></div>
        </div>

        <div class="hero-content">
            <h1 class="hero-title">CT PUBLIC SCHOOL <span>Empowering Minds,</span> Inspiring Futures</h1>
            <p class="hero-subtitle">CT Public School is dedicated to fostering intellectual growth and character development, empowering students to shape a brighter future.</p>
        </div>

        <div class="hero-form-container">
            <h2 class="hero-form-title">Apply Now</h2>
            <p class="hero-form-subtitle">Start your journey with us</p>

            <form id="application-form" action="backend/process_registration.php" method="post">
                <div class="form-group">
                    <label>Full Name</label>
                    <div class="form-input-container">
                        <div class="form-icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <input type="text" name="name" class="form-input" placeholder="Enter your name" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <div class="form-input-container">
                        <div class="form-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <input type="tel" name="phone" class="form-input" placeholder="Enter your phone number" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Email Address</label>
                    <div class="form-input-container">
                        <div class="form-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <input type="email" name="email" class="form-input" placeholder="Enter your email" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Course</label>
                    <div class="form-input-container">
                        <div class="form-icon">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <select name="course" class="form-input" required>
                            <option value="">Select a Course</option>
                            <option value="Science">Science</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Arts">Arts</option>
                            <option value="Computer Science">Computer Science</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>Message (Optional)</label>
                    <div class="form-input-container">
                        <div class="form-icon">
                            <i class="fas fa-comment"></i>
                        </div>
                        <textarea name="message" class="form-input" placeholder="Any specific requirements or questions?"></textarea>
                    </div>
                </div>

                <div class="form-message"></div>
                <button type="submit" class="submit-btn">Submit Application</button>
            </form>
        </div>
    </section>