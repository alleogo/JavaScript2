const user = {
    username: "Name",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welccome to website`)
        console.log(this)
    }
    
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this)   // output : {}(empty object), as currentyly there's no current context in the node environment. But in browser, there's always a global object which is "Window"

function fun(){
    let username = "Hari"
    console.log(this)   // bhot kuchh print hoga, dekh lena
    console.log(this.username)  // output : undefined
    // object k bahr "this" ko use nhi kar pa rhe h.
}
// fun()

// *************** Arrow Functions ***************

// const func = (num1, num2) => {    // remove "function" keyword, put arrow after brackets
//     return num1 + num2   // explicit return 
// }
// console.log(func())

// other syntax

const add = (num1, num2) => ( num1 + num2 )   // implicit return, return wale brackets hata bhi skte h lekin agar object return kar rhe h to bina brackets k kam nhi chalega
console.log(add(3, 9))

const box = () => {username: "Name"}
console.log(box())  // output : undefined (because object return kr rhe h aur brackets nahi lagae)

const addTwo = (num1, num2) => ({userName: "Vaishnav"})
console.log(addTwo(3, 5))