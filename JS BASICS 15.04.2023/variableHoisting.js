//const x; caught SyntaxError: Missing initializer in const declaration
//console.log(a); Uncaught ReferenceError: Cannot access 'a' before initialization 
//let a;
//console.log(b) //riableHoisting.js:4 Uncaught ReferenceError: b is not defined
//"use strict"; //riableHoisting.js:13 Uncaught ReferenceError: b is not defined
console.log(a) // variable a hoisted with undefined
var a;
c = 20;
console.log(c, "c")
if(true) {
    var c = 1;
    c = 5;
}
b = 10;
console.log(b, "b")
//console.log(d) //caught ReferenceError: d is not defined
function summa() {
    var d;
    console.log(d)
}
summa()
if(true) {
    //console.log(e) //caught ReferenceError: Cannot access 'e' before initialization
    let e;
    console.log(e) //undefined
}
//console.log(e) //caught ReferenceError: d is not defined
//console.log(f) //caught ReferenceError: Cannot access 'f' before initialization
const f = "hello"
console.log(f)
console.log(g)
var g = "tell";
console.log(g)
g = "why"
console.log(g)
const h = "twwdaw"
//h = 3 //caught TypeError: Assignment to constant variable.












