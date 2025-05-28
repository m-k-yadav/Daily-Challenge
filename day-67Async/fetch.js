const input = document.querySelector("#input");
const btn = document.getElementById("submit-btn");

var userName = "";
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(input.value);
    userName = input.value;
    input.value = "";

    getUserInfo(userName)
    .then(function(data){
        console.log(data);
        const img = document.createElement("img");
        img.src = data.avatar_url;
    })
})


function getUserInfo(name){
    return fetch(`https://api.github.com/users/${name}`)
    .then(raw => raw.json());
        
}

