'use strict';

// angular.module('myApp.register', ['ngRoute'])

// // Declared route
// .config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/register', {
//         templateUrl: 'register/register.html',
//         controller: 'RegisterCtrl'
//     });
// }])

// // Register controller
// .controller('RegisterCtrl', [function() {

// }]);

angular.module('myApp.home', ['ngRoute','firebase'])
$scope.SignIn = function(event) {
    event.preventDefault(); // предотвращаем перезагрузку страницы
    var username = $scope.user.email;
    var password = $scope.user.password;
    loginObj.$login('password', {
        email: username,
        password: password
    })
        .then(function(user) {
            // колбэк запустится при успешной аутентификации аутентификацииSuccess callback
            console.log('Authentication successful');
        }, function(error) {
            // колбэк при неудаче
            console.log('Authentication failure');
        });
}
var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com");


myApp.home.controller('HomeCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
    var loginObj = $firebaseSimpleLogin(firebaseObj);
}])