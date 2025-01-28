// const user = new Objecct()   // singelton object
const user = {} // non singelton object.
user.name = "Name"
user.id = "123abc"
user.isLoggedIn = false
// console.log(user)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Hari",
            lastName: "Bol"
        }
    }
}
// console.log(regularUser.fullName.userFullName.lastName)
// console.log(regularUser.fullName?.userFullName.lastName) // ? wali cheez aage discuss krenge.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}   // same array wali problem(merging wali)
const obj3  = Object.assign({}, obj1, obj2, obj4)   // first argument me store hota baki sara argument, isiliye khali object pass kar dena chiye jisse ki ek separate object m assign ho jae aur original koi bhi object affect na ho.
const obj5 = {...obj1, ...obj2, ...obj4}    // spread : same as array
// console.log(obj3)
// console.log(obj5)

console.log(user)
console.log(Object.keys(user))  // output dataType : array -> very useful, aage jake bahut kaam aega.
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.hasOwnProperty("isLoggedIn"))  // bool return type
console.log(user.hasOwnProperty("age"))

