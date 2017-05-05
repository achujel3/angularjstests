angular.module("ngShow-test", [])
    .controller("ngShowController", ngShowController);

function ngShowController() {
    this.myList = [
        { "name": "Bob", "age": 20 },
        { "name": "Tom", "age": 30 },
        { "name": "Dom", "age": 40 },
        { "name": "Kevin", "age": 50 },
        { "name": "Roy", "age": 60 },
    ];
}