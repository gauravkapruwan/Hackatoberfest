// Default parameters     

// function addTwo(a,b) {   //before 2015 we use this trick to set default parameters
//     if(typeof b== "undefined"){
//         b=0;
//     }
// }

function addTwo(a,b=3){   //but now we can set a default value of our para
    return a+b;
}

// const ans = addTwo(4,2);

const ans = addTwo(4);   // here if we don't write the value of be so it will automatically take the value of b from defalut parameter above so (b=3)

console.log(ans);

      