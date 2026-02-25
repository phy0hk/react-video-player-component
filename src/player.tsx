import AnimationProvider from "./provider/animation-provider";
import PlayerProvider from "./provider/player-provider";
import type { VideoProps } from "./types";
import Video from "./video";

const Player = (props: VideoProps) => {
    return (
        <PlayerProvider>
            <AnimationProvider>
                <Video {...props} />
            </AnimationProvider>
        </PlayerProvider>
    );
};
export default Player;
