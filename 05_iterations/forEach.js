const myArr = ["eFooty", "Tekken 8", "Sekiro", "DBZ Kakarot"]

myArr.forEach( function(val) {
    // console.log(val)
} )

myArr.forEach( (val) => {   // using arrow function
    // console.log(val + " 2025")
} )

function fun(val){
    // console.log(val + "TM")
}
myArr.forEach(fun)  // function ka reference pass krna hai

// forEach k parameter m 2 aur chize aati hai, 1. index, 2. array

// myArr.forEach((item, index, array) => console.log(item, index, array))

// accesing array of objects

const arr = [
    {
        gameName: 'eFooty',
        abbr: 'eF'
    },
    {
        gameName: 'Tekken 8',
        abbr: 'T8'
    },
    {
        gameName: 'DBZ Kakarot',
        abbr: 'DBZ K'
    }
]

arr.forEach( (item) => {console.log(`${item.abbr} : ${item.gameName}`)})