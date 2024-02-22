import { CountUp } from "countup.js";

export const startCountUpAnimation = () => {
    const initCountUp = (elementId, endValue) => {
        const countUpInstance = new CountUp (elementId, endValue, {
            enableScrollSpy: true,
            suffix: "+",
        });

        if (countUpInstance.error) {
            countUpInstance.start();
        } else {
            console.error(countUpInstance.error)
        }
    };

    initCountUp("number-recommendations", 185);
    initCountUp("number-connections", 23000);
    initCountUp("number-sessions", 10000);

}

