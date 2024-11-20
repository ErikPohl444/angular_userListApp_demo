var userListApp = angular.module("userListApp", []);

userListApp.controller("userListCont", function($scope, $http) {
	$http.get("https://jsonplaceholder.typicode.com/users")
  .success(function(result) {
  	$scope.users = result;
  });
});