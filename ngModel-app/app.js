var app = angular.module("myApp", []);

app.controller("ModelCtrl", ModelCtrl);

function ModelCtrl($scope) {

    $scope.textBoxChange = function() {
        console.log("Text box has changed");
    }

}