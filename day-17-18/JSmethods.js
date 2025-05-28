//slice()
let str = "Hello World";
console.log(str.slice(0,5));
console.log(str.slice(6,10));

//template string
console.log(`This is template string and this is from slice()--> "${str.slice(0,5)}" sliced from "${str}"`)

//split()
let str2 = "Heelo World";
console.log(str2.split(" "));
// here words are seperated by "space"
console.log(str2.split("e"));
//here words are splitted by "e"


//replace()
console.log(str.replace("Hello", "Hi"));
//it replaces the first occurance of the string with the new string
console.log(str.replace(/o/g, "a"));

//includes();
console.log(str.includes("Hell"));
console.log(str.includes("hell"));
console.log(str.includes("o", 4));
console.log(str.includes("o", 10));