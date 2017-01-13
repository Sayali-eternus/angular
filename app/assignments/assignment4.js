
var mainApp = angular.module("myApp");
         
         mainApp.controller('nameController', function($scope) {
            $scope.student = {
               firstName: "",
               lastName: "",
               fees:0,
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
         });