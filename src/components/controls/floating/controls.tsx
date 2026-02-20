import { Pause as PauseIcon, Play as PlayIcon } from "lucide-react";
import usePlayer from "../../../hooks/usePlayer";
import BottomDock from "./botton-dock";

const FloatingControl = () => {
    const { playerStates, Play, Pause } = usePlayer();
    const PlayPauseIconStyles = "hover:bg-zinc-600 rounded-full size-16 p-2";
    return (
        <div className="h-full w-full flex flex-col items-center text-white">
            {/* Play Button */}
            <div className="h-full items-center justify-center flex ">
                {playerStates.paused ? (
                    <PlayIcon className={PlayPauseIconStyles} onClick={Play} />
                ) : (
                    <PauseIcon
                        className={PlayPauseIconStyles}
                        onClick={Pause}
                    />
                )}
            </div>
            <BottomDock />
        </div>
    );
};

export default FloatingControl;
