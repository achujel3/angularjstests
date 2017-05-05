var app = angular.module("calcApp", []);
app.controller("CalcCtrl", CalcCtrl);

function CalcCtrl() {
    this.result = 0;
    this.changeSign = function(button) {
        this.sign = button;
    }
    this.doCalc = function() {
        var number1 = parseFloat(this.firstNumber);
        var number2 = parseFloat(this.secondNumber);
        if (this.sign === "+") {
            this.result = number1 + number2;
        } else if (this.sign === "-") {
            this.result = number1 - number2;
        } else if (this.sign === "*") {
            this.result = number1 * number2;
        } else if (this.sign === "/") {
            this.result = number1 / number2;
        }
    }
}