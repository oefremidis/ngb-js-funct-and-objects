// ------------------------------------------
// create object literals

// var user0 = {};

// const user1 = {
//     uname: 'admin',
//     password: '1234'
// };

// let user2 = {
//     uname: 'manager',
//     password: '2345',
//     loggin: function(){
//         console.log(`User ${this.uname} ${this.password} is logged in (pass: ${this.password})`);
//     }
// }

// var user3 = new Object(); // {};
// user3.firstName = 'George',
// user3.lastName = 'Nikolaou';
// user3.fullName = function(){
//     return this.firstName  + ' ' + this.lastName;
// }

// console.log(user0);
// console.log(user1);
// console.log(user2);
// user2.loggin();
// console.log(user3);
// console.log(user3.fullName());

// ------------------------------------------
// Constructor Function

// function User(uname, password) {
//     this.uname = uname;
//     this.password = password;
//     this.loggin = function() {
//         console.log(`User ${this.uname} ${this.password} is logged in (pass: ${this.password})`);
//     }
// }

// // console.log(User);
// var user1 = new User('admin', '1234');
// var user2 = new User('manager', '5648');
// console.log(user1);
// // user1.loggin()
// console.log(user2);
// // user2.loggin()

// ------------------------------------------
// Constructor Function and Prototypes

// function User(uname, password) {
//     this.uname = uname;
//     this.password = password;
// }

// User.prototype.loggin = function() {
//     console.log(`User ${this.uname} ${this.password} is logged in (pass: ${this.password})`);
// }

// var user1 = new User('admin', '1234');
// var user2 = new User('manager', '5648');
// console.log(user1);
// user1.loggin()
// // console.log(user2);
// user2.loggin()

// ------------------------------------------
// Using Object and Prototypes - prototypal inhertitance
// var vehicle = {
//     doors: 4,
//     speedup: function () {
//         return 'increase speed...';
//     }
// }

// var car = {
//     brand: 'audi',
//     __proto__: vehicle
// }

// console.log(car)
// console.log(car.speedup())

// ----------------ES6 (ES2015) --------------------------
// Classes - syntactic sugar

// let user = {
//     uname: 'manager',
//     password: '2345',
//     loggin(){
//         console.log(`User ${this.uname} ${this.password} is logged in (pass: ${this.password})`);
//     }
// }

class User {

    #logTime; // private variables

    constructor(uname, password, logTime) {
        this.uname = uname;
        this.password = password;
        this.#logTime = logTime;
    }

    loggin() {
        console.log(`User ${this.uname} ${this.password} is logged in (pass: ${this.password})`);
    }

    set logTime(logTime) {
        if (logTime > 0) {
            this.#logTime = logTime;
        }
    }

    get logTime() {
        return this.#logTime;
    }


}

const user1 = new User('admin', '1234');
const user2 = new User('manager', '5648');
// console.log(user1);
// user1.loggin()
// // console.log(user2);
// user2.loggin()

user2.logTime = -10;
console.log(user2.logTime);