console.log('anonymous');

//# 1. Names FN,FN declaration.
// function add(){}


//# 2. Anonymous ไม่มีชื่อ
// (function (message){
//     console.log(message);
// })('hi');

//#2A IIFE : Intermediate Invoke Function Expression
// (function(x,y){
//     console.log(x+y)
// })(10,5);
// console.log(
//     (function(x,y){
//         return x+y;
//     })(10,5)
// );
// let a = (function(x,y){
//     return x+y;
// })(10,7);
// console.log(a)


//# 2B
//variable =expression
// let myVar = ((5*20)/2)/7;

//function expression การ assign functionให้อยู่ในตัวแปร

// VARIABLE = FN (FN == EXPRESSION)

// ASSIGN anonymous FN to varia
// const myFunc = function (x, y) {
//     return x + y;
// };

// console.log(myFunc(5, 10));

// ASSIGN named FN to variable
// const a = console.log;
// a('hi');

// ### ANONYM (MODERN : ARROW SYNTAX)

let z = function (x) {
    return x ** 2;
};
// A: Shortest
let a = x => x + 2;
let b = (x, y) => x + y;

// B: Bracket
let c = (x, y) => {
    let result = x + y;
    return result;
};

// console.log(z(3));
console.log(a(5))
// console.log(b(3, 5));
// console.log(c(3, 5));