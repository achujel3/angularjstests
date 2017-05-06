var app = angular.module("toDoApp", []);
app.controller("toDoCtrl", toDoCtrl);

function toDoCtrl() {
    this.toDoEdit = true;
    this.editToDoList = function(boolean) {
        this.toDoEdit = false;
    };
    this.getToDoList = function() {
        return this.toDoList;
    }
    this.updateToDoList = function(toDoList) {
        this.toDoEdit = true;
        this.toDoList = toDoList;
        console.log(this.toDoList);
    }
    this.deleteToDo = function(index) {
        this.toDoList.splice(index, 1);
    };
    this.toDoList = [
        { "toDo": "Learn Angular 1" },
        { "toDo": "Visit Java brains site" },
        { "toDo": "Learn more Angular" },
    ];
    this.addToDo = function(toDo) {
        this.toDoList.push({ "toDo": toDo });
        console.log(toDo);
        this.toDo = "";
        console.log("Item added!");
    }

}