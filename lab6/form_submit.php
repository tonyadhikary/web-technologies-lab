<html>

<body>
    <h1>Form Submitted</h1>
    <h2>Welcome
        <?php echo $_POST["fname"] ?>
    </h2>
    <h3>Your Email Address is:
        <?php echo $_POST["email"] ?>
    </h3>
    <?php
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";

    $servername = "localhost";
    $username = "jayantaadhikary";
    $password = "";
    $dbname = "jayantaadhikary";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    }
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $gender = $_POST["gender"];
    $age = $_POST["age"];
    $sql = "INSERT INTO studentdb (fname, lname, age, gender, email, phone) VALUES ('$fname', '$lname', '$age', '$gender', '$email', '$phone')";

    if (mysqli_query($conn, $sql)) {
        echo "New Record Created Successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);

    ?>
</body>

</html>