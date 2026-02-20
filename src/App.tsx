import Player from "./player";

function App() {
  return (
    <>
      <Player
        src="https://proxy.phyoheinko.com?https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        controls
        controlType="floating"
        className="w-screen h-fit"
      />
    </>
  );
}

export default App;
