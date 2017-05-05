var app2 = angular.module("anotherApp", []);

app2.controller("myCtrl", myCtrl);

function myCtrl() {
    this.message = "Message from another app";
}