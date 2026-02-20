import { createContext, createRef, type RefObject } from "react";
import type { PlayerStatesT } from "../types";

const PlayerContext = createContext<{
    VideoRef: RefObject<HTMLVideoElement | null>;
    VideoContainerRef: RefObject<HTMLDivElement | null>;
    setSource: (source: string) => Promise<void>;
    playerStates: PlayerStatesT;
    Play: () => void;
    Pause: () => void;
}>({
    VideoRef: createRef<HTMLVideoElement>(),
    setSource: async () => {},
    playerStates: {
        paused: true,
    },
    Play: () => {},
    Pause: () => {},
    VideoContainerRef: createRef<HTMLDivElement>(),
});
export default PlayerContext;
