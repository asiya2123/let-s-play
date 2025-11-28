let menu_icon=document.querySelector(".fa-bars");
let link=document.querySelector(".links");
let body=document.querySelector("body");
menu_icon.addEventListener("click",()=>{
    console.log("clicked");
    link.classList.toggle("links");
    menu_icon.classList.toggle("fa-xmark");
    menu_icon.classList.toggle("fa-bars");
});

window.onclick = function(event) {
    if (event.target == link) {
        link.style.display = "none";
        // body.style.overflow="visible";
        console.log("clicked menu");
    }
}