<?php



$servername = "localhost";
$username = "root";
$password = "Asdf@1234";
$dbname = "gmshop";
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " .$conn->connect_error);
}


?>
