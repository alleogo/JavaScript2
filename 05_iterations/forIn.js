// forin

const myObject = {
    'game1': 'eFooty',
    'game2': 'Tekken 8',
    'game3': 'Sekiro'
}
for (const key in myObject) {
    console.log(key)
}
for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`)
}

// using forin for arrays

const myArr = ["eFooty", "Tekken 8", "Sekiro", "DBZ Kakarot"]
for (const key in myArr) {
    console.log(key)    // indices of the array will be printed
}

for (const key in myArr) {
    console.log(`${key}, ${myArr[key]}`)
}

const map = new Map()
map.set('Mac', 'M1')
map.set('Intel', 'i9')
map.set('Qualcomm', 'Snapdragon 8 Elite')

// maps are not iterable by forin loop
for (const key in map) {
    console.log(`${key}, ${map[key]}`)  // no output
}