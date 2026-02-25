import { createContext, createRef, type RefObject } from "react";
import type { PlayerStatesT } from "../types";

const PlayerContext = createContext<{
    VideoRef: HTMLVideoElement | undefined;
    createVideoRef: (e: HTMLVideoElement) => void;
    VideoContainerRef: RefObject<HTMLDivElement | null>;
    ControllerDockRef: RefObject<HTMLDivElement | null>;
    playerStates: PlayerStatesT;
    Play: () => void;
    Pause: () => void;
    Fullscreen: () => void;
    ExitFullscreen: () => void;
}>({
    VideoRef: undefined,
    createVideoRef: () => {},
    ControllerDockRef: createRef<HTMLDivElement>(),
    playerStates: {
        paused: true,
        isInFullscreen: false,
    },
    Play: () => {},
    Pause: () => {},
    VideoContainerRef: createRef<HTMLDivElement>(),
    Fullscreen: () => {},
    ExitFullscreen: () => {},
});
export default PlayerContext;
