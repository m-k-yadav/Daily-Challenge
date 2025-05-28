// rest parameters ...rest
function abc(a,b,c,...rest){
    console.log(a,b,c,rest);
}

abc(1,2,3,4,5,6,7,8,);

// destructuring
const object = {
    name: "John",
    age: 30,
    city: "Jorhat"
}
const {name, age, city} = object;
console.log(name, age, city);


//hoisting
console.log(a); //undefined
var a =10 //hoisting
console.log(a);//10
//hoisting with function
abc(); //hello world
function abc(){
    console.log("hello world");
}

//split
//it splits the string into an array of substings
//based on the seperator provided
const words = "Hello World"
const splitWords = words.split(" ");
console.log(splitWords)

//closure
//a function that has access to its own scope, 
// the outer function's scope 
// and the global scope
//even after the outer function has returned

function outerFunction(){
    let x=2;
    function innerFunction(y){
        return x*y;
    }
    return innerFunction;
}
const valueOfX = outerFunction();
console.log("CLosure "+valueOfX(10000000000000));
// for(let i =1 ; i<=10; i++){
//         console.log(valueOfX(i));
// }


//iife --- immediately invoked function expression
(function(){
    console.log("This ia an IIFE function")
})();
var anss = (function abcde(){
    var a = 10;
    return{
        set: function(val){
            a= val;
        },
        get: function(){
            console.log(a);
        }
    }
})();
anss.set(20);
anss.get();


//rest operator
//it allows us to pass an indefinite number of arguments as an array
//to a function
function restOperator(a,b,c,...rest){
    console.log("rest", a,b,c,rest);
}
restOperator(1,2,3,4,5,6,7,8,9);

//spread operator


//higher order function
//a function that takes function as an argumnet or
//returns a function as a result
//or both
function abcd (){
    console.log("main function");
    return function(){
        console.log("hello world 1")
        return function(){
            console.log("hello world 2")
            return function(fn){
                fn();
            }
        }
    }
    
}
console.log(abcd());
abcd()()()(function(){
    console.log("hello world 3");
});

//callback function
// jo function ek argument ke hisab se use ho as an
//argumnet to another function 
//us function ko callback function kehte hai

function hof (callback){
    console.log("I am a HOF function");
    callback();
}

hof(
    function callback(){
        console.log("callback function inside hof")
    }
);


//first class function
//first class citizen in JS
// function can be used as an argument to another function
// function can be returned from another function
// function can be assigned to a variable
function firstClassFunction(value){
    console.log("first class function");
    value();
}
var value = (function(){
    console.log("first class function inside another function")
})
firstClassFunction(value);


//pure function
//when no external variable inside a 
//function
function pureFunction(a,b){
    return a+b; //here a and b are not extrenal variables
}
console.log(pureFunction(2,3));

//impure function
//when an external variable is modified inside a function
//or when a function has side effects
let valu = 10;
function impureFunction(a){
    valu += a; //valu is an external variable
    //and is modified
}
impureFunction(11);
console.log("modified "+valu);

//global scope
var global = 10;

//local scope
function local (){
    var local = 20
    console.log("local scope "+local);
}
local();


//promise

//async await

//fetch api

//local storage

//session storage

//