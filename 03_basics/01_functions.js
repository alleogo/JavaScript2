function addTwoNumbers(no1, no2){
    console.log(no1 + no2)
}

addTwoNumbers(3, 9)

function greeting(username = "User"){   // username = "User" -> default value for the parameter in case no argument is passed.
    if(!username){
        console.log("Please enter a username!")
        return
    }
    return `${username} just logged in.`
}

function greeting2(username){   // username = "User" -> default value for the parameter in case no argument is passed.
    if(!username){
        console.log("Please enter a username!")
        return
    }
    return `${username} just logged in.`
}
console.log(greeting("Hari"))
console.log(greeting())
console.log(greeting2())

function calculateCartPrice(...num1){   // ... se ab any no. of arguments liye ja skte hai as an array
    return num1
}
console.log(calculateCartPrice(200, 100, 700, 108, 64))

const User = {
    username: "Name",
    price: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// console.log(handleObject(User))

// another way
handleObject({
    username: "Hari",
    price: 108
})

// similarly array ko bhi dono way se pass kar skte hai.