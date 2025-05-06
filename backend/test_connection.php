<?php
require_once 'db_config.php';

if ($conn) {
    echo "Connected successfully to database: " . $db_config['dbname'];
    echo "<br>Table 'leads' is ready to accept data.";
} else {
    echo "Connection failed: " . mysqli_connect_error();
}
?>