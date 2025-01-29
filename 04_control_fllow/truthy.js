// Nullish Coalscing Operator(??) : null, undefined

let val1;
// val1 = 5 ?? 20   // first feasible value will be assigned
// val1 = null ?? 15    // feasible value will be assigned
// val1 = undefined ?? 3    // feasible value will be assigned
val1 = null ?? 23 ?? 9  // first feasible value will be assigned

console.log(val1)

// Ternary Operator : condition ? execute if true : execute if false

const icetea = 100
icetea >= 99 ? console.log("greater than 99") : console.log("less than 99")