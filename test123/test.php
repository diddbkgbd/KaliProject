
<?php

$conn=mysqli_connect("localhost","root","root","angularjs");

$array = json_decode(file_get_contents("php://input"));

if($array){
    $username = mysqli_real_escape_string($conn,$array->username);
    $password = mysqli_real_escape_string($conn,$array->password);
    $query = "select user,pass from signup";
    $result = mysqli_query($conn,$query)

    $outp = "";
    while($r=mysqli_fetch_array($result)){
        // $user = $r['user'];
        // $pass=$r['pass'];
        $outp .= '{"Name":"'

    }
    $outp ='{"records":['.$outp.']}';

}
else{
    echo"123"
}

?>