/*
const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bxs-brightness-half');
    document.body.classList.toggle('dark-mode');
});

====================================sticky navbar=====================================
window.onscroll = () => {
let header = document.querySelector('.header');
header.classList.toggle('stiky',window.scrollY > 100)
};

*/
//getting all required elements
//getting all required elements

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            // Remove 'clicked' class from all links
            links.forEach(item => item.classList.remove("clicked"));

            // Add 'clicked' class to the clicked link
            link.classList.add("clicked");
        });
    });
});
