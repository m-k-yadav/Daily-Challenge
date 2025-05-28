function step1(cb){
    console.log("step 1 done");
    cb();
}
function step2(cb){
    console.log("step 2 done");
    cb();
}
function step3(cb){
    console.log("step 3 done");
    cb();
}

step1(function(){
    step2(function(){
        step3(function(){
            console.log("all steps done");
        })
    })
})

//this is a callback hell, 
//we can use async and await 
//or promises
//to make it more readable


//example of callback hell is when we have to make multiple api calls
//and we have to wait for each api call to complete before making the next one
function  getUser(userId, callback){ //
    setTimeout(function(){
        const user = {id: userId, name: "Manish"}
        console.log("user fetched with id: " + userId);
        callback(user);
    }, 500);
}
function getOrders(user, callback){
    setTimeout(function(){
        const orders = [{id:1, item:"milk"}, {id:2, item:"Paneer"}];
        console.log("order fetched for user: ", user.name);
        callback(orders);
    }, 500)
}
function processOrders (orders, callback){
    setTimeout(function(){
        const processed = orders.map(items =>({...items, status: "Processed"}));
        console.log("order processed with items: ", processed.map(item => item.item).join(", "));
        callback(processed);
    }, 500)
}
function sendEmail(processedOrders, callback){
    setTimeout(function(){
        const confirmation = `Email sent to user with ${processedOrders.length} orders`;
        callback(confirmation);
    }, 500)
}
// getUser(123, function(user){ //this is the first callback
//     getOrders(user, function(orders){ //this is the second callback
//         processOrders(orders,function(processedOrders){ //this is the third callback
//             sendEmail(processedOrders, function(confirmation){ //this is the fourth callback
//                 console.log(confirmation);
//             })
//         })
//     })
// })
//this is a callback hell


//callback is necessary when we have to wait 
// for a function to complete 
// before moving on to the next one

//otherwise we will have to write functions for each step
//and put timer in between each step
//and that will be a mess

//callbackHell helps in achieving that

//but there is better ways than callback hell
//like promises and async await

// promises
//it have 3 states
//1. pending : when the promise is created and not yet resolved or rejected
//2. fulfilled : when the promise is resolved and the value is returned
//3. rejected : when the promise is rejected and the error is returned


function getUserPromise(userId){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const user = {id: userId, name: "Manish"}
            console.log("user fetched with id: " + userId);
            if(userId){
                resolve(user);
            }
            else{
                reject("user not found");
            }
        }, 1000);
    })
}

function getOrdersPromise(user){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const orders = [{id:1, item:"milk"}, {id:2, item:"Paneer"}];
            console.log("order fetched for user: ", user.name);
            if(orders.length > 0){
                resolve(orders);
            }
            else{
                reject("no orders found");
            }
        }, 1000)
    })
}

function processOrdersPromise(orders){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const processed = orders.map(items =>({...items, status: "Processed"}));
            console.log("order processed with items: ", processed.map(item => item.item).join(", "));
            if(processed.length > 0){
                resolve(processed);
            }
            else{
                reject("no orders to process");
            }
        }, 1000)
    })
}
function sendEmailPromise(processedOrders){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const confirmation = `Email sent to user with ${processedOrders.length} orders`;
            resolve(confirmation);
        }, 1000)
    })
}

getUserPromise(123)
    .then(function(user){
        return getOrdersPromise(user);
    })
    .then(function(orders){
        return processOrdersPromise(orders);
    })
    .then(function(processedOrders){
        return sendEmailPromise(processedOrders);
    })
    .then(function(confirmation){
        console.log("Order confirmation: ", confirmation);
    })

    .catch(function(error){
        console.log("Error in normal flow",error);
    })


 //another exmple   

function step1Promise(){
    return new Promise(function(res, rej){
        console.log("step 1 done");
        res();
    })
}
function step2Promise(){
    return new Promise(function(res, rej){
        console.log("step 2 done");
        res();
    })
}
function step3Promise(){
    return new Promise(function(res, rej){
        console.log("step 3 done");
        res();
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(function(){
        console.log("all steps done");
    })