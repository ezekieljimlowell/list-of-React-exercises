let a1 = 10;
let b1;
b1=a1; //both a1 and b1 in separate location
console.log(a1,b1)
a1=1;
console.log(a1,b1)

let c1 = [1,2,32,34];
let d1;
d1=c1;
d1[3] = 34567; //also mutates c1
console.log(c1,d1)