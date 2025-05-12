<?php
// Make sure no errors or output leak before our JSON
ob_start();

// Enable error reporting for debugging
ini_set('display_errors', 1); // Temporarily enable for debugging
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Log errors to a file
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/form_errors.log');

// Set header to return JSON
header('Content-Type: application/json');

// Debug: Log received data
error_log("Form submission received: " . print_r($_POST, true));

try {
    // Validate required fields first
    $required_fields = ['name', 'email'];
    $errors = [];
    
    foreach ($required_fields as $field) {
        if (empty($_POST[$field])) {
            $errors[$field] = ucfirst($field) . ' is required';
        }
    }
    
    if (!empty($errors)) {
        ob_end_clean(); // Clear any output
        echo json_encode([
            'success' => false,
            'message' => 'Please fill in all required fields.',
            'errors' => $errors
        ]);
        exit;
    }
    
    // Create db_config.php with correct settings if it doesn't exist
    if (!file_exists(__DIR__ . '/db_config.php')) {
        $config_content = '<?php
/**
 * Database configuration settings
 */
$db_config = [
    "host" => "localhost",
    "username" => "ctpsadmin", 
    "password" => "HA2$,L@iE4%@",
    "dbname" => "CTPS_Apply"
];
?>';
        file_put_contents(__DIR__ . '/db_config.php', $config_content);
        error_log("Created default db_config.php file");
    }

    // Include database configuration
    require_once 'db_config.php';
    
    // Test MySQL server connection first without database
    $test_conn = @mysqli_connect($db_config['host'], $db_config['username'], $db_config['password']);
    if (!$test_conn) {
        throw new Exception("MySQL server connection failed. Please check if MySQL service is running in XAMPP. Error: " . mysqli_connect_error());
    }
    mysqli_close($test_conn);

    // Create database if it doesn't exist
    $conn_server = new mysqli($db_config['host'], $db_config['username'], $db_config['password']);
    if ($conn_server->connect_error) {
        throw new Exception("Server connection failed: " . $conn_server->connect_error);
    }
    
    // Check if database exists
    $result = $conn_server->query("SHOW DATABASES LIKE '{$db_config['dbname']}'");
    if ($result->num_rows == 0) {
        // Create database
        if (!$conn_server->query("CREATE DATABASE `{$db_config['dbname']}`")) {
            throw new Exception("Error creating database: " . $conn_server->error);
        }
        error_log("Created database {$db_config['dbname']}");
    }
    
    $conn_server->close();

    // Now connect to the specific database
    $conn = new mysqli($db_config['host'], $db_config['username'], $db_config['password'], $db_config['dbname']);

    // Check connection
    if ($conn->connect_error) {
        throw new Exception("Database connection failed: " . $conn->connect_error);
    }
    
    // Sanitize form inputs
    $name = $conn->real_escape_string($_POST['name'] ?? '');
    $email = $conn->real_escape_string($_POST['email'] ?? '');
    $phone = $conn->real_escape_string($_POST['phone'] ?? '');
    $course = $conn->real_escape_string($_POST['course'] ?? '');
    $message = $conn->real_escape_string($_POST['message'] ?? '');
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            'success' => false,
            'message' => 'Please enter a valid email address.',
            'errors' => ['email' => 'Invalid email format']
        ]);
        exit;
    }

    // Create a log file to record successful submissions for debugging
    $log_file = __DIR__ . '/successful_submissions.log';
    file_put_contents($log_file, date('Y-m-d H:i:s') . " - New submission: $name, $email, $phone, $course\n", FILE_APPEND);
    
    // Check if the leads table exists
    $tableExists = $conn->query("SHOW TABLES LIKE 'leads'")->num_rows > 0;
    
    if (!$tableExists) {
        // Create leads table if it doesn't exist based on hero.php form fields
        $createTableSQL = "CREATE TABLE `leads` (
            `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
            `name` VARCHAR(100) NOT NULL,
            `email` VARCHAR(100) NOT NULL,
            `phone` VARCHAR(20),
            `course` VARCHAR(50),
            `message` TEXT,
            `created_at` DATETIME NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";
        
        if (!$conn->query($createTableSQL)) {
            throw new Exception("Error creating leads table: " . $conn->error);
        }
        
        error_log("Created leads table successfully");
    }

    // Start transaction for better data integrity
    $conn->begin_transaction();

    // SQL query to insert data using prepared statement
    $stmt = $conn->prepare("INSERT INTO `leads` (`name`, `email`, `phone`, `course`, `message`, `created_at`) VALUES (?, ?, ?, ?, ?, NOW())");
    
    if (!$stmt) {
        throw new Exception("Prepare failed: " . $conn->error);
    }
    
    $stmt->bind_param("sssss", $name, $email, $phone, $course, $message);
    
    // Debug: Log the SQL query
    error_log("SQL Query: INSERT INTO leads with data: name=$name, email=$email, phone=$phone, course=$course");
    
    // Execute query
    if ($stmt->execute()) {
        // Get the insert ID for confirmation
        $insert_id = $conn->insert_id;
        
        // Commit the transaction
        $conn->commit();
        
        // Log the successful insert
        error_log("Record inserted successfully with ID: $insert_id");
        
        // Double-check that the record was inserted
        $check_query = $conn->query("SELECT * FROM `leads` WHERE `id` = $insert_id");
        if ($check_query && $check_query->num_rows > 0) {
            error_log("Verified: Record exists in database with ID: $insert_id");
        } else {
            error_log("Warning: Could not verify record with ID: $insert_id in database");
        }
        
        // Success response
        ob_end_clean(); // Clear any output
        echo json_encode([
            'success' => true,
            'message' => 'Thank you! Your application has been submitted successfully. We will contact you soon.',
            'id' => $insert_id
        ]);
    } else {
        // Rollback on error
        $conn->rollback();
        throw new Exception("Error inserting record: " . $stmt->error);
    }
    
    $stmt->close();
    $conn->close();
    
} catch (Exception $e) {
    // If there was a transaction in progress, roll it back
    if (isset($conn) && $conn instanceof mysqli && !$conn->connect_error) {
        $conn->rollback();
    }
    
    error_log("Form submission error: " . $e->getMessage());
    // Error response
    ob_end_clean(); // Clear any output
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage(),
        'debug' => $e->getMessage()
    ]);
}

// Make sure we terminate here to prevent any additional output
exit;
?>
