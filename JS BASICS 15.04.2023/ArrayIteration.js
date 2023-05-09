//foreach
const places = ["himalaya", "chile", "maryanatrench", "sahara", "singapore"]
let placeText = "<ul>";
places.forEach((value, index, array) => {
    placeText += "<li>" + value + "</li>"
})
placeText += "</ul>"
document.getElementById("foreach").innerHTML = placeText

const needToMap = [1,3,5,2,4,5]
const mappedArray = needToMap.map((value, index, array) => {
    console.log(value, index, array);
    return value % 4;
})
console.log(mappedArray);

const tettris = [1,45,43, 3,6,7]
const flattenedMap = tettris.flatMap((value, index, array) => {
    console.log(value, index, array);
    return [value + 10];
})
const twoDMap = tettris.flatMap(x => ([[x * 5]]))
console.log(flattenedMap, twoDMap);

const needToFilter = [2,3,4,56,76,3234]
const filteredValue = needToFilter.filter((value, index, array) => {
    console.log(value, index, array)
    return value < 10;
})
console.log(filteredValue);

const needToReduce = [1,2,3,4]
const reduced = needToReduce.reduce((total, value, index, array) => {
    console.log(total, value);
    return total+value;
}, 100)
console.log(reduced);

const reducedRight = needToReduce.reduceRight((total, value) => {
    console.log(total, value);
    return total+value;
}, 200)
console.log(reducedRight);

const t = [4,5,6,7,8,9,4]
const everyArray = t.every(v => v > 3)
console.log(everyArray);

const some = t.some(v => v > 10)
console.log(some);

console.log(t.indexOf(4));
console.log(t.lastIndexOf(4));
console.log(t.lastIndexOf(10));
console.log(t.find(v => v>3));
console.log(t.findIndex(v => v>3));

console.log(Array.from("12345678"));
console.log(t.keys());
console.log(t.entries());
console.log(Object.values(t), Object.entries(t), Object.keys(t));

const obj = {
    empName: "james",
    age: 23,
    id: "123456",
    salary: 23000,
}

for(let key in obj) {
    console.log(key, obj[key]);
}
for(let ind in t){
    console.log(ind, t[ind]);
}
// for(let v of obj) { //object is not iterable
//     console.log(v);
// }
for(let v of t){
    console.log(v, t.indexOf(v));
}
let i = 0;
do {
    i++
    console.log(i);
}
while(i < 0.1);
console.log(i);

const u = new Set(["e"])
console.log(u);
u.add("a")
u.add("b")
u.add("c")
console.log(u);
u.delete("b")
console.log(u);
console.log(u.has("c"));
console.log(u.size);
console.log(u.values());
u.forEach(d => console.log(d))

const newMap = new Map([
    ["grapes", 100],
    ["orange", 50],
    ["strawberry", 200]
])
newMap.set("james", 1)
console.log(newMap);
console.log(newMap.get("orange"), newMap.get("james"));
let r = newMap.delete("orange")
console.log(newMap, r);
newMap.forEach(f => console.log(f))
console.log(newMap.entries(), newMap.size);

