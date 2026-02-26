import { createContext } from "react";
import type { PlayerStatesT } from "../types";

const PlayerContext = createContext<{
    VideoRef: HTMLVideoElement | undefined;
    createVideoRef: (e: HTMLVideoElement) => void;
    VideoContainerRef: HTMLDivElement | undefined;
    ControllerDockRef: HTMLDivElement | undefined;

    playerStates: PlayerStatesT;
    Play: () => void;
    Pause: () => void;
    Fullscreen: () => void;
    ExitFullscreen: () => void;
    createVideoContainerRef: (e: HTMLDivElement) => void;
    createControllerDockRef: (e: HTMLDivElement) => void;
}>({
    VideoRef: undefined,
    createVideoRef: () => {},
    ControllerDockRef: undefined,
    playerStates: {
        paused: true,
        isInFullscreen: false,
    },
    Play: () => {},
    Pause: () => {},
    VideoContainerRef: undefined,
    Fullscreen: () => {},
    ExitFullscreen: () => {},
    createVideoContainerRef: () => {},
    createControllerDockRef: () => {},
});
export default PlayerContext;
