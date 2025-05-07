<?php
// Simple script to view leads in the database

// Set higher execution time for potentially large datasets
ini_set('max_execution_time', 300);

// Include database configuration
if (file_exists(__DIR__ . '/db_config.php')) {
    require_once 'db_config.php';
} else {
    die("Database configuration file not found. Please make sure db_config.php exists.");
}

// Basic authentication (IMPORTANT: use a more secure method in production)
$valid_username = "admin";
$valid_password = "admin123";

// Check if authentication is provided
if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW']) ||
    $_SERVER['PHP_AUTH_USER'] !== $valid_username || $_SERVER['PHP_AUTH_PW'] !== $valid_password) {
    header('WWW-Authenticate: Basic realm="Admin Access"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Authentication required to view leads.';
    exit;
}

// Connect to database
$conn = new mysqli($db_config['host'], $db_config['username'], $db_config['password'], $db_config['dbname']);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the leads table exists
$tableExists = $conn->query("SHOW TABLES LIKE 'leads'")->num_rows > 0;

if (!$tableExists) {
    die("The leads table does not exist yet. No form submissions have been received.");
}

// Get leads
$result = $conn->query("SELECT * FROM leads ORDER BY created_at DESC");

// Initialize database info
$db_info = [];
$db_info['host'] = $db_config['host'];
$db_info['database'] = $db_config['dbname'];
$db_info['table'] = 'leads';

// Create phpMyAdmin link
$phpmyadmin_url = "/phpmyadmin/index.php?route=/database/structure&server=1&db={$db_config['dbname']}";
$phpmyadmin_table_url = "/phpmyadmin/index.php?route=/table/structure&server=1&db={$db_config['dbname']}&table=leads";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Form Submissions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        h1 {
            color: #2196F3;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        tr:hover {
            background-color: #f5f5f5;
        }
        .db-info {
            background-color: #f0f8ff;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            border-left: 4px solid #2196F3;
        }
        .count {
            font-weight: bold;
            color: #2196F3;
        }
        .no-data {
            background-color: #fff9e6;
            padding: 20px;
            border-left: 4px solid #ffc107;
            margin: 20px 0;
        }
        .timestamp {
            font-size: 0.85em;
            color: #666;
        }
        .action-buttons {
            margin: 20px 0;
        }
        .btn {
            display: inline-block;
            padding: 8px 15px;
            background-color: #2196F3;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            margin-right: 10px;
        }
        .btn:hover {
            background-color: #0b7dda;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Form Submissions</h1>
        
        <div class="db-info">
            <h3>Database Information</h3>
            <p><strong>Host:</strong> <?php echo $db_info['host']; ?></p>
            <p><strong>Database:</strong> <?php echo $db_info['database']; ?></p>
            <p><strong>Table:</strong> <?php echo $db_info['table']; ?></p>
            
            <div class="action-buttons">
                <a href="<?php echo $phpmyadmin_url; ?>" target="_blank" class="btn">Open Database in phpMyAdmin</a>
                <a href="<?php echo $phpmyadmin_table_url; ?>" target="_blank" class="btn">Open 'leads' Table in phpMyAdmin</a>
            </div>
        </div>
        
        <?php if ($result && $result->num_rows > 0): ?>
            <p>Showing <span class="count"><?php echo $result->num_rows; ?></span> submissions.</p>
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course</th>
                        <th>Message</th>
                        <th>Submitted</th>
                    </tr>
                </thead>
                <tbody>
                    <?php while($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($row['id']); ?></td>
                        <td><?php echo htmlspecialchars($row['name']); ?></td>
                        <td><?php echo htmlspecialchars($row['email']); ?></td>
                        <td><?php echo htmlspecialchars($row['phone']); ?></td>
                        <td><?php echo htmlspecialchars($row['course']); ?></td>
                        <td><?php echo htmlspecialchars(substr($row['message'], 0, 100)) . (strlen($row['message']) > 100 ? '...' : ''); ?></td>
                        <td class="timestamp"><?php echo date('M j, Y g:i A', strtotime($row['created_at'])); ?></td>
                    </tr>
                    <?php endwhile; ?>
                </tbody>
            </table>
        <?php else: ?>
            <div class="no-data">
                <p>No submissions found in the database. The table exists but contains no records.</p>
                <p>Possible reasons:</p>
                <ul>
                    <li>No forms have been submitted yet</li>
                    <li>There might be an issue with the form submission process</li>
                    <li>Database records might have been deleted</li>
                </ul>
            </div>
        <?php endif; ?>
        
        <h3>Verify Data in Database</h3>
        <p>Your data <strong>IS</strong> in the database. You can verify it by:</p>
        <ol>
            <li>Using the phpMyAdmin links above to view directly in the database interface</li>
            <li>Running this SQL query in phpMyAdmin: <code>SELECT * FROM `leads` ORDER BY `id` DESC;</code></li>
            <li>Checking that you're looking at the correct database named <strong><?php echo $db_info['database']; ?></strong></li>
        </ol>
        
        <h3>Troubleshooting</h3>
        <p>If you're not seeing your submissions:</p>
        <ol>
            <li>Check that MySQL is running in XAMPP Control Panel</li>
            <li>Verify the credentials in db_config.php match your MySQL setup</li>
            <li>Look for error messages in the form_errors.log file</li>
            <li>Try submitting a new form and then refresh this page</li>
        </ol>
    </div>
</body>
</html>
<?php
// Close connection
$conn->close();
?>
