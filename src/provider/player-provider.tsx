import { useCallback, useEffect, useState, type ReactNode } from "react";
import PlayerContext from "../context/player-context";
// import axios from "axios";
// import { BasicVideoFormat } from "../contants/video-formats";
import type { PlayerStatesT } from "../types";

const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [VideoRef, setVideoRef] = useState<HTMLVideoElement>();
    // const VideoContainerRef = useRef<HTMLDivElement>(null);
    const [VideoContainerRef, setVideoContainerRef] =
        useState<HTMLDivElement>();
    // const ControllerDockRef = useRef<HTMLDivElement>(null);
    const [ControllerDockRef, setControllerDockRef] =
        useState<HTMLDivElement>();
    // const [src, setSrc] = useState<string>("");
    const [playerStates, setPlayerStates] = useState<PlayerStatesT>({
        paused: true,
        isInFullscreen: false,
    });

    // const setSource = async (source: string) => {
    //   // setSrc(source);
    //   const video = VideoRef.current;
    //   if (!video) return;
    //   const res = await axios.head(source);
    //   if (res.status !== 200) return;
    //   if (BasicVideoFormat.includes(res.headers["content-type"]) || "") {
    //     video.src = source;
    //   }
    // };
    const createVideoRef = useCallback((e: HTMLVideoElement) => {
        setVideoRef(e);
    }, []);
    const createVideoContainerRef = useCallback((e: HTMLDivElement) => {
        setVideoContainerRef(e);
    }, []);
    const createControllerDockRef = useCallback((e: HTMLDivElement) => {
        setControllerDockRef(e);
    }, []);
    function Play() {
        if (!VideoRef) return;
        setPlayerStates((prev) => ({ ...prev, paused: false }));
        if (VideoRef.paused) VideoRef.play();
    }
    function Pause() {
        if (!VideoRef) return;
        setPlayerStates((prev) => ({ ...prev, paused: true }));
        if (!VideoRef.paused) VideoRef.pause();
    }
    function Fullscreen() {
        if (!VideoContainerRef) return;
        VideoContainerRef.requestFullscreen();
    }
    function ExitFullscreen() {
        document.exitFullscreen();
    }
    useEffect(() => {
        if (!VideoContainerRef) return;
        const handleFullscreenChange = () => {
            console.log("GG");
            setPlayerStates((prev) => ({
                ...prev,
                isInFullscreen:
                    document.fullscreenElement === VideoContainerRef,
            }));
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () =>
            document.removeEventListener(
                "fllscreenchange",
                handleFullscreenChange,
            );
    }, [VideoContainerRef]);

    return (
        <PlayerContext.Provider
            value={{
                VideoRef,
                createVideoRef,
                createVideoContainerRef,
                createControllerDockRef,
                VideoContainerRef,
                ControllerDockRef,
                playerStates,
                Play,
                Pause,
                Fullscreen,
                ExitFullscreen,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};
export default PlayerProvider;
