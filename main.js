const toggler = document.querySelector("#toggler");
const toggler1 = document.querySelector("#toggler1");
const toggler2 = document.querySelector("#toggler2");
const nav = document.querySelector("#nav");
const div = document.querySelector("#home");
const linku = document.querySelector("#homija");
const port = document.querySelector("#port");
const cont = document.querySelector("#cont");
const portfolio = document.querySelector("#portfolio")
const back = document.querySelector(".back");
const contact = document.querySelector("#contact")

toggler.addEventListener("click", () => {
    nav.classList.add("active");
    div.classList.add("active");
 setTimeout(function() {
        div.style.display = "none";
    }, 500);
    back.classList.remove("active");
})
toggler1.addEventListener("click", () => {
    nav.classList.add("active");
    portfolio.classList.remove("activi")
 setTimeout(function() {
        portfolio.style.display = "none";
    }, 200);
    
    back.classList.remove("active");
})
toggler2.addEventListener("click", () => {
    nav.classList.add("active");
    contact.classList.remove("active");
 setTimeout(function() {
        contact.style.display = "none";
    }, 300);
    
    back.classList.remove("active");
})

linku.addEventListener("click", () => {
    nav.classList.remove("active");
    div.classList.remove("active");
setTimeout(function() {
        div.style.display = "block";
    }, 100);
} )

port.addEventListener("click", () => {
    nav.classList.remove("active");
setTimeout(function() {
        portfolio.style.display = "flex";
    }, 100);
    portfolio.classList.add("active", "activi");
    back.classList.add("active");
} )
cont.addEventListener("click", () => {
    nav.classList.remove("active");
    contact.classList.add("active");
setTimeout(function() {
        contact.style.display = "block";
    }, 600);
    contact.classList.add("active");
} )


const loader = document.querySelector("#preloader");

window.addEventListener("load", () => {
    loader.style.opacity = "0"
    setTimeout(function() {
        loader.style.display = "none";
    }, 500);
})

const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}