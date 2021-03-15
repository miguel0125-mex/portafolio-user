/*--------------MENU SHOW--------------*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('menu__show');
        })
    }
}
showMenu('nav-toggle', 'navegacion__menu');

const navLink = document.querySelectorAll('.link');

function linkAction() {
    navLink.forEach(n => n.classList.remove());
    this.classList.add();

    const navMenu = document.getElementById('navegacion__menu');
    navMenu.classList.remove('menu__show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));