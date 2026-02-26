import Player from "./player";

function App() {
    return (
        <>
            <Player
                // src="https://proxy.phyoheinko.com?https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                src="https://youtu.be/njX3bu-_Vw4?si=Yj3b9W9NmN__ru8i"
                // src="https://sunshinerays93.live/_v7/f7a82c1c78a97c7233a38b6f1cdd1f782bc91a316290db218d6a6fe94fcfc343c6986461d293b3ca7fa8c25d94c11af36e714aa1a778b7a686e413f7c91ece0aada498e7e097050b09e8b4515d59019636bacb7878a2594bf8bd60fe72156768040e23b4d0e36bf5af72e53398b7796a192c20e6a786e0d4b07fe289ec8d39e9/master.m3u8"
                controls
                controlType="floating"
                className="w-screen h-200 max-h-screen"
            />
        </>
    );
}

export default App;
