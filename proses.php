<?php
require 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Gunakan parameterized statement untuk mencegah SQL injection
    $sql = "SELECT * FROM users WHERE username=? AND password=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Login successful, redirect to belajar.html
        header("Location: belajar.html");
        exit();
    } else {
        echo "Login failed. Invalid username or password.";
    }

    $stmt->close();
}

$conn->close();
?>
