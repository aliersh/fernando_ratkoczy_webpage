import "../styles/main.scss";
import "bootstrap";

import {
    collapseNavbarOnClickAndScroll,
    collapseOnClick,
    handleWindowResize,
} from "./navbar.js";
import { enableScrollSpy } from "./scrollspy.js";
import { startCountUpAnimation } from "./countUp.js";

if (module.hot) {
    module.hot.accept();
}

// Initialize all functionalities
const init = () => {
    collapseOnClick();
    handleWindowResize();
    enableScrollSpy();
    collapseNavbarOnClickAndScroll();
    startCountUpAnimation();
};

init();
