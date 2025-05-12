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

        <div class="hero-form-container" style="padding: 20px; background: linear-gradient(145deg, #ffffff, #f8f9ff); border-radius: 20px; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 86, 179, 0.05); border: 1px solid rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); position: relative; overflow: hidden;">
            <!-- Decorative elements -->
            <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: linear-gradient(135deg, rgba(0, 168, 255, 0.2), rgba(0, 86, 179, 0.1)); border-radius: 50%; z-index: 0;"></div>
            <div style="position: absolute; bottom: -30px; left: -30px; width: 80px; height: 80px; background: linear-gradient(135deg, rgba(0, 168, 255, 0.15), rgba(0, 86, 179, 0.05)); border-radius: 50%; z-index: 0;"></div>
            
            <div class="form-header" style="position: relative; z-index: 1; text-align: center; margin-bottom: 15px; border-bottom: 2px solid rgba(0, 86, 179, 0.1); padding-bottom: 10px;">
                <h2 class="hero-form-title" style="margin: 0 0 5px 0; font-size: 1.5rem; background: linear-gradient(135deg, #0056b3, #00a8ff); -webkit-background-clip: text; background-clip: text; color: transparent; font-weight: 700;">Apply Now</h2>
                <p class="hero-form-subtitle" style="margin: 0 0 5px 0; font-size: 0.9rem; color: #6c757d;">Start your journey with us</p>
            </div>

            <form id="application-form" onsubmit="return false;" class="modern-form" style="display: flex; flex-direction: column; gap: 10px; position: relative; z-index: 1;">
                <div class="form-group" style="margin-bottom: 6px; position: relative;">
                    <label style="margin-bottom: 4px; display: block; font-size: 0.85rem; font-weight: 600; color: #495057;"><i class="fas fa-user" style="color: #00a8ff; margin-right: 5px;"></i> Full Name</label>
                    <div class="form-input-container" style="position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                        <input type="text" name="name" placeholder="Enter your full name" required style="height: 35px; padding: 5px 12px; width: 100%; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; transition: all 0.3s ease; font-size: 0.9rem;">
                    </div>
                </div>

                <div class="form-group" style="margin-bottom: 6px; position: relative;">
                    <label style="margin-bottom: 4px; display: block; font-size: 0.85rem; font-weight: 600; color: #495057;"><i class="fas fa-phone" style="color: #00a8ff; margin-right: 5px;"></i> Phone Number</label>
                    <div class="form-input-container" style="position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                        <input type="tel" name="phone" placeholder="Enter your phone number" style="height: 35px; padding: 5px 12px; width: 100%; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; transition: all 0.3s ease; font-size: 0.9rem;">
                    </div>
                </div>

                <div class="form-group" style="margin-bottom: 6px; position: relative;">
                    <label style="margin-bottom: 4px; display: block; font-size: 0.85rem; font-weight: 600; color: #495057;"><i class="fas fa-envelope" style="color: #00a8ff; margin-right: 5px;"></i> Email Address</label>
                    <div class="form-input-container" style="position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                        <input type="email" name="email" placeholder="Enter your email address" required style="height: 35px; padding: 5px 12px; width: 100%; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; transition: all 0.3s ease; font-size: 0.9rem;">
                    </div>
                </div>

                <div class="form-group" style="margin-bottom: 6px; position: relative;">
                    <label style="margin-bottom: 4px; display: block; font-size: 0.85rem; font-weight: 600; color: #495057;"><i class="fas fa-graduation-cap" style="color: #00a8ff; margin-right: 5px;"></i> Course</label>
                    <div class="form-input-container select-container" style="position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                        <select name="course" style="height: 35px; padding: 5px 12px; width: 100%; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; transition: all 0.3s ease; font-size: 0.9rem;">
                            <option value="">Select a Course</option>
                            <option value="Science">Science</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Arts">Arts</option>
                            <option value="Computer Science">Computer Science</option>
                        </select>
                    </div>
                </div>

                <div class="form-group" style="margin-bottom: 15px; position: relative;">
                    <label style="margin-bottom: 4px; display: block; font-size: 0.85rem; font-weight: 600; color: #495057; display: flex; align-items: center; justify-content: space-between;">
                        <span><i class="fas fa-comment" style="color: #00a8ff; margin-right: 5px;"></i> Message</span>
                        <span style="font-size: 0.7rem; font-weight: normal; font-style: italic; color: #6c757d; background: rgba(0,168,255,0.1); padding: 2px 8px; border-radius: 10px;">Optional</span>
                    </label>
                    <div class="form-input-container" style="position: relative; overflow: hidden; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: all 0.3s ease;">
                        <textarea name="message" placeholder="How can we help you?" style="height: 55px; min-height: 55px; padding: 8px 12px; width: 100%; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; transition: all 0.3s ease; font-size: 0.9rem; background-image: linear-gradient(to bottom, #ffffff, #fcfdff); resize: none;"></textarea>
                        <div style="position: absolute; bottom: 5px; right: 10px; font-size: 0.7rem; color: #adb5bd; pointer-events: none;">
                            <i class="fas fa-pen-fancy" style="opacity: 0.5;"></i>
                        </div>
                    </div>
                </div>
                
                <!-- Add minimal spacing after message field -->
                <div style="height: 10px;"></div>
                
                <script>
                    // Enhanced textarea effects with reduced height
                    const messageArea = document.querySelector('textarea[name="message"]');
                    const messageContainer = messageArea.parentNode;
                    
                    messageArea.addEventListener('focus', function() {
                        this.style.height = '60px';
                        messageContainer.style.boxShadow = '0 0 0 2px rgba(0, 168, 255, 0.25), 0 5px 15px rgba(0, 86, 179, 0.1)';
                        messageContainer.style.borderColor = 'rgba(0, 168, 255, 0.3)';
                    });
                    
                    messageArea.addEventListener('blur', function() {
                        this.style.height = '55px';
                        messageContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
                        messageContainer.style.borderColor = 'rgba(0,0,0,0.1)';
                    });
                </script>
                
                <div class="form-message" style="margin: 5px 0; text-align: center; min-height: 20px; font-size: 0.85rem;"></div>
                
                <button type="button" class="submit-btn" id="form-submit-btn" style="padding: 10px 15px; border-radius: 8px; background: linear-gradient(135deg, #0056b3, #00a8ff); color: white; border: none; font-weight: 600; margin-top: 5px; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 15px rgba(0, 86, 179, 0.3); position: relative; overflow: hidden;">
                    <span class="btn-text">Submit Application</span>
                    <i class="fas fa-arrow-right" style="font-size: 0.9rem; position: relative; z-index: 2;"></i>
                    <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: all 0.5s ease; z-index: 1;" class="btn-shine"></div>
                </button>
                
                <script>
                    // Add shine effect to button
                    const submitButton = document.getElementById('form-submit-btn');
                    const shine = submitButton.querySelector('.btn-shine');
                    
                    submitButton.addEventListener('mouseenter', function() {
                        this.style.transform = 'translateY(-2px)';
                        this.style.boxShadow = '0 6px 20px rgba(0, 86, 179, 0.4)';
                        shine.style.left = '100%';
                    });
                    
                    submitButton.addEventListener('mouseleave', function() {
                        this.style.transform = 'translateY(0)';
                        this.style.boxShadow = '0 4px 15px rgba(0, 86, 179, 0.3)';
                        shine.style.left = '-100%';
                    });
                </script>
            </form>
        </div>
    </section>