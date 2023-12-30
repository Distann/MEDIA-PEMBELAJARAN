<?php
$servername = "localhost";
$database = "belajar";
$username = "root";
$password = "";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $database);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Menghilangkan pesan "Koneksi berhasil" pada file koneksi.php
?>
