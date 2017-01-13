var app = angular.module('myApp');
app.controller('app.invoice', ['$scope', invoice]);

function invoice($scope) {
    $scope.items = [{
        select:false,
        name: 'Pizza',   
        price: 800
    },
    
     {
       select:false,
        name: 'Burgar',
        price: 400
    },
     {
        select:false,
        name: 'Sandwitch',
        price: 200
    }];
    $scope.invoiceTotal = 0;
    $scope.setTotals = function(item){
        if (item.select){
            item.total =  item.price;
            $scope.invoiceTotal += item.total;
        }
        else
        {
             item.total =  item.price;
       
            $scope.invoiceTotal -= item.total;
        }
        
    };
  //  $scope.setTotals();
}


