var app = angular.module("clockApp", []);
app.controller("TimeCtrl", TimeCtrl)

function TimeCtrl($scope) {
    var currentDate = new Date();
    $scope.stringTime = currentDate.toTimeString();
    $scope.refreshTime = function() {
        var currentDate = new Date();
        $scope.stringTime = currentDate.toTimeString();
    }
}