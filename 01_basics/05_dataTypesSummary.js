// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol('123')
// const id2 = Symbol('123')
// console.log(id === id2);

// const bigNum = 2957696292297n
// console.log(typeof bigNum)

// Refeerence (Non Primitive)
// Arrays, Objects, Functions 

// JS is dynamically typed i.e. data type of the declared variable is determined at runtime. e.g. const a = 20.3

const names = ["Gaura", "Hari", "Nitai"]
// console.log(names)

let myObj = {
    name: "String", // !! Use coma !!
    id: 10864
}

const func = function(){
    console.log("console.log")
}

// typeof names(array) is object
// typeof func(function) is object
// typeof myObj(object) is object
// typeof null is object *important*

// ******************** Memory ********************

// Stack (Primitive), Heap (Non Primitive)
// (By value)         (By Reference)
// Same as in JAVA