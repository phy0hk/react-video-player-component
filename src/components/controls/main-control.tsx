import usePlayer from "../../hooks/usePlayer";
import type { ControlsProps, ControlsTypes } from "../../types";
import FloatingControl from "./floating/controls";

const Controls = ({ type }: ControlsProps) => {
    const { VideoRef } = usePlayer();
    return (
        <div
            className="absolute inset-0 w-full h-full"
            onClick={() => {
                VideoRef.current?.focus();
                console.log(document.activeElement);
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
