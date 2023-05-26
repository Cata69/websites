const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
const zoomContainer = document.querySelector(".zoom-container");
const zoomImage = document.querySelector("#zoom-image");

zoomContainer.addEventListener("click", function() {
  zoomContainer.classList.toggle("zoomed");
});
const menuButton = document.querySelector('#menu-button');
const navbarList = document.querySelector('.navbar-list'); 
const navbar = document.querySelector('.navbar');
menuButton.addEventListener('click', () => {
    navbar.classList.toggle('nav-hidden');
    navbar.classList.toggle('nav-visible');

    if(!navbar.classList.contains('nav-scrolled')){
        navbar.classList.toggle('nav-scrolled');
    }
    
    let isOpen = menuButton.getAttribute('aria-expanded');
    if(isOpen === 'false'){
        menuButton.setAttribute('aria-expanded', 'true');
    } else if (isOpen === 'true'){
        menuButton.setAttribute('aria-expanded', 'false');
    }
});