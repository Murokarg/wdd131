const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('show');
})

