import type { KeyboardEvent } from "react";
import usePlayer from "./usePlayer";

const usePlayerEvents = () => {
  const { playerStates, Play, Pause, Fullscreen, ExitFullscreen } = usePlayer();
  const handleOnKeyDown = (event: KeyboardEvent<HTMLVideoElement>) => {
    console.log(event.code);
    switch (event.code) {
      case "Space":
        {
          if (playerStates.paused) {
            Play();
          } else {
            Pause();
          }
        }
        break;
      case "KeyF": {
        Fullscreen();
        break;
      }
      case "Escape": {
        ExitFullscreen();
        break;
      }
    }
  };
  return { handleOnKeyDown };
};
export default usePlayerEvents;
