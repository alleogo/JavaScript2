// array in JS may have different data type values in it
// resizable, mutable

// const myArr = [0, 1, 2, 3, "Name", 225.2, false]
// console.log(typeof(myArr[6]))

const arr = [0, 1, 2, 3, 4]

// // other ways to initialize/declare array :
// const arr2 = new Array(1, 2, 3, 4)  // no need to give [] brackets

// // Array methods : 
// arr.push(9) // puts the argument at the last of the array
// console.log(arr)
// arr.pop()   // pops the last element of the array

// arr.unshift(8)  // puts the argument at the starting of the array
// console.log(arr)
// arr.shift() // removes the first value from the array
// console.log(arr)
// arr.shift()
// console.log(arr)

// console.log(arr.includes(33))   // checks whether the value exists or not in the array

// console.log(arr.indexOf(33))    // gives the index of the asked value
// console.log(arr.indexOf(3))     // gives the index of the asked value

// const newArr = [1, 2, 3, 4, 9, 8]
// .join() method converts the array into coma separated string
// newArr.join()   // .join() doesn't affect the original array, example ahead.........
// console.log(newArr + " " + typeof newArr + " " + typeof (newArr.join()))

// const Arr = arr.join()
// console.log(Arr + " " + typeof arr + " " + typeof Arr)

// slice, splice

// **** IMP **** //
// .slice(a, b) doesn't alter the original array and upperbound in excluded.

// .splice(a, b) takes away inclusive (a, b) from original array and put in the new array. Original array is altered

console.log("A :", arr)

const myn1 = arr.slice(1,3)
console.log(myn1)
console.log("B :", arr)

const myn2 = arr.splice(1,3)
console.log(myn2)
console.log("C :", arr)