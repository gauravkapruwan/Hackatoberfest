// Function returning function
function myFunc() {
    function hello(){
        // console.log("Hello world");
        return "Hello world"
    }
    return hello;  //here function is returning a function
}

const ans = myFunc();  //ans became a function
console.log(ans);
console.log(ans());
// ans();