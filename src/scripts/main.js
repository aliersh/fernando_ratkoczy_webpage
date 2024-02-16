import "../styles/main.scss";
import "bootstrap";
import { ScrollSpy } from "bootstrap";

if (module.hot) {
    module.hot.accept();
}

// Function to adjust scroll position for fixed navbar
const adjustScrollNavbar = (targetId) => {
    setTimeout(() => {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetPosition = targetElement.offsetTop - navbarHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    }, 325);
};

// Function to collapse the navbar when the user clicks a link
const initNavbarLinks = () => {
    document.querySelectorAll("a[href^='#']").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            adjustScrollNavbar(link.getAttribute("href"));

            // Collapse navbar toggler on logo click
            if (
                link.classList.contains("logo-link") ||
                link.classList.contains("nav-link")
            ) {
                const navbarToggler = document.querySelector(".navbar-toggler");
                if (!navbarToggler.classList.contains("collapsed")) {
                    navbarToggler.click();
                }
            }
        });
    });
};

// // Adjust scroll when window is resized
const handleWindowResize = () => {
    window.addEventListener("resize", () => {
        const currentHash = window.location.hash;
        if (currentHash) {
            adjustScrollNavbar(currentHash);
        }
    });
};

// Enable scrollspy for > lg sizes'
const enableScrollSpy = () => {
    const scrollSpyElement = document.body;
    const breakpoint = 992;
    const scrollSpyConfig = {
        target: "#navbar",
        offset: 50,
    };

    if (window.innerWidth >= breakpoint) {
        new ScrollSpy(scrollSpyElement, scrollSpyConfig);
    } else {
        const scrollSpyInstance = ScrollSpy.getInstance(scrollSpyElement);
        if (scrollSpyInstance) {
            scrollSpyInstance.dispose();
        }
    }

    document.addEventListener("DOMContentLoaded", enableScrollSpy);
    window.addEventListener("resize", enableScrollSpy);
};

// Function to collapse the navbar when clicked outside of it or scroll
const collapseNavbarOnClickAndScroll = () => {
    //Function to check and collapse navbar
    const checkAndCollapseNavbar = () => {
        const navbarToggler = document.querySelector(".navbar-toggler");
        const isNavbarExpanded = navbarToggler.getAttribute("aria-expanded") === "true";

        if (isNavbarExpanded) {
            navbarToggler.click();
        }
    };

    //Event listener for click
    document.addEventListener("click", (event) => {
        const navbarElement = document.getElementById("navbar");
        if (!navbarElement.contains(event.target)) {
            checkAndCollapseNavbar();
        }
    });

    //Event listener for scroll
    window.addEventListener("scroll", checkAndCollapseNavbar);
}

// Initialize all functionalities
const init = () => {
    initNavbarLinks();
    handleWindowResize();
    enableScrollSpy();
    collapseNavbarOnClickAndScroll();
};

init();
