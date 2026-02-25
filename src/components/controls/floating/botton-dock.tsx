import {
    FullscreenIcon,
    LucideFullscreen,
    Pause as PauseIcon,
    Play as PlayIcon,
} from "lucide-react";
import usePlayer from "../../../hooks/usePlayer";
import Range from "./range";
import useAnimation from "../../../hooks/useHoverAnimation";
import useProgressTracker from "../../../hooks/useProgressTracker";

const BottomDock = () => {
    const { ControllerDockRef, playerStates, Play, Pause, VideoRef } =
        usePlayer();
    const { handleExitHover, handleEnterHover, handleOnTouch } = useAnimation();
    const { progress, handleProgressChange } = useProgressTracker(VideoRef);
    return (
        <div
            className="w-full h-1/6 max-h-14  flex p-2  overflow-hidden outline-none border-none absolute bottom-0"
            ref={ControllerDockRef}
            onMouseEnter={handleEnterHover}
            onMouseLeave={handleExitHover}
            onTouchMove={handleOnTouch}
        >
            <div
                className="bg-zinc-50 rounded w-full h-full flex flex-row p-1 items-center gap-1 text-zinc-950 px-3"
                id="controller-dock"
            >
                <button
                    onClick={() => (playerStates.paused ? Play() : Pause())}
                >
                    {playerStates.paused ? <PlayIcon /> : <PauseIcon />}
                </button>

                <p className="text-sm max-sm:text-xs">1:10:15/1:10:15</p>
                <Range
                    className="w-full h-full"
                    progressPercent={progress}
                    onChange={handleProgressChange}
                />
                <button>
                    <FullscreenIcon className="h-full" />
                </button>
            </div>
        </div>
    );
};
export default BottomDock;
