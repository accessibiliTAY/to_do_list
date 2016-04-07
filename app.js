var app = angular.module("myApp", []);
app.controller('MainController', function($scope) {
$scope.items = [];
$scope.item = "";
// $scope.finish = "";
// $scope.finishs = [];

  $scope.addClick = function() {
      console.log("button");
    $scope.items.push($scope.item);
    $scope.item = "";
  };
    $scope.removeItem = function(){
      var index =
      console.log("remove it move it");
      $scope.items.splice(index,1);
    };
})
