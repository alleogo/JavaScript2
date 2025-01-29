// Immediately Invoked Function Expressions (IIFE)

// ()() just like func()

// Why IIFE?
// for creating multiple IIFEs, we have to use line terminator ";"

(function fun(){
    console.log("DB CONNECTED")
})();   // if semicolon is removed then error will be thrown.

(function func(num1){
    return num1 + 1
})(1);

(() => console.log("in function"))()



