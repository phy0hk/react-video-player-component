import usePlayer from "./hooks/usePlayer";
import type { ControlsTypes } from "./types";
export interface VideoRef extends React.AllHTMLAttributes<HTMLVideoElement> {
    src?: string;
    controls?: boolean;
    controlType?: ControlsTypes;
}
const VideoPlayer = ({
    src,
    className,
    controls,
    controlType = "default",
}: VideoRef) => {
    const { VideoRef } = usePlayer();
    return (
        <div className="relative">
            <video
                ref={VideoRef}
                src={src}
                className={`${className}`}
                controls={controls && controlType === "default"}
            ></video>
        </div>
    );
};
export default VideoPlayer;
