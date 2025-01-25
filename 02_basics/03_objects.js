// singleton : agar literals ki tarah declare krte hai to singleton nahi banta hai. Constructor se banate hai to singleton banta hai.

// objects literals

// Object.create() // The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.(Source : mdn)
// Syntax : 
// Object.create(proto)
// Object.create(proto, propertiesObject)

// const val = {}  // empty object

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name: "Hari",    // by default the key : name is treated as a string, whether it's put into quotes or not.
    "full name": "Gaur Hari",   // attributes defined in quotes can't be accessed by dot operator.
    mySym: "myKey1",
    [mySym2]: "myKey2",
    age: 20,
    email: "hari108@golokmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Thursday", "Saturday"]
}

// accessing objects and its attributes
console.log(JsUser.email)    // one way to access
console.log(JsUser["email"])   // another way to access. Here the attritbute has to be put in quotes.
// console.log(JsUser.full name)  // error. full name -> "full name"
// console.log(JsUser."full name")  // error
console.log(JsUser["full name"])
console.log(JsUser.mySym, "\n", typeof(JsUser.mySym))   // typeof JsUser.mySym is not Symbol, it's still string

// console.log(JsUser.mySym2)  // output : undefined
// console.log(JsUser[mySym2]) // output : myKey2
// console.log(typeof(mySym2))
// console.log(JsUser)

// JsUser.email = "user@reddifmail.com"
// console.log(JsUser)
// Object.freeze(JsUser)   // ab koi change propagate nhi hoga.
// JsUser.email = "Js@hotmail.com"
// console.log(JsUser)

// JsUser.greeting = function(){
//     console.log("Hello user")
// }
// JsUser.greeting()
// console.log(JsUser.greeting)    // output : [Function (anonymous). Aage jake kaam aega.

// JsUser.greeting // no output.

JsUser.greeting2 = function(){
    console.log(`Hello user, ${this.name}`)
}
JsUser.greeting2()