// Block scope Vs Function scop[e 


// BLOCK SCOPE
// This is how we manke a block => in curly braces
// Let and const are block scope => Remember Let and const are only accessable inseide the block not accesable outside the block

{
    let firstName = "Aman";
    console.log(firstName);     //can access coz it is inside the block
    
}
// console.log(firstName);   //Can't acces and show error coz it is outside the block

// *************************************************************************************

{
    const firstName = "Rajesh";      //We can make a same variable name 
    // console.log(firstName);
    console.log(firstName);    
}

const firstName = "garima"
console.log(firstName);



// ************************************************************************************************


// Var is function scope
// VAR SCOPE
{
    var SecondName = "Astha";   
}
console.log(SecondName);     // In case of var we can access it by inside or outside the scope

{
    var SecondName = "Astha";   
    console.log(SecondName);
}

// ************************************************************************************************

// Real world example => let and const can't be accessed only Var can ve accessed
if(true){
    var Name = "Simran";
    // let Name = "Simran";
    console.log(Name);
}
console.log(Name)

// ************************************************************************************************

// let girlName = "Giresh" 
   // here it is lexical scope .. par man lo ki yaha pe ye nhi hai to islie error show krega kuki niche girl name ne fir apne lexical me dekha aur use koi bhi variabel nhi mila ....aur islie bhi kuki humne yaha pe let us kia hai...ager var use kia hota to lexical ki zarurat nhi hoti wo if condition se hi apni value le leta 

function myApp(){
    if(true){
        let girlName = "Janki";      //here let can't be accesed outside this block
        var peopleName = "Aakash";    // from anywhere var can  be accessed 
        console.log(girlName);
    }

    if(true){
        console.log(peopleName);
    }
    console.log(girlName);
}
myApp();


// People more prefer to use let and const insted of var