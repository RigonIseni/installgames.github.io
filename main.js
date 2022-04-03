const nav = document.querySelector("nav");
const toggler = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const x = document.querySelector(".iksi");

toggler.addEventListener("click", () => {
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
        menu.style.display = "block";
        x.style.display = "none";
    }else{
        nav.classList.add("active");
        menu.style.display = "none";
        x.style.display = "block";
    }
})

const loader = document.querySelector("#preloader");
const body = document.querySelector("body");

window.addEventListener("load", () => {
loader.style.display = "none";
body.style.overflowY = "scroll";
})