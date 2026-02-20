import { animate } from "animejs";
import { useEffect } from "react";
import usePlayer from "./usePlayer";

const useAnimation = () => {
  const { ControllerDockRef } = usePlayer();
  const handleEnterHover = () => {
    animate("#controller-dock", {
      delay: 0,
      duration: 100,
      y: 0,
    });
  };
  const handleExitHover = () => {
    animate("#controller-dock", {
      delay: 0,
      duration: 100,
      y: 100,
    });
  };
  const StartTimer = () => {};
  useEffect(() => {
    if (!ControllerDockRef.current) return;
    const controllerDock = ControllerDockRef.current;
    console.log(controllerDock);
    controllerDock.addEventListener("mouseleave", handleExitHover);
    controllerDock.addEventListener("mouseenter", handleEnterHover);
    return () => {
      controllerDock.removeEventListener("mouseenter", handleEnterHover);
      controllerDock.removeEventListener("mouseleave", handleExitHover);
    };
  }, [ControllerDockRef]);
  return {};
};

export default useAnimation;
