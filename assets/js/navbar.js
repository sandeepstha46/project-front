let visibility = false;

const menuEvent = document.querySelector(".hamburger");
const menuBar = document.querySelector(".hamburger-menu");
const menuList = document.querySelector(".navbar-section__menu");
const iconList = document.querySelector(".navbar-section__icons");

menuEvent.addEventListener("click", () => {
    visibility = !visibility;
    if (visibility) {
        menuBar.classList.add("animate-menu");
        menuList.classList.add("d-block");
        menuList.classList.remove("d-none");
        iconList.classList.add("d-block");
        iconList.classList.remove("d-none");
    } else {
        menuBar.classList.remove("animate-menu");
        menuList.classList.remove("d-block");
        menuList.classList.add("d-none");
        iconList.classList.remove("d-block");
        iconList.classList.add("d-none");
    }
});