// Animated Toggle Menu Bar
const animatedMenu = document.getElementById("animatedMenu");
const navMenu = document.getElementById("navMenu");

function toggleMenu(){
    animatedMenu.classList.toggle("change");
    navMenu.classList.toggle("show_menu");
}

animatedMenu.addEventListener("click", toggleMenu);



// Remove Animated Toggle Menu bar
const navLink = document.querySelectorAll(".nav_link");
const animatedChange = document.getElementById("animatedMenu");

function linkAction(){
    const navMenu = document.getElementById("navMenu");

    navMenu.classList.remove("show_menu");
    animatedChange.classList.toggle("change");
}

navLink.forEach(n => n.addEventListener("click", linkAction));