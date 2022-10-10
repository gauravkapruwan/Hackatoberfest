// Rest parameters 

function myFunc(a, b,...c) {   //here a and b are initialized and my func has many values so if we want rest of teh values store in one variable c in a form of array so we use (...c) this is called rest parameters. it stores rest of the parameters as a a array in c
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);  //using string template
    console.log(`c is`, c);   // prints as an array
}
myFunc(3,4,5,6,9,6,7)  //above we have only 3 parameters to hold these arguments

// Example
// addAll(1,2,3,4,5,6,7,8,9);
function addAll(...numbers){
    console.log(Array.isArray(numbers));

    let total = 0;
    for(let number of numbers){
        total = total+number;
    }
    return total;
}
const ans = addAll(1,2,3,4,5,6,7,8,9);
console.log(ans);
