const button = document.querySelector("button");
const input = document.querySelector("input")
const refresh = document.querySelector("img");


var answer = Math.floor(Math.random()*101);
function getRandom (){
    return Math.floor(Math.random()*101);
}

button.addEventListener("click", (e)=>{
    let inputValue = input.value;
    if(inputValue === answer){
        alert("Hurray you won it !");
    }
    else{
        if(inputValue < answer){
            alert("Sorry you have entered a smaller number");
        }else if(inputValue > answer){
            alert("Sorry you have entered a higher number")
        }
    }
})

input.addEventListener("input",(e)=>{
    //console.log(e.target.value);
})
 
refresh.addEventListener("click", (e)=>{
    console.log(getRandom());
})