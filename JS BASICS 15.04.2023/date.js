const d = new Date() //current date
const a = new Date("2023-01-01")
console.log(d, a);
const milli = new Date(7898899989999)
console.log(milli);
const higher = new Date(2017, 16, 40, 30, 300, 1000)
console.log(higher);
console.log(d.toDateString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleString());
console.log(d.toLocaleTimeString());
console.log(d.toISOString());
console.log(d.toUTCString());
console.log(d.valueOf());
console.log(Date.parse("May 21, 2018"));

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMilliseconds());
console.log(d.getSeconds());
console.log(d.getMinutes());
console.log(d.getTime());

console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDay());
console.log(d.getUTCDate());
console.log(d.getUTCHours());
console.log(d.getUTCMilliseconds());
console.log(d.getUTCSeconds());
console.log(d.getUTCMinutes());
console.log(d.getTimezoneOffset());
