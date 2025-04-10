var array = [22, 33, 44, 55, 66, 77, 88, 99];

//map
var newArray = array.map(function (value) {
  return value * 2;
});
console.log(newArray);
console.log(array);


//filter
var filteredArray = array.filter((value)=>{
    return value >40
})

console.log(filteredArray); 


const users = [
  { name: "Manish", age: 22,
    address: { city: "Delhi", state: "Delhi" } 
  },
  { name: "Ravi", age: 17 },
  { name: "Sneha", age: 25 }
];

let names = [];

users.filter((user)=>{
  if(user.age > 18){
    names.push(user.name);
  }
})

console.log(names); // ["Manish", "Sneha"]

const userNames = users
  .filter((user)=>user.age > 18)
  .map((user)=>user.name);
console.log(userNames); // ["Manish", "Sneha"]

console.log(users[0].address?.city); // "Delhi"

// ?. optional chaining
// used to access deeply nested properties without having to 
// check if each property in the chain is defined.
console.log(users[1].address?.city); // undefined

//Nullish coalescing operator(??)
// used to provide a default value
// when dealing with null or undefined values.

// Ternary operator
// (condition) ? true : false


console.log(`Hello My name is ${names[0]}`)
// template literals
// used to embed expressions into strings
// and create multi-line strings.
// It is enclosed by backticks (``) 
// instead of single or double quotes.


const findName = names.find((name) => name ==="Manish");
console.log(findName); // Manish
// find() method returns the 
// value of the first element
// in the array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.

const hasAdult = users.some((user)=>user.age > 18);
console.log(hasAdult); // true
// some() method tests whether at least one element in the array
// passes the test implemented by the provided function.
// It returns a Boolean value.

const allAdults = users.every((user)=>user.age > 18);
console.log(allAdults); // false  
// every() method tests whether all elements in the array
// pass the test implemented by the provided function.
// It returns a Boolean value.

// ChainingExample
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter((number)=> number > 2) // [3, 4, 5]
  .map((number)=> number * 2) // [6, 8, 10]
  .reduce((accumulator, number) => accumulator + number, 0); // 24
console.log(result); // 24
// The above code filters the numbers greater than 2,
// multiplies them by 2, and then sums them up using reduce() method.
