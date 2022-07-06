const hamburger = document.querySelector('.nav-bar .nav-bar-list .hamburger');
const menu = document.querySelector('.nav-bar .nav-bar-list ul');
const items = document.querySelectorAll('.nav-bar .nav-bar-list ul li a');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu');
    hamburger.classList.toggle('rotate');
});

/*
items.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('menu');
        hamburger.classList.toggle('rotate');
    });
});*/