export interface ControlsProps {
    type: ControlsTypes;
}
export type ControlsTypes = "default" | "floating";
export type PlayerTypes = "hls" | "dash";
export interface VideoProps extends React.AllHTMLAttributes<HTMLVideoElement> {
    src?: string;
    controls?: boolean;
    controlType?: ControlsTypes;
}
export interface PlayerStatesT {
    paused: boolean;
    isInFullscreen: boolean;
}
export interface Timestamp {
    hour: number;
    mins: number;
    secs: number;
}
