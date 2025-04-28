<?php
require_once 'config.php';

// Initialize response array
$response = [
    'success' => false,
    'message' => '',
    'errors' => []
];

// Check if it's an AJAX request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Determine form type
    $formType = isset($_POST['form_type']) ? $_POST['form_type'] : '';
    
    if ($formType === 'contact') {
        // Process contact form
        $name = sanitizeInput($_POST['name'] ?? '');
        $email = sanitizeInput($_POST['email'] ?? '');
        $phone = sanitizeInput($_POST['phone'] ?? '');
        $subject = sanitizeInput($_POST['subject'] ?? '');
        $message = sanitizeInput($_POST['message'] ?? '');
        
        // Validate inputs
        $errors = validateContactForm($name, $email, $phone, $subject, $message);
        
        if (empty($errors)) {
            // Insert into database
            $sql = "INSERT INTO contact_form (name, email, phone, subject, message) 
                    VALUES ('$name', '$email', '$phone', '$subject', '$message')";
            
            if ($conn->query($sql) === TRUE) {
                $response['success'] = true;
                $response['message'] = 'Your message has been sent successfully!';
            } else {
                $response['message'] = 'Error: ' . $conn->error;
            }
        } else {
            $response['errors'] = $errors;
            $response['message'] = 'Please fix the errors in your form';
        }
    } 
    elseif ($formType === 'application') {
        // Process application form
        $student_name = sanitizeInput($_POST['student_name'] ?? '');
        $parent_name = sanitizeInput($_POST['parent_name'] ?? '');
        $email = sanitizeInput($_POST['email'] ?? '');
        $phone = sanitizeInput($_POST['phone'] ?? '');
        $grade = sanitizeInput($_POST['grade'] ?? '');
        $message = sanitizeInput($_POST['message'] ?? '');
        
        // Validate inputs
        $errors = validateApplicationForm($student_name, $parent_name, $email, $phone, $grade);
        
        if (empty($errors)) {
            // Insert into database
            $sql = "INSERT INTO applications (student_name, parent_name, email, phone, grade, message) 
                    VALUES ('$student_name', '$parent_name', '$email', '$phone', '$grade', '$message')";
            
            if ($conn->query($sql) === TRUE) {
                $response['success'] = true;
                $response['message'] = 'Your application has been submitted successfully!';
            } else {
                $response['message'] = 'Error: ' . $conn->error;
            }
        } else {
            $response['errors'] = $errors;
            $response['message'] = 'Please fix the errors in your form';
        }
    }
    elseif ($formType === 'registration') {
        // Process registration form
        $name = sanitizeInput($_POST['name'] ?? '');
        $email = sanitizeInput($_POST['email'] ?? '');
        $phone = sanitizeInput($_POST['phone'] ?? '');
        $password = sanitizeInput($_POST['password'] ?? '');

        // Validate inputs
        $errors = validateRegistrationForm($name, $email, $phone, $password);

        if (empty($errors)) {
            // Hash the password
            $password_hash = password_hash($password, PASSWORD_DEFAULT);

            // Insert into database
            $sql = "INSERT INTO registrations (name, email, phone, password_hash) 
                    VALUES ('$name', '$email', '$phone', '$password_hash')";

            if ($conn->query($sql) === TRUE) {
                $response['success'] = true;
                $response['message'] = 'Registration successful!';
            } else {
                $response['message'] = 'Error: ' . $conn->error;
            }
        } else {
            $response['errors'] = $errors;
            $response['message'] = 'Please fix the errors in your form';
        }
    }
    
    // Return JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

// Helper functions
function sanitizeInput($data) {
    global $conn;
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $conn->real_escape_string($data);
}

function validateContactForm($name, $email, $phone, $subject, $message) {
    $errors = [];
    
    if (empty($name)) {
        $errors['name'] = 'Name is required';
    }
    
    if (empty($email)) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Valid email is required';
    }
    
    if (empty($phone)) {
        $errors['phone'] = 'Phone number is required';
    }
    
    if (empty($subject)) {
        $errors['subject'] = 'Subject is required';
    }
    
    if (empty($message)) {
        $errors['message'] = 'Message is required';
    }
    
    return $errors;
}

function validateApplicationForm($student_name, $parent_name, $email, $phone, $grade) {
    $errors = [];
    
    if (empty($student_name)) {
        $errors['student_name'] = 'Student name is required';
    }
    
    if (empty($parent_name)) {
        $errors['parent_name'] = 'Parent name is required';
    }
    
    if (empty($email)) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Valid email is required';
    }
    
    if (empty($phone)) {
        $errors['phone'] = 'Phone number is required';
    }
    
    if (empty($grade)) {
        $errors['grade'] = 'Grade is required';
    }
    
    return $errors;
}

function validateRegistrationForm($name, $email, $phone, $password) {
    $errors = [];

    if (empty($name)) {
        $errors['name'] = 'Name is required';
    }

    if (empty($email)) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Valid email is required';
    }

    if (empty($phone)) {
        $errors['phone'] = 'Phone number is required';
    }

    if (empty($password)) {
        $errors['password'] = 'Password is required';
    } elseif (strlen($password) < 6) {
        $errors['password'] = 'Password must be at least 6 characters';
    }

    return $errors;
}
?>
