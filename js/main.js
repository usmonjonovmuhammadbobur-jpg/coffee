const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav__mobile")
hamburger.addEventListener("click" , function (evt){
    hamburger.classList.toggle("hamburger--closed")
    nav.classList.toggle("nav__mobile--active")
})