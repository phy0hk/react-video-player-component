import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";
import PlayerContext from "../context/player-context";
// import axios from "axios";
// import { BasicVideoFormat } from "../contants/video-formats";
import type { PlayerStatesT } from "../types";

const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const [VideoRef, setVideoRef] = useState<HTMLVideoElement>();
    const VideoContainerRef = useRef<HTMLDivElement>(null);
    const ControllerDockRef = useRef<HTMLDivElement>(null);
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
        if (!VideoRef) return;
        VideoContainerRef.current?.requestFullscreen();
    }
    function ExitFullscreen() {
        document.exitFullscreen();
    }

    useEffect(() => {
        const detectFullscreenChange = () => {
            setPlayerStates((prev) => ({
                ...prev,
                isInFullscreen: document.fullscreenElement === VideoRef,
            }));
        };
        document.addEventListener("fullscreenchange", detectFullscreenChange);

        return () =>
            document.removeEventListener(
                "fullscreenchange",
                detectFullscreenChange,
            );
    }, []);

    return (
        <PlayerContext.Provider
            value={{
                VideoRef,
                createVideoRef,
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
