<?php
/**
 * Database configuration settings
 */
$db_config = [
    'host' => 'localhost',
    'username' => 'ctpsadmin',
    'password' => 'HA2$,L@iE4%@',
    'dbname' => 'CTPS_Apply'
];

// Connect to the database
try {
    $conn = new mysqli($db_config['host'], $db_config['username'], $db_config['password']);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Create database if it doesn't exist
    $sql = "CREATE DATABASE IF NOT EXISTS " . $db_config['dbname'];
    if ($conn->query($sql) === TRUE) {
        echo "Database checked/created successfully<br>";
    } else {
        echo "Error creating database: " . $conn->error . "<br>";
    }
    
    // Select the database
    $conn->select_db($db_config['dbname']);
    
    // Define and create tables
    $tables = [
        "CREATE TABLE IF NOT EXISTS leads (
            id INT(11) AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            course VARCHAR(100) NOT NULL,
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )",
        
        "CREATE TABLE IF NOT EXISTS users (
            id INT(11) AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )",
        
        "CREATE TABLE IF NOT EXISTS applications (
            id INT(11) AUTO_INCREMENT PRIMARY KEY,
            user_id INT(11) NOT NULL,
            status VARCHAR(20) DEFAULT 'pending',
            submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )"
    ];
    
    // Execute each table creation query
    foreach ($tables as $table_query) {
        if ($conn->query($table_query) === TRUE) {
            echo "Table checked/created successfully<br>";
        } else {
            echo "Error creating table: " . $conn->error . "<br>";
        }
    }
    
    $conn->close();
    
} catch (Exception $e) {
    die("Database connection error: " . $e->getMessage());
}
?>
