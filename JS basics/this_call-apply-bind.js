//this keyword
//this keyword is used to refer to the current object
// it can be different in different contexts

//1.  global scope, --------- this refers to the global object
console.log(this);




//2.  function, ------------ this refers to the object that calls the function
function name(){
    console.log(this);
}
name();


//3.  object method, -------- this refers to the object
var obj = {
    name: function(){
        console.log(this);
        },
    age: 27,
    email: "test@gmail.com"
}
obj.name();


//4. es5 function inside method, -------- this refers to the object
var obj = {
    name: function(){
        console.log(this);
        function child(){
            console.log(this);
        }
        child();
    }
}
obj.name();



//5. es5 function inside method, -------- this refers to the object
var obj = {
    name: function(){
        console.log(this);
        const child =() =>{
            console.log(this);
        }
        child();
    }
}
obj.name();


//5.  constructor function, -- this refers to the new object
function add(){
    console.log(this);
}

const ans = new add();



//6.  event listener, ------ this refers to the element that triggered the event

document.querySelector("button").addEventListener("click", function(){
    console.log(this);
})










