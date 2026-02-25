import { Play as PlayIcon } from "lucide-react";
import usePlayer from "../../../hooks/usePlayer";
import BottomDock from "./botton-dock";
import useAnimation from "../../../hooks/useHoverAnimation";

const FloatingControl = () => {
    const { playerStates, Play } = usePlayer();
    const { handleMouseMove, handleOnTouch } = useAnimation();
    const PlayPauseIconStyles =
        "hover:bg-zinc-500/60 active:bg-zinc-500/60 rounded-full size-14 max-md:size-10 max-sm:size-8 p-1";
    return (
        <div className="h-full w-full flex flex-col items-center text-white">
            {/* Play Button */}
            <div
                className="inset-0 items-center justify-center flex absolute"
                onMouseMove={handleMouseMove}
                onTouchStart={handleOnTouch}
            >
                {playerStates.paused && (
                    <PlayIcon className={PlayPauseIconStyles} onClick={Play} />
                )}
            </div>
            <BottomDock />
        </div>
    );
};

export default FloatingControl;
