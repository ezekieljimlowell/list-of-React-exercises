const emptyArray = new Array(40)
console.log(emptyArray)
const b = new Array(40,1)
console.log(b, emptyArray.toString())
console.log(Array.isArray(emptyArray))
console.log(b instanceof Array)

//toString()
const arr = [1,2,3,4]
console.log(arr.toString())
document.getElementById("automaticString").innerHTML = arr; //automatic to string
console.log(arr.join("+")) //join

const resultantLength = arr.push("jim") //push
console.log(arr, resultantLength)

const removedItem = arr.pop() //pop
console.log(arr, removedItem)

const shiftedItem = arr.shift() //shift
console.log(shiftedItem, arr)

const unshiftedLength = arr.unshift("hentry")
console.log(unshiftedLength, arr)

const multiDimensionalArray = [1, ["karthick", "Ezhil"], 3, [4, 5, ["daniel", "elves"]]]
const flattened = multiDimensionalArray.flat()
console.log(multiDimensionalArray, flattened)

const arr1 = ["solomon", "mommy", "blessy"]
const arr2 = ["paul", "jacob", "immanuel"]
const concatenatedArray = arr1.concat(arr2, "vignesh", "prabu", "livingston")
console.log(concatenatedArray)

delete arr[0];
console.log(arr, arr[0])

arr1.splice(1, 2, "jim") //splice mutates the array
console.log(arr1);

const arr3 = arr2.slice(1,2); //slice will not mutates array
console.log(arr3, arr2);

const stringArray = ["grapes", "banana", "jackfruit", "pineapple"]
stringArray.sort()
console.log(stringArray);
stringArray.reverse()
console.log(stringArray);

const firstCaps = ["Haryana", "Bihar", "Mumbai", "Chennai", "Ahmedabad"]
firstCaps.sort()
console.log(firstCaps);
firstCaps.reverse()
console.log(firstCaps);

const mixedWords  = ["Dinesh", "arun", "Arun", "ramdin", "Ramdin"]
mixedWords.sort()
console.log(mixedWords);
mixedWords.reverse()
console.log(mixedWords);

const numbers = [23, 34, 10, 5, 234, 46];
numbers.sort(function(a,b) {
    return a-b
})
console.log(numbers);

numbers.sort(function(a,b) {
    return b-a
})
console.log(numbers);

const max = Math.max.apply(null, numbers)
console.log(max);
const min = Math.min.apply(null, numbers)
console.log(min);















