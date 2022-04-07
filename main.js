const nav = document.querySelector("nav");
const toggler = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const x = document.querySelector(".iksi");
const back = document.querySelector(".black");
const link = document.querySelector(".links");
const link1 = document.querySelector(".links1");
const link2 = document.querySelector(".links2");
const link3 = document.querySelector(".links3");

link.addEventListener("click", () => {
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
        menu.style.display = "block";
        x.style.display = "none";
        back.classList.remove("active");
    }else{
        nav.classList.add("active");
        menu.style.display = "none";
        x.style.display = "block";
        back.classList.add("active");
    }
})
link1.addEventListener("click", () => {
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
        menu.style.display = "block";
        x.style.display = "none";
        back.classList.remove("active");
    }else{
        nav.classList.add("active");
        menu.style.display = "none";
        x.style.display = "block";
        back.classList.add("active");
    }
})
link2.addEventListener("click", () => {
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
        menu.style.display = "block";
        x.style.display = "none";
        back.classList.remove("active");
    }else{
        nav.classList.add("active");
        menu.style.display = "none";
        x.style.display = "block";
        back.classList.add("active");
    }
})
link3.addEventListener("click", () => {
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
        menu.style.display = "block";
        x.style.display = "none";
        back.classList.remove("active");
    }else{
        nav.classList.add("active");
        menu.style.display = "none";
        x.style.display = "block";
        back.classList.add("active");
    }
})

toggler.addEventListener("click", () => {
    if(nav.classList.contains("active")){
        nav.classList.remove("active");
        menu.style.display = "block";
        x.style.display = "none";
        back.classList.remove("active");
    }else{
        nav.classList.add("active");
        menu.style.display = "none";
        x.style.display = "block";
        back.classList.add("active");
    }
});

const loader = document.querySelector("#preloader");
const body = document.querySelector("body");

window.addEventListener("load", () => {
loader.style.display = "none";
body.style.overflowY = "scroll";
});