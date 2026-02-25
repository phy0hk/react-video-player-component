import { animate, createTimer } from "animejs";
import AnimationContext from "../context/animation-context";
import type { ReactNode } from "react";

const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const enterAnimate = () => {
        animate("#controller-dock", {
            delay: 0,
            duration: 100,
            y: 0,
        });
    };
    const exitAnimate = () => {
        animate("#controller-dock", {
            delay: 50,
            duration: 500,
            y: 150,
        });
    };
    const timer = createTimer({
        duration: 4000,
        onBegin: enterAnimate,
        onComplete: exitAnimate,
    });
    const handleExitHover = () => {
        timer.cancel();
        exitAnimate();
    };
    const handleEnterHover = () => {
        timer.cancel();
        enterAnimate();
    };
    const handleMouseMove = () => {
        timer.restart();
    };
    const handleOnTouch = () => {
        timer.restart();
    };
    const animateProgressBar = () => {};
    return (
        <AnimationContext.Provider
            value={{
                handleEnterHover,
                handleExitHover,
                handleMouseMove,
                handleOnTouch,
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
};
export default AnimationProvider;
