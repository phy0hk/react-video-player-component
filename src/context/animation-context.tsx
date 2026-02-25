import { createContext } from "react";

export interface AnimationContextProps {
    handleExitHover: () => void;
    handleEnterHover: () => void;
    handleMouseMove: () => void;
    handleOnTouch: () => void;
}
const AnimationContext = createContext<AnimationContextProps>({
    handleEnterHover: () => {},
    handleExitHover: () => {},
    handleMouseMove: () => {},
    handleOnTouch: () => {},
});
export default AnimationContext;
