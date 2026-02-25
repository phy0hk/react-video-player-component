import Player from "./player";

function App() {
    return (
        <>
            <Player
                // src="https://proxy.phyoheinko.com?https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                src="https://youtu.be/njX2bu-_Vw4?si=Yj3b9W9NmN__ru8i"
                controls
                controlType="floating"
                className="w-screen h-200 max-h-screen"
            />
        </>
    );
}

export default App;
