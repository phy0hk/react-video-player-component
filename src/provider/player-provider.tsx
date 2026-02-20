import { useRef, useState, type ReactNode } from "react";
import PlayerContext from "../context/player-context";
import axios from "axios";
import { BasicVideoFormat } from "../contants/video-formats";
import type { PlayerStatesT } from "../types";

const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const VideoRef = useRef<HTMLVideoElement>(null);
    const VideoContainerRef = useRef<HTMLDivElement>(null);
    // const [src, setSrc] = useState<string>("");
    const [playerStates, setPlayerStates] = useState<PlayerStatesT>({
        paused: true,
    });

    const setSource = async (source: string) => {
        // setSrc(source);
        const video = VideoRef.current;
        if (!video) return;
        const res = await axios.head(source);
        if (res.status !== 200) return;
        if (BasicVideoFormat.includes(res.headers["content-type"]) || "") {
            video.src = source;
        }
    };

    function Play() {
        setPlayerStates((prev) => ({ ...prev, paused: false }));
        VideoRef.current?.play();
    }
    function Pause() {
        setPlayerStates((prev) => ({ ...prev, paused: true }));
        VideoRef.current?.pause();
    }
    return (
        <PlayerContext.Provider
            value={{
                VideoRef,
                setSource,
                playerStates,
                Play,
                Pause,
                VideoContainerRef,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};
export default PlayerProvider;
