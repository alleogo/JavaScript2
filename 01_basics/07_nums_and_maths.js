const score = 322
// console.log(score)

const balance = new Number(200)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed(2))

const otherNum = 135.25634
// console.log(otherNum.toPrecision(4))    // returns string

const hundreds = 1000000
// console.log(hundreds.toLocaleString())  // by default : american standard
// console.log(hundreds.toLocaleString('en-IN'))   // for Indian standard

// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MIN_VALUE)

// ******************** MATH ********************

// console.log(Math.abs(-25))  // absolute value
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.6))

// console.log(Math.min(1, 2, 3, 4))   // returns min value from array
// console.log(Math.max(1, 2, 3, 4))   // returns max value from array

console.log(Math.random())  // gives random value b/w 0 and 1
console.log((Math.random()*10) + 1) // modified to give random value b/w 1 and 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // *** IMP *** modified to give random value b/w min and max *** IMP ***

