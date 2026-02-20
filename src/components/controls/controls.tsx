import type { ControlsProps } from "../../types";
import FloatingControl from "./floating/controls";

const Controls = ({ type }: ControlsProps) => {
    switch (type) {
        case "floating":
            <FloatingControl />;
    }
};
export default Controls;
