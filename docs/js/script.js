'use strict'
const canvas = document.querySelector("canvas");
const conext = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let userName = 4;
let users = typeof userName;
console.log("54" * '10');


function UserInfo(name,age){
    this.name = name;
    this.age = age;
}

let user = new UserInfo("Вася", 30);
console.log(`Имя: ${user['name']} возраст: ${user.age}`);
user.name = "Лена";
console.log(`Имя: ${user['name']} возраст: ${user.age}`);
delete user.name;
console.log(`Имя: ${user['name']} возраст: ${user.age}`);
