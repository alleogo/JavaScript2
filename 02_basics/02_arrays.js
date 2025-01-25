const heros = ["tatiya vinchhu", "selmon bhoi", "spooderman"]
const heros2 = ["pessi", "pendu", "penmar"]

heros.push(heros2)  // heros wali m heros2 k elements individually add hi honge, balki pura heros2 as an array add ho jaega.

// console.log(heros)

// ARR.concat(arr) isse wo kam ho jaega jo ham upar chah rhe h.
// .concat() function returns an array which has to be stored in some variable to get it printed.

const heros3 = ["tatiya vinchhu", "selmon bhoi", "spooderman"]
const newHeros = heros3.concat(heros2)
// console.log("\n", newHeros)

const heros4 = [ ... heros3, ... heros2]    // spread function. Benefit : 2 se zyada arrays ko mila skte hai, [ ... arr1, ... arr2, ...arr3]
// console.log(heros4)

const arr = [1, 2, 3, [4, 5], 6, 7, [8, 9, [11, 10, 19]]]
// // ye upar wali arr ko sidha krne k liye .flat() use kr skte hai
const arr2 = arr.flat(Infinity) // argument m depth pass krte hai like 1 or 2 or 3 like that. Agar "Infinity" pass krdo to sari depth ko flat kr diya jaega.
const arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const arr4 = arr3.flat(2)
// console.log(arr2)
// console.log("\n",arr4)

// console.log(Array.isArray("String"))    // checks whether the given argument is an array or not.
// console.log(Array.isArray([1, 3, 4, 5]))

// console.log(Array.from("String"))   // creates array of the given argument

console.log(Array.from({name : "String"}))  // ***** IMP *****

let a = 100
let b = 200
let c = 300
console.log(Array.of(a, b, c))  // gives : [ 100, 200, 300 ]
console.log(Array.of(1, 2, 3))  // gives : [ 1, 2, 3 ]