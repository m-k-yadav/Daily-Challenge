const btn = document.querySelector("button");
const image = document.querySelector("#image-1");
const image2 = document.querySelector("#image-2");
const area = document.querySelector("#area");
const body = document.querySelector("body");
const imgs = document.querySelectorAll(".imgs");

// btn.addEventListener("click", function(){
//     var img1 = image.getAttribute("src")
//     var img2 = image2.getAttribute("src")
//         console.log(img1)

//     image.setAttribute("src", img2);
//     image2.setAttribute("src", img1);
// })

function createElement(){
    const newElement = document.createElement("img");
    newElement.setAttribute("src", "img1.png");
    newElement.setAttribute("alt", "new image");
    newElement.style.height = "100px";
    newElement.style.objectFit = "fill";
    newElement.style.position = "absolute";
    return newElement;
}

// btn.addEventListener("click", function(){
//     image.style.display = "none";
//     image2.style.display = "none";
//     let rot = Math.random() * 360;
//     let x = Math.random()*90;
//     let y = Math.random()*90;
//     var img = createElement();
//     img.style.left = x + "%";
//     img.style.top = y +'%';
//     //img.style.transform = "rotate(" + rot + "deg)";
//     img.style.rotate = rot + "deg";
//     area.appendChild(img);
// })

btn.addEventListener("dblclick", function(){
    image.style.display = "none";
    image2.style.display = "none";
    let img = document.createElement("img");

        img.setAttribute("src", "img1.png");
        img.setAttribute("alt", "new image");
        img.style.height = "100px";
        img.style.position = "absolute";
        img.style.left = "20%";
        img.style.top = '20%';
    body.appendChild(img);

// i want to hide it after 2 seconds
   
    setTimeout(() => {
        img.remove();
        image.style.display = "block";
        image2.style.display = "block";
    }, 2000);
})

imgs.forEach((img)=>{
    img.addEventListener("click", function(e){
        console.log(e.target);
        let targetIMage = img.childElementCount
        
        targetIMage.style.opacity = "0.5"
        let imag = document.createElement("img");
            imag.setAttribute("src", "heart.png");
            imag.setAttribute("id", "love");
            imag.setAttribute("alt", "new imag");
            imag.style.height = "100px";
        img.appendChild(imag);

        setTimeout(() => {
            imag.remove();
             targetIMage.style.opacity = "1"
        }, 2000);
    })
})