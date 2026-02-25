import usePlayer from "./hooks/usePlayer";
import type { VideoProps } from "./types";
import Controls from "./components/controls/main-control";
import usePlayerEvents from "./hooks/usePlayerEvents";
import ReactPlayer from "react-player";
import { useEffect } from "react";
const VideoPlayer = ({
    src,
    className,
    controls,
    controlType = "default",
}: VideoProps) => {
    const { createVideoRef, VideoContainerRef, Pause, Play } = usePlayer();
    const { handleOnKeyDown } = usePlayerEvents();
    return (
        <div
            className={`relative bg-black ${className}`}
            ref={VideoContainerRef}
        >
            <ReactPlayer
                ref={createVideoRef}
                src={src}
                // className="w-full h-full outline-none"
                style={{ width: "100%", height: "100%" }}
                controls={controls && controlType === "default"}
                onKeyDown={handleOnKeyDown}
                onPause={Pause}
                onPlay={Play}
            ></ReactPlayer>
            {controls && controlType !== "default" && (
                <Controls type={controlType} />
            )}
        </div>
    );
};
export default VideoPlayer;
