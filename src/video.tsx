import { useEffect } from "react";
import usePlayer from "./hooks/usePlayer";
import type { VideoProps } from "./types";
import Controls from "./components/controls/main-control";
import usePlayerEvents from "./hooks/usePlayerEvents";

const VideoPlayer = ({
    src,
    className,
    controls,
    controlType = "default",
}: VideoProps) => {
    const { VideoRef, setSource, VideoContainerRef } = usePlayer();
    useEffect(() => {
        if (!src) return;
        setSource(src);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src]);
    const { handleOnKeyDown } = usePlayerEvents();
    return (
        <div
            className={`relative bg-black ${className}`}
            ref={VideoContainerRef}
        >
            <video
                ref={VideoRef}
                className={`w-full h-full`}
                controls={controls && controlType === "default"}
                onKeyDown={handleOnKeyDown}
            ></video>
            {controls && controlType !== "default" && (
                <Controls type={controlType} />
            )}
        </div>
    );
};
export default VideoPlayer;
