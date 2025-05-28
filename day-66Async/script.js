function orderPizza(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            let chances = Math.floor(Math.random()*10);
            if(chances < 6)
                res(chances);
            else
                rej(chances);
        },1000 )
    })
}

orderPizza()
    .then(function(number){
        console.log(`Pizza is ready : with number ${number}`)
    })
    .catch(function(number){
        console.log(`Sorry, we are out of stock : with number ${number}`);
    })



function getUser(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res([
                {id: 1, name: "Manish"},
                {id: 2, name: "Ravi"},
                {id: 3, name: "Tara"}
            ])
        }, 1000)
    })
}

function getPosts(userId){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(["title1", "title2", "title3"]);
        }, 1000);
    })
}

function getComments(postId){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(["great Post", "amazing", "nice work"]);
        },1000)
    })
}

getUser()
    .then((data)=>{
        console.log(data);
        return getPosts(data[0].id);
    })
    .then((id)=>{
        console.log(id);
        return getComments("comments");
    })
    .then((comments)=>{
        console.log(comments);
    })
    .finally(()=>{
        console.log("All data fetched");
    })