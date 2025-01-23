const name = "vipul "
const count = 16

console.log(name + count + " value")

console.log(`hello my name is ${name}and my count is ${count}`)

const gameName = new String("efooty")

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('y'))

const a = "e-footy-2025-Konami-TM"
const newString = gameName.substring(0,3)
console.log(newString)

const another2 = gameName.substring(-8, 4)
console.log(another2)
const anotherString = gameName.slice(-2, 6)
console.log(anotherString)

const newString2 = "    ahgaj    "
console.log(newString2)
console.log(newString2.trim())

const url = "https://google.com/iskcon%20desiretree"
console.log(url.replace('%20', '-'))

console.log(url.includes("google"))
console.log(url.includes("139"))

console.log(a.split('-'))
console.log(url.bold())