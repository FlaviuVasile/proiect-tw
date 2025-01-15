<?php
// Conectare la baza de date
$servername ="localhost";
$username = "root";  // Utilizatorul implicit al MySQL
$password = "1111";      // Parola implicită pentru MySQL
$dbname = "tw proiect"; // Numele bazei de date

// Crează conexiunea
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifică conexiunea
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Verifică dacă formularul a fost trimis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Colectează și curăță datele din formular
    $name = mysqli_real_escape_string($conn, $_POST['admin_name']);
    $app_name = mysqli_real_escape_string($conn, $_POST['app_name']);
    $email = mysqli_real_escape_string($conn, $_POST['admin_email']);
    $password = $_POST['new_password']; // Parola trimisă
    $confirm_password = $_POST['confirm_password']; // Confirmarea parolei

    // Verifică dacă parolele coincid
    if ($password !== $confirm_password) {
        echo "Parolele nu se potrivesc!";
        exit;
    }

    // Criptarea paroleis
    $password_hash = password_hash($password, PASSWORD_DEFAULT);

    // Inserarea datelor în baza de date
    $sql = "INSERT INTO users (name, username, email, password_hash) VALUES ('$name', '$app_name', '$email', '$password_hash')";

    if ($conn->query($sql) === TRUE) {
        echo "Înregistrare reușită!";
    } else {
        echo "Eroare: " . $sql . "<br>" . $conn->error;
    }
    
    // Închide conexiunea
    $conn->close();
}
?>
