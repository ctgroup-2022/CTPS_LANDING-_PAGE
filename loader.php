<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading - School Name</title>
    <link rel="stylesheet" href="assets/css/loader.css">
</head>
<body>
    <div class="preloader">
        <div class="preloader-content">
            <div class="school-logo-container">
                <img src="assets/images/logo.png" alt="School Logo" class="school-logo">
            </div>
            <div class="loader-text">LEARNING JOURNEY</div>
            <div class="loading-bar-container">
                <div class="loading-bar"></div>
            </div>
        </div>
        
        <!-- 3D Educational Elements -->
        <div class="edu-floating-elements">
            <div class="edu-element"></div>
            <div class="edu-element"></div>
            <div class="edu-element"></div>
            <div class="edu-element"></div>
        </div>
        
        <!-- 3D Rotating Subject Cube -->
        <div class="subject-cube-container">
            <div class="subject-cube">
                <div class="cube-face cube-front">A</div>
                <div class="cube-face cube-back">B</div>
                <div class="cube-face cube-right">C</div>
                <div class="cube-face cube-left">D</div>
                <div class="cube-face cube-top">E</div>
                <div class="cube-face cube-bottom">F</div>
            </div>
        </div>
        
        <!-- School Mascot -->
        <img src="assets/images/mascot.png" alt="School Mascot" class="loader-mascot">
    </div>
    
    <script src="assets/js/loader.js"></script>
    <script>
        // Redirect to main page after loading
        setTimeout(() => {
            window.location.href = "index.php";
        }, 3500);
    </script>
</body>
</html>
