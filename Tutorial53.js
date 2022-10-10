// Parameter destructuring

// used with object 
// and mostly used in react

const person1 = {
    firstName: "Amangwari",
    gender: "male",
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

function printDetails({firstName, gender, age}) {
    console.log(firstName);
    console.log(gender);
    console.log(age);   //age is not defined in object
}

printDetails(person1);
