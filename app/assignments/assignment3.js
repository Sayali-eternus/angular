angular.module('myApp').controller('employeeCtrl', function($scope) {
    $scope.details = [
        {id:1,name:'Sayali',technology:'Java'},
        {id:2,name:'Anu',technology:'DataBase'},
        {id:5, name:'Bharti',technology:'MongoDb'},
        {id:3,name:'Sahil',technology:'DOT.NET'},
        {id:7,name:'Rohit',technology:'Oracle'},
        {id:9,name:'Keshaw',technology:'C#'},
        {id:4,name:'Aslam',technology:'JS'},
        {id:7,name:'Ritu',technology:'Html'},
        {id:6,name:'Reva',technology:'Css'}
        ];
    $scope.orderByMe = function(detail) {
        $scope.myOrderBy = detail;
    }
});