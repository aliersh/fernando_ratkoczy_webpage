// Function to adjust scroll position for fixed navbar
export const adjustScrollNavbar = (targetId) => {
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

// Function to collapse the navbar when clicked outside of it or scroll
export const collapseNavbarOnClickAndScroll = () => {
    //Function to check and collapse navbar
    const checkAndCollapseNavbar = () => {
        const navbarToggler = document.querySelector(".navbar-toggler");
        const isNavbarExpanded =
            navbarToggler.getAttribute("aria-expanded") === "true";

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
};

// Function to collapse the navbar when the user clicks a link
export const collapseOnClick = () => {
    document.querySelectorAll("a[href^='#']").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            adjustScrollNavbar(link.getAttribute("href"));

            //Check if the screen width is md or smaller
            const screenWidth = window.innerWidth;
            const breakpoint = 768;

            if (screenWidth < breakpoint) {
                // Collapse navbar toggler on logo click
                if (
                    link.classList.contains("logo-link") ||
                    link.classList.contains("nav-link")
                ) {
                    const navbarToggler =
                        document.querySelector(".navbar-toggler");
                    if (!navbarToggler.classList.contains("collapsed")) {
                        navbarToggler.click();
                    }
                }
            }
        });
    });
};

// Adjust scroll when window is resized
export const handleWindowResize = () => {
    window.addEventListener("resize", () => {
        const currentHash = window.location.hash;
        if (currentHash) {
            adjustScrollNavbar(currentHash);
        }
    });
};