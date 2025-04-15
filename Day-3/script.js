const child = document.querySelector(".child");
const parent = document.querySelector(".parent");
const ancestors = document.querySelector(".ancestors");


child.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents the event from bubbling up to parent and ancestors
    console.log("Child clicked");
    // e.stopImmediatePropagation(); // Prevents other listeners of the same event from being called
    // e.preventDefault(); // Prevents the default action of the event (e.g., form submission)
});

// parent.addEventListener("click", (e) => {
//     console.log("Parent clicked");
// });

// ancestors.addEventListener("click", (e) => {
//     console.log("Ancestors clicked");
// });

// document.querySelector("body").addEventListener("click", (e) => {
//     console.log("Body clicked");
// });

// document.querySelector("html").addEventListener("click", (e) => {
//     console.log("Bubbled up to HTML");
// });


const listContainer = document.querySelector(".clickToAdd");
const button = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const listItem = document.querySelectorAll("li");

let enteredValue = "";
input.addEventListener("keyup",(e)=>{
    enteredValue = e.target.value;
})

// button.addEventListener("click", (e)=>{
//     e.preventDefault();
//     console.log("Button Clicked and the value is : ", enteredValue);
//     const li = document.createElement("li");
//     li.innerHTML = enteredValue;
//     li.classList.add("item");
//     list.appendChild(li);
//     input.value = ""; // to clear the input field
// })

button.addEventListener("click",(e) => {
    e.preventDefault();

    if(enteredValue === ""){
        alert("Please Enter a Value");
        return;
    }
    else{
        createListItem(enteredValue);
        // const p = document.createElement("p");
        // p.innerHTML = enteredValue;

        // const image = document.createElement("img");
        // image.src = "./delete.png";
        // image.alt = "del";
        // image.classList.add("del");

        // const li = document.createElement("li");
        // li.classList.add("item");

        // li.appendChild(p);
        // li.appendChild(image);
        // list.appendChild(li);
        
        // input.value = "";
        // enteredValue ="";
    }
})

//we can  alse create a function which we can use while 
//adding a new item in our list
function createListItem(value){
    const p = document.createElement("p");
        p.innerHTML = enteredValue;

        const image = document.createElement("img");
        image.src = "./delete.png";
        image.alt = "del";
        image.classList.add("del");

        const li = document.createElement("li");
        li.classList.add("item");

        li.appendChild(p);
        li.appendChild(image);
        list.appendChild(li);
        
        input.value = "";
        enteredValue ="";
}

//const deleteButton = document.querySelector(".del");





//************************************************************************************************************ */
//******************************************This is to delete the list item*********************** */
// listItem.forEach((del)=>{
//     del.addEventListener("click", (e)=>{
//         console.log(e.target.parentElement);
//         e.target.parentElement.remove();
//     })
// })

//Event delegation

list.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.classList.contains("del")){
        e.target.parentElement.remove();
    }
    console.log(e.target);
})

// function deleteItems(del){
//     del.addEventListener("click", (e)=>{
//         console.log("Target", e.target.parentElement);
//         e.target.parentElement.remove();
//     })
// }
//***********or i ac do it by this way******************* */


//******************************************************************************************************** */
//local storage
function saveListToStorage(){
    const items = [];
    document.querySelectorAll("li p").forEach((p)=>{
        items.push(p.innerHTML);
    });
    localStorage.setItem("items", JSON.stringify(items));
    console.log(items);
}

window.addEventListener("DOMContentLoaded",()=>{
    const storedItem = JSON.parse(localStorage.getItem("items")) || [];
    storedItem.forEach((item)=>{
        createListItem(item);
    })
})