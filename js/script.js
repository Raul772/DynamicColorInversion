const navbar = document.querySelector("[navbar]");
const navbarHeight = navbar.offsetHeight;
const sections = document.querySelectorAll("section:not(.navbar)");

let windowScroll = window.scrollY;
window.addEventListener("scroll", () => {
    windowScroll = window.scrollY;
});

setInterval(() => {

    if (windowScroll > navbarHeight) {
        navbar.classList.remove("navbg-light");
        navbar.classList.add("navbg-dark");
    }else{
        navbar.classList.remove("navbg-dark");
        navbar.classList.add("navbg-light");
    }
}, 500);