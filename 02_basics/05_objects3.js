// Object destructuring

const course = {
    courseName: "Name",
    price: 108,
    courseInstructor: "Instructor"
}

const {courseInstructor: Inst} = course // ab sidha Inst likh k course.courseInstructor ki value access kar skte hai.
console.log(Inst)

// JSON : bina name ka object. Keys string hoti hai JSON object m

// {
//     "courseName": "Name",
//     "price": 64,
//     "details": "Details"
// }


//  APIs JSON format k sath sath Array format m bhi milti hai(Array of objects)

[
    {},
    {},
    {}
]