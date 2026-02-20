import { createContext, createRef } from "react";

const PlayerContext = createContext({
    VideoRef: createRef<HTMLVideoElement>(),
});
export default PlayerContext;
