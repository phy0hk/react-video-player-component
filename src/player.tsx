import PlayerProvider from "./provider/player-provider";
import Video from "./video";

const Player = () => {
    return (
        <PlayerProvider>
            <Video
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                controls
            />
        </PlayerProvider>
    );
};
export default Player;
