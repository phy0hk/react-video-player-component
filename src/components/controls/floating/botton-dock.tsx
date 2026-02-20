import usePlayer from "../../../hooks/usePlayer";

const BottomDock = () => {
  const { ControllerDockRef } = usePlayer();
  return (
    <div
      className="w-full h-20 bg-blue-600"
      ref={ControllerDockRef}
      id="controller-dock"
    >
      <div></div>
    </div>
  );
};
export default BottomDock;
