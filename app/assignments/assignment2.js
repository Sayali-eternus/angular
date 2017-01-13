var app = angular.module('myApp');

app.service('Calculator', function () {

	this.factorial=function(a){
		if (a < 0) {
			return -1;
		}
		else if (a == 0) {
			return 1;
		}
		else {
			return (a * this.factorial(a - 1));
		}
	}
});
app.controller('CalculatorController', function ($scope, Calculator) {
  
	$scope.resultfactorial = function () {
        $scope.result = Calculator.factorial($scope.a);
    }
});