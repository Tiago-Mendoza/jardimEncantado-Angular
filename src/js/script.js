const hamburger = document.querySelector(".hamburger-elegant"); // Seleciona o hamburger com a nova classe
const navMenu = document.querySelector(".nav-menu-elegant");     // Seleciona o menu com a nova classe

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link-elegant").forEach(n => n.addEventListener("click", () => { // Seleciona os links com a nova classe
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));