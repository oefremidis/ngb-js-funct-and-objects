
// 'use strict'  // 
// -----------------------------
// function declaration

// isZero(0);  // hoisting 

// function isZero(number){    // declaration, initialization, assignmet
//     console.log(number == 0);
// }

// console.log(isZero)

// -----------------------------
// function expression

// isPos(10);  // no hoisting
// const isPos = function(number) { // var, let
//     console.log(number > 0);
// };

// console.log(isPos)
// isPos(10);

// ------------------------------

// function checkArgs(){
//     // 'use strict'
//     for(let i = 0; i < checkArgs.arguments.length; i++){  // remove let to see --> strict
//         console.log(checkArgs.arguments[i])
//     }

// //     for(param of checkArgs.arguments){
// //         console.log(param);
// //     }
// }

// // checkArgs();
// // checkArgs(1);
// // checkArgs(1, "Hello");
// checkArgs(1, "Hello", ['and', 2, 3.6]);

// error: not using ;
// function errorReturn(){
//     return  // implicit ; new line translated as ;
//     [
//         'Hello',
//         'World'
//     ]
    
// }

// console.log(errorReturn());

// ------------- ES6 (ES2015) ------------------


// fat arrow 

// from
// function sum(a, b){
//     return a + b;
// }

// const sum = function(a, b) {
//     return a + b;
// }

// to
// (a, b) => { return a + b };


// const sum = (a, b) => { return a + b; };
// const sum = (a, b) => a + b; 
// console.log(sum(5, 10));

// const power = (a) => a * a;
// const power2 = a => a * a;
// console.log(power2(4));

// more than one lines of code { }
// const constSum = () => {
//     console.log("Constant Sum");
//     const a = 5;
//     const b = 7;
//     return a + b;
// };

// constSum();
// console.log(constSum());

// variable number of params
// function checkArgs(...args){ // rest params operator
//     console.log(typeof args)
//     for (let param of args) {
//         console.log(param);
//     }
// }

// // checkArgs();
// // checkArgs(1);
// // checkArgs(1, "Hello");
// checkArgs(1, "Hello", ['and', 2, 3.6]);

