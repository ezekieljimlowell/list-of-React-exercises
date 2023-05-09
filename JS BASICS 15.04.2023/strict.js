//"use strict"
//console.log(car) //rict.js:2 Uncaught ReferenceError: car is not defined
function d() {
    //"use strict"
    car ="volvo" //rict.js:3 Uncaught ReferenceError: car is not defined with strict
    console.log(car)
}
//console.log(car) //rict.js:8 Uncaught ReferenceError: car is not defined
d()
console.log(car)
//console.log(tar) //caught ReferenceError: tar is not defined 
"use strict"
if(true) {
    tar="genome"
    console.log(tar)
}
console.log(tar, window)
