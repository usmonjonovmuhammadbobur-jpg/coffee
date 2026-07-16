const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".header__mobile-nav")
hamburger.addEventListener("click" , function (evt){
    hamburger.classList.toggle("hamburger--closed")
    nav.classList.toggle("header__nav-mobile--active")
})