function CupCake (){
    this.name = "Cupcake";
    this.flavor = "Vanilla";
    this.topping = "Sprinkles";
    this.frosting = "Buttercream";
}

let cake = new CupCake();
console.log(cake);
let cake2 = new CupCake();
console.log(cake2);

//new giveg immediately a empty object

//lets say we want call and have different valaue accordingg to the need
//for every new object
//we can use this keyword to refer to the object that is being created

function BananaCake(name, flavour, price, expiryDate){
    this.name = name;
    this.flavour = flavour;
    this.price = price;
    this.expiryDate = expiryDate;
}
//now just call the function with different values as an argument 
let cake3 = new BananaCake("BananaCake", "Banana", 100, "2025-12-12");
console.log(cake3);
let cake4 = new BananaCake("Apple", "apple", 100, "2025-12-12");
console.log(cake4);

// now lets undersatnd COnstructor function
//constructor function is a function that is used to create objects
//it is a special type of function that is used to create objects
class Toffee{
    constructor(name, flavour, price, expiryDate){
        this.name = name;
        this.flavour = flavour;
        this.price = price;
        this.expiryDate = expiryDate;
    }
}

let t1 = new Toffee("parley", "choco", 100, "2025-12-12");
let t2 = new Toffee("cofee", "coffee", 100, "2025-12-12");
let t3 = new Toffee("choco", "choco", 100, "2025-12-12");


// class Pizza {
//     constructor(name, price, size){
//         this.name = name;
//         this.price = price;
//         this.size = size;
//     }
// }

// let p1 = new Pizza("veg-Pizza", 200, "large");
// let p2 = new Pizza("jalepino", 400, "medium");
// p1.prototype.expiryDate = "2025-12-12";

function Pizza (name, price, size){
        this.name = name;
        this.price = price;
        this.size = size;
}
Pizza.prototype.expiryDate = "2025-12-12";
let p1 = new Pizza("veg-Pizza", 200, "large");
let p2 = new Pizza("jalepino", 400, "medium");


function abcd(){

}
abcd();