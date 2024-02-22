<?php
$server="localhost";
$username="root";
$password="";

$con = mysqli_connect($server ,$username, $password);

if(!$con){
    die("connection to this database failed".mysqli_connect_error());
}
echo "success connecting to database"; 

$sql= "CREATE DATABASE IF NOT EXISTS userlogdb";
mysqli_query($con,$sql) or die(mysqli_error($con));
// echo "Database created successfully!<br>";

$select_db = mysqli_select_db($con,"userlogdb");
if (!$select_db) {
    die ("Could not select the database: ".mysqli_error($con));
    }

$tableName='users';
$createTableSQL = 'CREATE TABLE '.$tableName.' (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(30), password VARCHAR(15))';

$createTableSQL = 'CREATE TABLE '.$tableName.' (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(30), password VARCHAR(15))';

if (mysqli_query($con, $createTableSQL)) {
    echo "Table $tableName created successfully<br>";
} else {
    echo "Error creating table: " . mysqli_error($con)."<br>";
}
?>
<!DOCTYPE html>
<html lang="Javascript">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Tech article-login</title>
    <style>
        .input::placeholder,
        textarea::placeholder {
            color: white;
        }
    </style>
</head>

<body>
    <div class="w-full flex h-screen justify-center bg-[url('login-bg.png')] object-cover bg-no-repeat object-center">
        <div class="w-[35%] flex flex-col border-2 backdrop-blur border-white border-transparent rounded-md h-[70%] mt-20 ">
            <form action="/index.html" method="post" onsubmit="return validateForm()">
                <h2 class="text-xl mt-4 ml-[196px] font-bold">Login</h2>
                <p class="text-md ml-16 mt-4">Email</p>
                <input class="w-[325px] h-[26px] px-3 py-5 bg-transparent  border-2 rounded-full  ml-16" type="email"
                    name="email" id="email" placeholder="Your Email" required>
                <p class="text-md mt-3 ml-16">Password</p>
                <input class="w-[325px] h-[26px] border-2 px-3 py-5 bg-transparent  rounded-full ml-16 " type="password"
                    placeholder="Your Password" name="password" id="password" required>
                <div class="flex ml-16 mt-4">
                    <input type="checkbox" name="Remember" id="Remember">
                    <p class="ml-1 font-medium">Remember me</p>
                </div>
                <div class="text-center mt-4">
                    <input class="border-2 w-[325px]  h-auto px-3 py-4 hover:bg-purple-800 bg-purple-700 border-white rounded-[30px]"
                        type="submit" value="Submit">
                </div>
                <a class="text-white text-decoration-none" href="Adminlogin.html">
                    <p class="text-xs ml-36 mt-5">Admin login ? Login here</p>
                </a>
            </form>
        </div>
    </div>
</body>

</html>
