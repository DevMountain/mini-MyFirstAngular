angular.module("friendsList")
.controller("mainCtrl", function($scope){

$scope.name = "Thai";
$scope.friends = ["Thai", "chipi", "luke", "Mike"];

$scope.newFriends = function(name){
  $scope.friends.push(name);

};

});
