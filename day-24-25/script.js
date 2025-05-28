//create af function that takes another funct as an argumnet and calls it after 3 sec 

function abcd(fun){
    setTimeout(fun, 3000);
}

abcd(function(){
    console.log("hey");
})


//implent own version of .map()  as higher order function

let arr = [1,2,3,4,5,6,7]

function map(array, fun){
    let newArr = [];

    for(i=0; i<array.length; i++){
        newArr.push(fun(array[i]));
    }

    return newArr;
}

function add(value){
    value += 2;
    return value;
}

var ans = map(arr, add);
console.log(ans);

//write a function that usess closure to crreaet a counter

function counter (){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
let fn = counter();

fn();
fn();
fn();


//- implements a function that lmits how many times another functio  can be called
 
function limitFun (fn, limit){
    let limits = 0;
    return function(){
        if(limits < limit){
            limits++;
            fn();
        }
    }
}

var limiter = limitFun(function(){
    setTimeout(console.log("hey"), 1000);
}, 3)

limiter();
limiter();
limiter();
limiter(); //will not run
limiter(); //will not run



//create a function that takes a callback and excutes it after evry n seconds indefinitly

function repeatedRunning(fn, time){
    setInterval(fn, time*1000)
}

repeatedRunning(function(){
    console.log("Hello everyOne"+ " " +(Math.random()*10) );
}, 10000)

//implement a function that returns a function with a present greeeting(closure)

function greet (greeeting){
    return function(name){
        console.log(`${greeeting} ${name}`);
    }
}

var greetMessage = greet("Namaste");
greetMessage("Manish")
greetMessage("Tara");


////implement a function that takes a callback and only executes it once(HOF+closure)

function aFunct(callback){
    let executable = false;
    return function(){
        if(!executable){
            executable = true;
            callback();
        }
        else{
            console.error("wont run for second time");
        }
    }
}

var onceCall = aFunct(function(){
    console.log("HOF + Closure");
})

onceCall();
onceCall();

//implement a function that throttles another function after a delay and cannot be called in mmiddle (hof + closure)

function throt(fun, delay){
    let lastCall = 0;
    return function(){
        let current = Date.now();
        if(current - lastCall >= delay){
            lastCall = current;
            fun();
        }
    }
}

var newFunction = throt(function(){
    console.log("i can only be executed once in 4 sec");
}, 4000)
 
newFunction();


