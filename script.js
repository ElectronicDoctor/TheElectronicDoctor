// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Smooth fade-in animation
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1.2s";
        document.body.style.opacity = 1;
    }, 100);
});