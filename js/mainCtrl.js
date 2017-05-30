var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {

$scope.friends = ["Rico", "Dan", "Gary"];

$scope.addFriend = function() {
  $scope.friends.push($scope.newFriend);
  $scope.newFriend = " ";
};

$scope.removeFriend = function() {
  var i = $scope.friends.indexOf($scope.newFriend);
  $scope.friends.splice(i, 1);
};



});
