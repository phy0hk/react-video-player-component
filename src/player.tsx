import PlayerProvider from "./provider/player-provider";
import type { VideoProps } from "./types";
import Video from "./video";

const Player = (props: VideoProps) => {
    return (
        <PlayerProvider>
            <Video {...props} />
        </PlayerProvider>
    );
};
export default Player;
