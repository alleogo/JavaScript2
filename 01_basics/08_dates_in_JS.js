let myDate = new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toString())

console.log(typeof(myDate)) // object
// months start with 0 in JS while not using "YYYY-MM-DD" type of formats 

let myCreatedDate = new Date(2025, 0, 23)
// console.log(myCreatedDate.toDateString())
// console.log(new Date(2025, 2, 14).toDateString())
// console.log(new Date(2025, 2, 14, 17, 11, 22).toLocaleString()) // YYYY-MM-DD-HH-mm-ss
// console.log(new Date("2025-01-23").toLocaleString())    // output : MM/DD/YYYY, Time
// console.log(new Date("2025-03-14").toDateString())

let myTimeStamp = Date.now()    // gives current date in milliseconds
console.log(myTimeStamp)    // output in milliseconds.

console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))    // output in seconds, without decimal values

console.log(myDate.getDay())    // days starting from Monday(1).
console.log(myDate.getFullYear())

myDate.toLocaleString('default', {  // study again.
    weekday: "long"
})