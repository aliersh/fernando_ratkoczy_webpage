import { ScrollSpy } from "bootstrap";

// Enable scrollspy for > lg sizes'
export const enableScrollSpy = () => {
    const scrollSpyElement = document.body;
    const breakpoint = 992;
    const scrollSpyConfig = {
        target: "#navbar",
        rootMargin: "-25% 0px -25%",
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