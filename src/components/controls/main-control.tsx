import usePlayer from "../../hooks/usePlayer";
import type { ControlsProps, ControlsTypes } from "../../types";
import FloatingControl from "./floating/container";

const Controls = ({ type }: ControlsProps) => {
  const { VideoRef } = usePlayer();
  return (
    <div
      className="absolute inset-0 w-full h-full outline-none"
      onClick={() => {
        VideoRef.current?.focus();
      }}
    >
      <ControlTypeSwitch type={type} />
    </div>
  );
};
export const ControlTypeSwitch = ({ type }: { type: ControlsTypes }) => {
  switch (type) {
    case "floating":
      return <FloatingControl />;
    default:
      return null;
  }
};
export default Controls;
