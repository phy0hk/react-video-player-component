import { useEffect, useRef, useState, type ReactNode } from "react";
import PlayerContext from "../context/player-context";
import axios from "axios";
import { BasicVideoFormat } from "../contants/video-formats";
import type { PlayerStatesT } from "../types";

const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const VideoRef = useRef<HTMLVideoElement>(null);
  const VideoContainerRef = useRef<HTMLDivElement>(null);
  const ControllerDockRef = useRef<HTMLDivElement>(null);
  // const [src, setSrc] = useState<string>("");
  const [playerStates, setPlayerStates] = useState<PlayerStatesT>({
    paused: true,
    isInFullscreen: false,
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
  function Fullscreen() {
    VideoContainerRef.current?.requestFullscreen();
  }
  function ExitFullscreen() {
    document.exitFullscreen();
  }

  useEffect(() => {
    const detectFullscreenChange = () => {
      setPlayerStates((prev) => ({
        ...prev,
        isInFullscreen: document.fullscreenElement === VideoRef.current,
      }));
    };
    document.addEventListener("fullscreenchange", detectFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", detectFullscreenChange);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        VideoRef,
        VideoContainerRef,
        ControllerDockRef,
        setSource,
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
