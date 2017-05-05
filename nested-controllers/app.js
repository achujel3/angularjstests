var app = angular.module("nestedControllers", []);
app.controller("NestCtrl1", NestCtrl1);
app.controller("NestCtrl2", NestCtrl2);

function NestCtrl1() {
    this.propValue = "Prop value 1";
}

function NestCtrl2() {
    this.propValue = "Prop value 2";
}