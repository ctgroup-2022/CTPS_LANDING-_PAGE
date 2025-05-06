<?php
require_once 'db_config.php';

// Set CORS headers for security
header("Access-Control-Allow-Origin: *");  // In production, specify your domain
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Initialize response array
$response = [
    'success' => false,
    'message' => '',
    'errors' => []
];

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process form data
    $name = sanitizeInput($_POST['name'] ?? '');
    $email = sanitizeInput($_POST['email'] ?? '');
    $phone = sanitizeInput($_POST['phone'] ?? '');
    $course = sanitizeInput($_POST['course'] ?? '');
    $message = sanitizeInput($_POST['message'] ?? '');
    
    // Validate inputs
    $errors = validateForm($name, $email, $phone, $course);
    
    if (empty($errors)) {
        // Use prepared statement to prevent SQL injection
        $stmt = $conn->prepare("INSERT INTO leads (name, email, phone, course, message) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $name, $email, $phone, $course, $message);
        
        if ($stmt->execute()) {
            $response['success'] = true;
            $response['message'] = 'Your registration has been successfully submitted!';
        } else {
            $response['message'] = 'Error: ' . $stmt->error;
        }
        
        $stmt->close();
    } else {
        $response['errors'] = $errors;
        $response['message'] = 'Please correct the errors in your form';
    }
} else {
    // Not a POST request
    $response['message'] = 'Invalid request method. Only POST requests are allowed.';
    http_response_code(405); // Method Not Allowed
}

// Return JSON response
echo json_encode($response);
exit;

// Helper functions
function sanitizeInput($data) {
    global $conn;
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $conn->real_escape_string($data);
}

function validateForm($name, $email, $phone, $course) {
    $errors = [];
    
    if (empty($name)) {
        $errors['name'] = 'Name is required';
    }
    
    if (empty($email)) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Please enter a valid email address';
    }
    
    if (empty($phone)) {
        $errors['phone'] = 'Phone number is required';
    }
    
    if (empty($course)) {
        $errors['course'] = 'Please select a course';
    }
    
    return $errors;
}
?>
