let arr =[1,2,3, undefined, null, false, true, "string", 0, NaN, [],{}, function(){}]
let array = new Array(20);
console.log(typeof arr[3]);
console.log(typeof arr[6]);
console.log(typeof null);

console.groupCollapsed("Array");
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.groupEnd("");