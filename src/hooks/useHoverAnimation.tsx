import { useContext } from "react";
import AnimationContext from "../context/animation-context";

const useAnimation = () => useContext(AnimationContext);

export default useAnimation;
