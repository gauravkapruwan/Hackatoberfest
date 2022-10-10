// Callback functions



function myfunc2(name1) {
    console.log("Inside my func2");
    console.log(`your name is ${name1}`);
}

// function myFunc(a) {
//     console.log(a);
//     console.log("hello world");
// }

function myFunc(Callback){
    console.log("Hello there I am function and i can...");
    Callback("Aman1");
}

myFunc(myfunc2);
// myFunc();
// myFunc([1,2,3]);  //here we can pass array, object, string
// myFunc("abc");
// myFunc({name: "sagar"});
