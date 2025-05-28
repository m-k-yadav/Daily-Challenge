const button = document.querySelector("button");
const percent = document.querySelector('#percent');
const growth = document.querySelector("#growth")

var grow = 0;

button.addEventListener("click", ()=>{
    var int = setInterval(function(){
        console.log(grow);
        grow++;
        percent.innerHTML = grow + '%';
        growth.style.width = grow + '%';
        
    },20)

    setTimeout(() => {
        clearInterval(int);
        button.innerHTML = "Downloaded"
        button.style.opacity = 0.7;
        button.style.pointerEvents = "none";
    }, 2000);
})

