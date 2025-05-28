function getUserId(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res({id: 1, name: "Manish"});
        }, 20000)
    })
}

function getUserPosts(userId){
    return  new Promise((res, rej)=>{
        setTimeout(()=>{
            res(["Title", "Title2", "Title3"]);
        }, 20000)
    })
}

getUserId()
    .then((data)=>{
        console.log(data)
        return getUserPosts(data.id);
    })
    .then((posts)=>{
        console.log(posts);
    })


//fetch
const button = document.querySelector("button");
button.addEventListener("click", function(){
    fetch("https://api.github.com/users/async")
        .then(res => res.json())
        .then(function(data){
            console.log(data)
        })
    })
