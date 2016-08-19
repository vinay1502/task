var app = angular.module("MyApp", []);

app.controller("MyCtrl", ["$scope", function($scope) {
    $scope.message = 'Hello World';
    
    $scope.startRedLight = function () {

    }

    $scope.startYellowLight = function () {

    }

    $scope.startGreenLight = function () {

    }

    $scope.isDisplayRed = function () {
        return true;
    }

    $scope.isDisplayYellow = function () {
        return true;
    }

    $scope.isDisplayGreen = function () {
        return true;
    }

}]);
