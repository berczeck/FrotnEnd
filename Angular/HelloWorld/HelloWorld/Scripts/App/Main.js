var app = angular.module('HelloWorld', []);

var MainController = function ($scope) {
    $scope.subject = 'Hello World!!!';
    $scope.description = 'Description Hello World!!!';
    $scope.double = function(value) { return value * 2; };
}

app.controller('MainController', ['$scope',MainController]);