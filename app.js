var app = angular.module("myApp", []);
app.controller('MainController', function($scope) {
$scope.items = [];
$scope.item = "";

  $scope.addClick = function() {
      console.log("button");
    $scope.items.push($scope.item);
    }

})
