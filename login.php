<?php
// Conectare la baza de date
$servername = "localhost";
$username = "root"; // default username pentru MySQL
$password = "1111";     // default password pentru MySQL (fără parolă)
$dbname = "tw proiect"; // numele bazei de date

// Creare conexiune
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificare conexiune
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obținerea datelor din formular
    $admin_name = $_POST['admin_name'];
    $admin_password = $_POST['admin_password'];

    // Securizarea datelor (evităm SQL injection)
    $admin_name = $conn->real_escape_string($admin_name);
    $admin_password = $conn->real_escape_string($admin_password);

    // Verificarea utilizatorului în baza de date
    $sql = "SELECT * FROM users WHERE username='$admin_name' AND password_hash='$admin_password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Autentificare reușită
        echo "Login successful!";
        // Poți redirecționa utilizatorul către o altă pagină
        // header("Location: homepage.php");
    } else {
        // Autentificare eșuată
        echo "Invalid credentials!";
    }
}

// Închidem conexiunea
$conn->close();
?>
