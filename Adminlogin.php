<?php
$server="localhost";
$username="root";
$password="";

$con = mysqli_connect($server ,$username, $password);

if(!$con){
    die("connection to this database failed".mysqli_connect_error());
}
echo "success connecting to database";

$email = $_POST['email'];
$password = $_POST['password'];
$sql= "SELECT * FROM users WHERE email='".$email."' AND password='".$password."' ";  //checking if the user is in our database with that specific email and password

//check if the user is already in the database
$sql= "SELECT * FROM users WHERE email='".$email."' AND password='".$password."' ";  //select query for search
$sql = "SELECT * FROM users WHERE email='".$email."' AND password= '".$password."' ";  //selecting data from table where condition matches
?>
<!DOCTYPE html>
<html lang="Javascript">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Tech article-Admin login</title>
</head>

<body>
    <div class="w-full flex h-screen justify-center bg-[url('login-bg.png')] object-cover bg-no-repeat object-center">
        <div class="w-[35%] flex flex-col border-2 backdrop-blur-md border-white border-transparent rounded-md h-[70%] mt-20 ">
            <form action="/index2.html" method="post" onsubmit="return validateForm()">
                <h2 class="text-xl mt-4 ml-[163px] font-bold"> Admin Login</h2>
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
                       onclick="myFunction()" type="submit" value="Submit">
                       <p id="demo"></p>
                </div>
                <a class="text-white text-decoration-none" href="Login.html">
                    <p class="text-xs ml-36 mt-5">User login ? Login here</p>
                </a>
            </form>
        </div>
    </div>
    <script>
        function myFunction(){
            alert('Welcome Admin')
        }
    </script>
</body>

</html>