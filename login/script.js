
data = [
    {"username":"admin",
    "pass":"admin"}
]
// localStorage.clear()    
localStorage.setItem("login", JSON.stringify(data));

var app = angular.module("myApp", [])
app.controller("myCtrl",function($scope,$http,$window){
    $scope.btnName - "Логин";
    $scope.showsignup = false;
    $scope.showlogin=true;
    $scope.signuppage = function(){
        $scope.showsignup = $scope.showsignup? false :true;
        $scope.showlogin = false ;
        $scope.btnName = "Войти"
        $scope.signupform.$setPristine();
        $scope.username = null;
        $scope.password- null;
    }
    $scope.loginpage = function(){
        $scope.showlogin  = $scope.showlogin? false :true;
        $scope.showsignup = false ;
        $scope.btnName = "Логин"
        $scope.signupform.$setPristine();
        $scope.username = null;
        $scope.password- null;
        $scope.cpassword- null;    
    }
    $scope.login = function(){
        // console.log("login f");
        if($scope.btnName =="Войти"){
            if($scope.username != null && $scope.password != null && $scope.cpassword != null){
                $scope.postf();
            }
        }
        if($scope.btnName == "Логин"){
            // console.warn("loginlogin")
                if($scope.username != null && $scope.password != null){
                    $scope.postf();
            }
        }
    }
       
        $scope.postf = function(){
          let data = JSON.parse(localStorage.getItem("login")); 
        //   console.log(data)
            if($scope.btnName == "Логин" ){
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
           
        
             if( $scope.btnName == "Войти" ){
                data.forEach(e => {
                    if(e.username==$scope.username && e.pass==$scope.password){              
                        alert("Ваш аккаунт уже создан!")
                        return
                    }
                    else{
                        let newmember = {
                            "username":$scope.username,
                            "pass":$scope.password
                        }
                        data.push(newmember)
                        // console.log(data)
                        localStorage.setItem("login", JSON.stringify(data));
                        alert ("Ваш аккаунт создан, войдите в аккаунт!")
                    }
                })   
            }
        }
    
    
    

});
  
