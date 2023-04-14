
// data = [
//     {"username":"admin",
//     "pass":"admin"}
// ]
// // localStorage.clear()    
// localStorage.setItem("login", JSON.stringify(data));

var app = angular.module("myApp", [])
app.controller("myCtrl",function($scope,$http,$window){
    $scope.btnName - "login";
    $scope.showsignup = false;
    $scope.showlogin=true;
    $scope.signuppage = function(){
        $scope.showsignup = $scope.showsignup? false :true;
        $scope.showlogin = false ;
        $scope.btnName = "sign up"
        $scope.signupform.$setPristine();
        $scope.username = null;
        $scope.password- null;
    }
    $scope.loginpage = function(){
        $scope.showlogin  = $scope.showlogin? false :true;
        $scope.showsignup = false ;
        $scope.btnName = "login"
        $scope.signupform.$setPristine();
        $scope.username = null;
        $scope.password- null;
        $scope.cpassword- null;    
    }
    $scope.login = function(){
        console.log("login f");
        if($scope.btnName =="sign up"){
            if($scope.username != null && $scope.password != null && $scope.cpassword != null){
                $scope.postf();
            }
        }
        if($scope.btnName == "login"){
            console.warn("loginlogin")
                if($scope.username != null && $scope.password != null){
                    $scope.postf();
            }
        }
    }
       
        $scope.postf = function(){
          let data = JSON.parse(localStorage.getItem("login")); 
          console.log(data)
            if($scope.btnName == "login" ){
                data.forEach(e => {
                    if(e.username=="admin" && e.pass=="admin"){              
                        $window.location.reload()
                        location='../adminlist.html '
                        return
                    }
                    if(e.username==$scope.username && e.pass==$scope.password){              
                        $window.location.reload()
                        location='../index.html '
                        return
                    }
                })
               
            }             
           
        
             if( $scope.btnName == "sign up" ){
                data.forEach(e => {
                    if(e.username==$scope.username && e.pass==$scope.password){              
                        alert("Your account habe been already creatced!")
                        return
                    }
                    else{
                        let newmember = {
                            "username":$scope.username,
                            "pass":$scope.password
                        }
                        data.push(newmember)
                        console.log(data)
                        localStorage.setItem("login", JSON.stringify(data));
                        alert ("Login sccessesful!")
                    }
                })   
            }
        }
    
    
    

});
  
//     $scope.postf = function(){
//         var request = $http({
//             method: "get",
//             url: "test.php",
//             data: {
//                 email: $scope.username,
//                 password: $scope.password
//             },
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//         });
//         /* Successful HTTP post request or not */
//         request.then(function (data) {
//             data = JSON.stringify(data)
//             if(data == "1"){
//                 alert("success!!!")
//                 $scope.responseMessage = "Successfully Logged In";
//             }
//             else {
//                 alert("Not success!!!")
//                 console.log(data)
//                 $scope.responseMessage = "Username or Password is incorrect";
//             }
//         });
//     }
// });

        // $http.post(
        //     'login.php',{
           
        //     'username':$scope.username,
        //     'password':$scope.password,
        //     'btnName':$scope.btnName
        //     }
        // ).then(function(response)
        // {
        //         alert(response)
        //         if(response =="Username already exists. Use the different Username"){
        //             return;
        //         }
        //         $window.location.reload()
        //         if(response=="Login Successful"){
        //             location='WebTeach.html '
        //         }
        // })



        // $http({
        //     url:'login.php',
        //     data : {
        //         'username':$scope.username,
        //         'password':$scope.password,
        //         'btnName':$scope.btnName
        //     },
        //     method : 'Post'
        // }).then(function(response){
        //         console.log("success")
        //         console.log(response);
        //         if(response =="Username already exists. Use the different Username"){
        //             return;
        //         }
        //         $window.location.reload()
        //         if(response=="Login Successful"){
        //             location='WebTeach.html '
        //         }
        // });
        // ,function(error){
        //     console.log("ERROR!"+ error);
        // }
    

//     }
// })
