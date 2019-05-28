// Select Document Object Model (DOM) Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

//Array of nav-item class
const navItems = document.querySelectorAll('.nav-item');

//Set initial state of Menu (Overlay)
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        //Handling the array
        navItems.forEach( item => item.classList.add('show') );

        //Reset Menu state
        showMenu = true;

    } else {
        //Opposite of what we did above
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        //Handling the array
        navItems.forEach( item => item.classList.remove('show') );

        //Reset Menu state
        showMenu = false;
    }
}