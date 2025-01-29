    let a = 10
    const b = 20
    var c = 30

if(true){
    let a = 100
    const b = 200
    var c = 300 // var scope k bahr change reflect kar deta h
}

console.log(a)
console.log(b)
console.log(c)

// *************** Interesting ***************

// When a variable is made to hold a function, in this case we cannot call the function before declaration. But in the other way of declaring function, call to the function can be made before the declaring statement

console.log(addOne(4))  // Output : 5 (No Error)
function addOne(num){
    return num + 1
}

addOne(5)

console.log(addTwo(9))  // Output : Error
const addTwo = function(num){   // In JS, variables can also hold functions
    return num + 2
}

addTwo(9)

