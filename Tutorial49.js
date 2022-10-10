// lexical enviroment

// const myVar = "Value1"  


function myApp(){
    const myVar = "Value1"

    function myfunc(){
        // const myVar = "value59"
        
        //js pehle apne function ke ander variable ko check krti hai and ager khud ke function ke ander agar value initialize ni ki hogi to fir javascript apne lexical enviroment me check kregi....lexial enviroment matlb main function jese yaha pe myfunc ka lexical enviroment myApp hai kuki wo uske ander define ho rakha hai  (jese yaha pe 2 myVar hai). agar hum value 59 wale var ko comment out krde to Value1 wala variable print ho jayega

        // yaha pe humne my var ko function ke function me dal dia hai..lekin tab bhi myvar lexical enviroment me seach krega 
        const myfunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myfunc2();
    }


    const myfunc2 = function(){} 


    const myfunc3 = () =>{}
    console.log(myVar);   //ye likhne se functon lexical enviromet me check krti hai matlb all over is file me. to javascript pura search krti hai
    myfunc();
}

myApp();
