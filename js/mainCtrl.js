console.log("mainCtrl")

var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope) {
	$scope.name = "YAAAAY";
	$scope.friends = ["James Earl Jones", "Princess Buttercup", "Emma Watson", "Morgan Freeman"]

$scope.adder = function(){
	console.log($scope.newFriend)
	$scope.friends.push($scope.newFriend);
	console.log($scope.friends)
}


});

//Roman Gaurdens
//// -Paper contract is there.  
//Move in Date is the 27th. Between 24th-27th.
//
