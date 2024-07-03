const navLinks = document.querySelectorAll(".navbarlinks li");
const menuBtn = document.querySelector(".mobilemenubutton");
const mobileMenu = document.querySelector(".mobilemenu");
const overflow = document.querySelector(".safety");
const mobileLinks = document.querySelectorAll(".mobilelinks li");

menuBtn.addEventListener("click", () => {
    const icon = document.querySelector(".mobilemenubutton img");
    menuBtn.classList.toggle("active-btn");
    mobileMenu.classList.toggle("activemenu");
    overflow.classList.toggle("activemenu");
    if (menuBtn.classList.contains("active-btn")) {
    icon.src = "./images/icon-close-menu.svg";
    } else {
    icon.src = "./images/icon-menu.svg";
    }
});

navLinks.forEach((link) => {
    const subMenu = link.querySelector(".submenu");
    link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("activemenu");
    });
});

mobileLinks.forEach((link) => {
    const subMenu = link.querySelector(".mobilesub");
    
    link.addEventListener("click", () => {
    link.classList.toggle("active");
    subMenu.classList.toggle("activemenu");
    });
});

