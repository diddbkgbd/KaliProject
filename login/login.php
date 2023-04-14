
<?php

$conn=mysqli_connect("localhost","root","root","angularjs");

$array = json_decode(file_get_contents("php://input"));

if($array){
    $username = mysqli_real_escape_string($conn,$array->username);
    $password = mysqli_real_escape_string($conn,$array->password);
    $btnName = $array->btnName;
    $adminuser = "admin";
    $adminpass = "admin";
    if($btnName=="login"){
        $query = "select user,pass from signup";
        $result = mysqli_query($conn,$query)
        if($username==$adminuser && $password ==$adminpass){
            echo json_encode(array("event"=>"Начало чемпионата России","date"=>"13.07.2013"));;
        }
        while($r=mysqli_fetch_array($result)){
            $user = $r['user'];
            $pass=$r['pass'];
            if($username==$user && $password==$pass){
                echo "Login Successful"
                exit()
            }
        }
        if($username!=$adminuser || $password !=$adminpass){
            echo "Login Unsuccessful";
        }
    }
    if($btnName=="sign up"){
        $query2 = "Insert into signup(user,pass values('$username','$password')";
        if (mysqli_query($conn,$query2)){
            echo "Congratulations, your account has been Successesfully created";
        }
        else{
            echo"Username already exists. Use the different Username"
        }
    }
}
?>