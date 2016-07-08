angular.module('Home')

.controller('HomeController', function ($scope, HomeService) {
	$scope.properties = HomeService.getPropertiesByUser('teste@lello.com.br');
	console.log("HomeController");
})
;