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
    }, 320);
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
