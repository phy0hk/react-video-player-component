import { createContext, createRef, type RefObject } from "react";
import type { PlayerStatesT } from "../types";

const PlayerContext = createContext<{
  VideoRef: RefObject<HTMLVideoElement | null>;
  VideoContainerRef: RefObject<HTMLDivElement | null>;
  ControllerDockRef: RefObject<HTMLDivElement | null>;
  setSource: (source: string) => Promise<void>;
  playerStates: PlayerStatesT;
  Play: () => void;
  Pause: () => void;
  Fullscreen: () => void;
  ExitFullscreen: () => void;
}>({
  VideoRef: createRef<HTMLVideoElement>(),
  ControllerDockRef: createRef<HTMLDivElement>(),
  setSource: async () => {},
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
