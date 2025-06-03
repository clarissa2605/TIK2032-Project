<?php
$koneksi = new mysqli("localhost", "root", "", "your_portfolio_db");
if ($koneksi->connect_error) {
    die("Koneksi gagal: " . $koneksi->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $koneksi->real_escape_string($_POST['name']);
    $email = $koneksi->real_escape_string($_POST['email']);
    $message = $koneksi->real_escape_string($_POST['message']);

    $sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($koneksi->query($sql) === TRUE) {
        echo "<script>
            alert('Terima kasih telah mengirimkan pesan, Clarissa akan membalas secepatnya');
            window.location.href = 'contact.php';
        </script>";
    } else {
        echo "Query gagal: " . $koneksi->error;
    }
}
?>
