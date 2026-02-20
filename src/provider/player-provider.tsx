import { useRef, type ReactNode } from "react";
import PlayerContext from "../context/player-context";

const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const VideoRef = useRef<HTMLVideoElement>(null);
    return (
        <PlayerContext.Provider value={{ VideoRef }}>
            {children}
        </PlayerContext.Provider>
    );
};
export default PlayerProvider;
