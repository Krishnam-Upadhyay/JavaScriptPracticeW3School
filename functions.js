//JavaScript Function Definations
//Syntax :
/* function functionName(parameter){
    //code to be executed
} */
//example

function myFunction(a,b){
    return a*b;
}
console.log(myFunction(3,4));
//function expressions
const x = function(a,b){return a*b};
console.log(x(5,4))

//creating function using constructor
const mynFunction = new Function("a","b","return a*b");

console.log(mynFunction(4,3));

//anonuymous self-invoking function

(function(){
    let x = "Hello!"; //I will invoke myself
    console.log(x);
})();

//JavaScript functions are objects this function will return the length of the parametere of a function

function myFuctionx(a,b){
    return arguments.length;
}
console.log(myFuctionx(4,3))

//toString() method return the function as a string;
let text = myFuctionx.toString();
console.log(text);

//Arrow Functions

const e = (x,y)=>x*y;
console.log(e(3,4))


    


