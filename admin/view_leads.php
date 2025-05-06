<?php
// Basic authentication (consider using more secure methods in production)
$username = "admin";
$password = "secure_password"; // Change this!

// Simple authentication check
if (!isset($_SERVER['PHP_AUTH_USER']) || 
    $_SERVER['PHP_AUTH_USER'] != $username || 
    $_SERVER['PHP_AUTH_PW'] != $password) {
    header('WWW-Authenticate: Basic realm="Admin Area"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Access Denied';
    exit;
}

// Database connection
require_once '../backend/db_config.php';
$conn = new mysqli($db_config['host'], $db_config['username'], $db_config['password'], $db_config['dbname']);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to get all leads
$result = $conn->query("SELECT * FROM leads ORDER BY created_at DESC");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leads Management - Admin</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background-color: #fff;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        }
        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f8f8f8;
            font-weight: bold;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
        .empty-state {
            text-align: center;
            padding: 40px;
            color: #777;
        }
        .actions {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .search-box {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 300px;
        }
    </style>
</head>
<body>
    <h1>Leads Management</h1>
    
    <div class="actions">
        <div>
            <input type="text" id="searchInput" class="search-box" placeholder="Search leads..." onkeyup="searchTable()">
        </div>
        <div>
            <button onclick="exportToCSV()">Export to CSV</button>
        </div>
    </div>
    
    <?php if ($result->num_rows > 0): ?>
        <table id="leadsTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Message</th>
                    <th>Submitted On</th>
                </tr>
            </thead>
            <tbody>
                <?php while ($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($row['id']); ?></td>
                        <td><?php echo htmlspecialchars($row['name']); ?></td>
                        <td><?php echo htmlspecialchars($row['email']); ?></td>
                        <td><?php echo htmlspecialchars($row['phone']); ?></td>
                        <td><?php echo htmlspecialchars($row['course']); ?></td>
                        <td><?php echo htmlspecialchars($row['message']); ?></td>
                        <td><?php echo htmlspecialchars($row['created_at']); ?></td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    <?php else: ?>
        <div class="empty-state">
            <p>No leads found. Your submissions will appear here.</p>
        </div>
    <?php endif; ?>

    <script>
        function searchTable() {
            const input = document.getElementById("searchInput");
            const filter = input.value.toUpperCase();
            const table = document.getElementById("leadsTable");
            const tr = table.getElementsByTagName("tr");
            
            for (let i = 1; i < tr.length; i++) {
                let found = false;
                const td = tr[i].getElementsByTagName("td");
                for (let j = 0; j < td.length; j++) {
                    const cell = td[j];
                    if (cell) {
                        const txtValue = cell.textContent || cell.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            found = true;
                            break;
                        }
                    }
                }
                tr[i].style.display = found ? "" : "none";
            }
        }
        
        function exportToCSV() {
            const table = document.getElementById("leadsTable");
            let csv = [];
            const rows = table.querySelectorAll("tr");
            
            for (let i = 0; i < rows.length; i++) {
                const row = [], cols = rows[i].querySelectorAll("td, th");
                for (let j = 0; j < cols.length; j++) {
                    let data = cols[j].innerText.replace(/"/g, '""');
                    row.push('"' + data + '"');
                }
                csv.push(row.join(","));
            }
            
            const csvFile = new Blob([csv.join("\n")], {type: "text/csv"});
            const downloadLink = document.createElement("a");
            downloadLink.download = "leads_" + new Date().toISOString().slice(0,10) + ".csv";
            downloadLink.href = window.URL.createObjectURL(csvFile);
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
            downloadLink.click();
        }
    </script>
</body>
</html>