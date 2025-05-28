const productContainer = document.getElementById("all-products");
const cartContainer = document.getElementById("cart");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let productsList = [];

async function fetchData(){
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        if(response.ok){
            const data = await response.json();
            //console.log("Fetched data: ", data);
             return data;
        }else{
            throw new Error("Network response was not ok");
        }
    }catch(error){
        console.error("Error fetching data: ", error);
    }
}

const data = fetchData();
//console.log("Data: ", data);

data.then((data)=>{
    if(data){
        data.forEach((item)=>{
            productsList.push(item);
            const product = productCards(item);
            productContainer.appendChild(product);
        })
    }
})

function productCards (productData){
    const product = document.createElement("div");
    product.classList.add("product-card");
    
    product.innerHTML = `
        <img src = "${productData.image}" alt="p-image">
        <div class="product-info">
            <h4 class="title">${productData.title}</h4>
            <h5 class="price">${productData.price}</h5>
            <button class="addToCart" id="${productData.id}">Add to Cart</button>
        </div>
    `;
    return product;
}


console.log("Cart: ", cart);
console.log("Products List: ", productsList);

function addToCart(productId){
    const product = productsList.find((item)=> item.id === Number(productId));
    console.log("Product: ", product);
    if(product){
        if(cart.find((item)=> item.id === Number(productId))){
            //if the product is already in the cart, we can just update the quantity or do nothing
            console.log("Product already in cart: ", productId);
            return;
        }else{
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        console.log("Product added to cart: ", product);
        console.log("Cart: ", cart);
    }else{
        console.log("Product Not found with id: ", productId);
    }
}

// object.forEach(function(items){
//     const product = productCards(items);
//     productContainer.appendChild(product);
// })
//will not work if the addtocartbutton is inisialised befor the card is created
//hecde i should be colled here 
// const addToCartButtons = document.querySelectorAll(".addToCart");
// addToCartButtons.forEach((button, index)=>{
//     button.addEventListener("click", (e)=>{
//         console.log(e.target);
//     })
// })

//best bractice us Eent delegation
//we can add the event listener to the parent element and then check if the target is the button
// this way we dont have to add the event listener to each button
// this is more efficient and will work even if the buttons are added dynamically later on
//this is known as event delegation

productContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("addToCart")){
        console.log("id of button: ", e.target.id);
        addToCart(e.target.id);
    }
})


cartContainer.addEventListener("click", (e)=>{
     location.href = "cart.html";
})


const mode = document.querySelector(".mode img");
const savedTheme = localStorage.getItem("theme");
if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
    mode.setAttribute("src", "dark.png");
    mode.closest("section").style.backgroundColor = "#504f4f";
}else if(savedTheme === "light"){
    mode.setAttribute("src", "brightness.png");
    mode.closest("section").style.backgroundColor = "#f8f8f8";
}




function toggleMode(){
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light")

    mode.setAttribute("src", isDark ? "dark.png" : "brightness.png");

    mode.closest("section").style.backgroundColor = isDark ? "#504f4f" : "#f8f8f8";
}

mode.addEventListener("click", (e)=>{
    toggleMode();
    if(document.body.classList.contains("dark-mode")){
        mode.closest("section").style.backgroundColor = "#504f4f"
    }else{
        mode.closest("section").style.backgroundColor = "#f8f8f8"
    }
    console.log("Mode: ", document.body.classList.contains("dark-mode"));
})