import type { KeyboardEvent } from "react";
import usePlayer from "./usePlayer";

const usePlayerEvents = () => {
    const { VideoContainerRef, playerStates, Play, Pause } = usePlayer();
    const handleOnKeyDown = (event: KeyboardEvent<HTMLVideoElement>) => {
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
                VideoContainerRef.current?.requestFullscreen();
            }
        }
    };
    return { handleOnKeyDown };
};
export default usePlayerEvents;
