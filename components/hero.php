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
            <div class="form-header">
                <h2 class="hero-form-title">Apply Now</h2>
                <p class="hero-form-subtitle">Start your journey with us</p>
            </div>

            <form id="application-form" onsubmit="return false;" class="modern-form">
                <div class="form-group">
                    <label><i class="fas fa-user"></i> Full Name</label>
                    <div class="form-input-container">
                        <input type="text" name="name" placeholder="Enter your full name" required>
                    </div>
                </div>

                <div class="form-group">
                    <label><i class="fas fa-phone"></i> Phone Number</label>
                    <div class="form-input-container">
                        <input type="tel" name="phone" placeholder="Enter your phone number">
                    </div>
                </div>

                <div class="form-group">
                    <label><i class="fas fa-envelope"></i> Email Address</label>
                    <div class="form-input-container">
                        <input type="email" name="email" placeholder="Enter your email address" required>
                    </div>
                </div>

                <div class="form-group">
                    <label><i class="fas fa-graduation-cap"></i> Course</label>
                    <div class="form-input-container select-container">
                        <select name="course">
                            <option value="">Select a Course</option>
                            <option value="Science">Science</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Arts">Arts</option>
                            <option value="Computer Science">Computer Science</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label><i class="fas fa-comment"></i> Message (Optional)</label>
                    <div class="form-input-container">
                        <textarea name="message" placeholder="How can we help you?"></textarea>
                    </div>
                </div>

                <!-- Form message container -->
                <div class="form-message"></div>

                <!-- Submit button with improved styling -->
                <button type="button" class="submit-btn" id="form-submit-btn">
                    <span class="btn-text">Submit Application</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </form>
        </div>
    </section>