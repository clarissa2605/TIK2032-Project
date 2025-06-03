<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio - Blog</title>
<link rel="stylesheet" href="styles.css">
</head>
<body class="blog-page" id="blog-page">
<nav class="top-nav">
<ul>
<li><a href="index.html">Home</a></li>
<li><a href="gallery.html">Gallery</a></li>
<li><a href="blog.php">Blog</a></li> 
<li><a href="contact.php">Contact</a></li>
</ul>
</nav>
<main>
<section>
<h1>Article of my achievements</h1>
<?php
// Database connection details - UPDATE THESE
$servername = "localhost";
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "your_portfolio_db"; // The database name you created
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Fetch articles from the database, ordered by article_date in descending order
        $sql = "SELECT title, article_date, content FROM articles ORDER BY article_date DESC";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<article>";
                echo "<h2>" . htmlspecialchars($row["title"]) . "</h2>";
                // Format the date for display
                echo "<p><strong>Date: " . date("F d, Y", strtotime($row["article_date"])) . "</strong></p>";
                // The content is already HTML, so output directly without htmlspecialchars
                echo "<p>" . $row["content"] . "</p>";
                echo "</article>";
            }
        } else {
            echo "<p>No articles found.</p>";
        }
        $conn->close();
        ?>
    </section>
</main>
<footer class="site-footer">
    <div class="footer-content">
        <p>Halaman ini adalah profil singkat saya, dan dibuat untuk memenuhi tugas Pemrograman Web</p>
        <p>Copyright 2025 Clarissa. All Right Reserved.</p>
    </div>
</footer>
<script src="interact.js"></script>
</body>
</html>
