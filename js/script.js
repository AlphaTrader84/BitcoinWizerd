'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');

    function toggleNavbar() {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    function closeNavbar() {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    menuIcon.addEventListener('click', toggleNavbar);

    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeNavbar);
    });

    function handleScroll() {
        header.classList.toggle('sticky', window.scrollY > 100);
        closeNavbar();

        const scrollPosition = window.scrollY;
        document.querySelectorAll('section').forEach(section => {
            const offset = section.offsetTop - 150;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= offset && scrollPosition < offset + height) {
                document.querySelectorAll('header nav a').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            }
        });

    }


    window.addEventListener('scroll', handleScroll);


    /* Typed.JS */
    try {
        var typedElement = document.querySelector('.typed');
        if (!typedElement) {
            throw new Error('Typed.JS: Element not found');
        }

    	var typed = new Typed('.typed', {
            strings: ['₿itcoiner', 'Consultant', 'Developer', 'Freelancer', 'Strategist', 'Wizerd'],
            typeSpeed: 100,
            backSpeed: 200,
            backDelay: 1000,
            loop: true,
        });
    } catch (error) {
        console.error("Typed.JS failed to initialize:", error.message);
    }
});