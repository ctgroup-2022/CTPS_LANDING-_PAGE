<?php
// Database configuration
// For production, update these values with your actual database credentials
$db_config = [
    'host' => 'localhost',      // Change to your database host (e.g., db.example.com)
    'username' => 'root',       // Change to your database username
    'password' => '',           // Change to your database password
    'dbname' => 'registration_db'  // Your database name
];

// Create connection
$conn = new mysqli(
    $db_config['host'], 
    $db_config['username'], 
    $db_config['password']
);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database if not exists
$sql = "CREATE DATABASE IF NOT EXISTS " . $db_config['dbname'];
if ($conn->query($sql) !== TRUE) {
    die("Error creating database: " . $conn->error);
}

// Select the database
$conn->select_db($db_config['dbname']);

// Create leads table if not exists
$sql = "CREATE TABLE IF NOT EXISTS leads (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    course VARCHAR(100) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql) !== TRUE) {
    die("Error creating table: " . $conn->error);
}
?>
