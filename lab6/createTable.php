<?php
$servername = "localhost";
$username = "jayantaadhikary";
$password = "";
$database = "jayantaadhikary";
$tableName = "studentdb";

//Create connection
$conn = new mysqli($servername, $username, $password);

//Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Select the database
$conn->select_db($database);

//Create table
$sql = "CREATE TABLE `$tableName` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  age INT,
  gender VARCHAR(10),
  phone VARCHAR(15),
  email VARCHAR(100)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error creating Table: " . $conn->error;
}

$conn->close();
?>