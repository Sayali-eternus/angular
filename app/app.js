var app = angular.module("myApp", ["ngRoute"]);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    
    .when("/assignment1", {
        templateUrl : "assignments/assignment1.html",
      
    })
    .when("/assignment2", {
        templateUrl : "assignments/assignment2.html",
        controller : "CalculatorController"
    })
     .when("/assignment3", {
        templateUrl : "assignments/assignment3.html",
        controller : "employeeCtrl"
    })
    .when("/assignment4", {
        templateUrl : "assignments/assignment4.html",
        controller : "nameController"
    })
     .when("/assignment5", {
        templateUrl : "assignments/assignment5.html",
        controller : "tableController"
    })
    .when("/assignment6", {
        templateUrl : "assignments/assignment6.html",
        controller : "app.invoice"
    });
}]);
