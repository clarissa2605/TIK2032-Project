<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio - Contact</title>
<link rel="stylesheet" href="styles.css">
<script src="interact.js" defer></script>
</head>
<body class="contact-page" id="contact-page">
<div class="top-nav">
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="blog.php">Blog</a></li> 
            <li><a href="contact.php">Contact</a></li>
        </ul>
    </nav>
</div>

<div class="contact-container">
    <h1 class="contact-title">Contact <span>Me</span></h1>

    <form class="contact-form" action="submit_contact.php" method="POST">
        <input type="text" name="name" placeholder="Your name" required>
        <input type="email" name="email" placeholder="Email Address..." required>
        <textarea name="message" placeholder="Write Message Here." rows="8" required></textarea>
        <button type="submit" class="send-button">Send Message</button>
    </form>

    <div class="social-contact">
        <h2>My social contact:</h2>
        <div class="social-links">
            <div class="social-card">
                <a href="<https://instagram.com/clarissasherylnm>" target="_blank">
                    <i class="social-icon instagram"></i>
                    @clarissasherylnm
                </a>
            </div>
            <div class="social-card">
                <a href="<https://www.linkedin.com/in/clarissa-maramis-5b1461338/>" target="_blank">
                    <i class="social-icon linkedin"></i>
                    Clarissa Maramis
                </a>
            </div>
            <div class="social-card">
                <a href="https://mail.google.com/mail/?view=cm&to=clarissamaramis26@gmail.com&su=Website%20Inquiry&body=Hello%20Clarissa%2C%0A%0AI%20found%20your%20website%20and%20would%20like%20to%20connect%20with%20you.">
                    <i class="social-icon email"></i>
                    clarissamaramis@gmail.com
                </a>
            </div>
                </a>
            </div>
        </div>
    </div>
</div>
<footer class="site-footer">
    <div class="footer-content">
        <p>Halaman ini adalah profil singkat saya, dan dibuat untuk memenuhi tugas Pemrograman Web</p>
        <p>Copyright 2025 Clarissa. All Right Reserved.</p>
    </div>
</footer>
</body>
</html>