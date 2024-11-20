var userListApp = angular.module("userListApp", []);

userListApp.controller("userListCont", function($scope, $http) {
	$http.get("https://jsonplaceholder.typicode.com/users")
  .success(function(result) {
  	$scope.users = result;
  });
  
  $scope.current={
  	name: "Ethan Eron",
    email: "ethan@exactivate.com",
    phone: "1-703-868-9507",
    website: "exactivate.com"
  };
});