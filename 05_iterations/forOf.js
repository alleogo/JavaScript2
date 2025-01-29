// for of

let myArr = [1, 2, 3, 4]
for (const element of myArr) {
    // console.log(element)
}

const string = "Hari Bol"
for (const char of string) {
    // console.log(`Current character is '${char}'`)
}

const map = new Map()   // map contains unique key-value pairs only
map.set('Mac', 'M1')
map.set('Intel', 'i9')
map.set('Qualcomm', 'Snapdragon 8 Elite')
// console.log(map)

for (const val of map) {
    console.log(val)
}

for (const [key, value] of map) {   // destructuring of array
    console.log(key, ":", value)
}

const myObject = {
    'game1': 'Efooty',
    'game2': 'Tekken 8'
}

for (const [key, value] of myObject) {
    console.log(key, ":", value)    // error, objects are not iterable
}