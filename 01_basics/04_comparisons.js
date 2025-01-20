// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// equality (==) and comparison (<, >, <=, >=) works differently, while using comparison operators, null is converted to numeric zero(0), but not in the case of equality.

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined >= 0)

// in case of undefined, all works in same way i.e. undefined is not converted to numeric 0 in any case.

// we shall avoid such codes which are inconsistent like the above ones.

// Strick check "===" : checks the data type also.
// console.log("3" === 3) // false because data types are different.