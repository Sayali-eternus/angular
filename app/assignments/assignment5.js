       
angular.module('myApp')
    .controller('tableController', function($scope) {
   $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
}
$scope.reset = function(form) {
     form.$setPristine();
     form.$setUntouched();
     $scope.resetCount++;
 };
    });
   