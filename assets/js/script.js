'use strict';

//add Event on multiple element

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

//preloading

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
    loadingElement.classList.add("loaded");
    this.document.body.classList.remove("active");
});

//mobile nav toggle

const [navTogglers, navLinks, navbar, overlay] = [
    document.querySelectorAll("[data-nav-toggler]"),
    document.querySelectorAll("[data-nav-link]"),
    document.querySelector("[data-navbar]"),
    document.querySelector("[data-overlay]")
];

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.remove("active");
}

addEventOnElements(navTogglers, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNav);

//header

const header = document.querySelector("[data-header]" );

const activeElementOnScroll = function () {
    if (window.scrollY > 50) {
        header.classList.add("active");
        } else {
            header.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElementOnScroll);



const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    const bodyHeight = this.document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollEndPos = bodyHeight - windowHeight;
    const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

    backTopBtn.textContent = `${totalScrollPercent.toFixed(0)}%`;

//visible back to top button
    if (totalScrollPercent > 5) {
        backTopBtn.classList.add("show");
    } else {
        backTopBtn.classList.remove("show");
    }
});


//scroll reveal

const revealElements = document.querySelectorAll("[data-reveal");

const scrollReveal = function () {
    for(let i = 0; i < revealElements.length; i++) {
        const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.
        innerHeight / 1.15;

        if (elementIsInScreen) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("scroll", scrollReveal);

scrollReveal();

//custom cursor

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


