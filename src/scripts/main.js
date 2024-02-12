import "../styles/main.scss";
import "bootstrap";

if (module.hot) {
    module.hot.accept();
}

// Function to adjust scroll position for fixed navbar
const adjustScrollNavbar = (targetId) => {
    setTimeout(() => {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scroll({
                top: targetElement.offsetTop - navbarHeight,
                behavior: "smooth",
            });
        }
    }, 325);
};

// Initialize navbar links with adjusted scroll functionality
const initNavbarLinks = () => {
    document.querySelectorAll("a[href^='#']").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            adjustScrollNavbar(link.getAttribute("href"));

            // Collapse navbar toggler on logo click
            if (link.classList.contains("logo-link")) {
                const navbarToggler = document.querySelector(".navbar-toggler");
                if (!navbarToggler.classList.contains("collapsed")) {
                    navbarToggler.click();
                }
            }
        });
    });
};

// Adjust scroll when window is resized
const handleWindowResize = () => {
    window.addEventListener("resize", () => {
        const currentHash = window.location.hash;
        if (currentHash) {
            adjustScrollNavbar(currentHash);
        }
    });
};

// Function to initialize and update ScrollSpy based on screen size
const initAndUpdateScrollSpy = () => {
    const scrollSpyElement = document.querySelector('[data-bs-spy="scroll"]');
    const breakpoint = 768;

    const updateScrollSpy = () => {
        if (window.innerWidth <= breakpoint) {
            bootstrap.ScrollSpy.getInstance(scrollSpyElement)?.dispose();
        } else {
            new bootstrap.ScrollSpy(scrollSpyElement, {
                target: "#navbar",
                rootMargin: "0px 0px -40%",
            });
        }
    };

    window.addEventListener("resize", updateScrollSpy);
    document.addEventListener("DOMContentLoaded", updateScrollSpy);
};

// Function to collapse the navbar when clicked outside of it
const collapseNavbarOnClickOutside = () => {
    document.addEventListener("click", (event) => {
        const navbarElement = document.getElementById("navbar");
        const navbarToggler = document.querySelector(".navbar-toggler");

        if (
            !navbarElement.contains(event.target) &&
            !navbarToggler.classList.contains("collapsed")
        ) {
            navbarToggler.click();
        }
    });
};

// Initialize all functionalities
const init = () => {
    initNavbarLinks();
    handleWindowResize();
    initAndUpdateScrollSpy();
    collapseNavbarOnClickOutside();
};

init();
