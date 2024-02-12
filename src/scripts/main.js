import "../styles/main.scss";
import "bootstrap";

if (module.hot) {
    module.hot.accept();
}

// Adjustment scroll for fixed top navbar

const navbarScroll = (targetId) => {
    setTimeout(() => {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const target = document.querySelector(targetId);

        window.scroll({
            top: target.offsetTop - navbarHeight,
            behavior: "smooth",
        });
    }, 325); // Time out to wait until calculate the height of the element
};

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        navbarScroll(anchor.getAttribute("href"));
    });
});

window.addEventListener("resize", () => {
    const currentSection = window.location.hash;
    if (currentSection) {
        navbarScroll(currentSection);
    }
});

// Scrollspy function (disabled in < md size screens)

const scrollSpyElm = document.querySelector('[data-bs-spy="scroll"]');
const breakpoint = 768;

const updateScrollSpy = () => {
    if (window.innerWidth <= breakpoint) {
        bootstrap.ScrollSpy.getInstance(scrollSpyElm).dispose();
    } else {
        new bootstrap.ScrollSpy(scrollSpyElm, {
            target: "#navbar",
            rootMargin: "0px 0px -40%",
            smoothScroll: true,
        });
    }
};

window.addEventListener("resize", updateScrollSpy);
document.addEventListener("DOMContentLoaded", updateScrollSpy);

// Click on any part to collapse the navbar toggle button

document.addEventListener("click", (e) => {
    let isClickInsideNavbar = document
        .getElementById("navbar")
        .contains(e.target);
    let navbarToggler = document.querySelector(".navbar-toggler");

    if (
        !isClickInsideNavbar &&
        navbarToggler.classList.contains("collapsed") === false
    ) {
        navbarToggler.click();
    }
});
