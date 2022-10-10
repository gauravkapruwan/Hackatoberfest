// Function returning function
function myFunc1() {
    function hello(){
        // console.log("Hello world");
        return "Hello world"
    }
    return hello;  //here function is returning a function
}

const ans = myFunc1();  //ans became a function
console.log(ans);
console.log(ans());
console.log("helloworld")
// ans();
