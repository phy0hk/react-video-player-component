import { useEffect, useState, type RefObject } from "react";
import type { Timestamp } from "../types";

const useProgressTracker = (VideoRef: HTMLVideoElement | undefined) => {
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const [TimeString, setTimeString] = useState<{
        currentTime: Timestamp;
        duration: Timestamp;
    }>({
        currentTime: {
            hour: 0,
            mins: 0,
            secs: 0,
        },
        duration: {
            hour: 0,
            mins: 0,
            secs: 0,
        },
    });
    // useEffect(() => {
    //     console.log(TimeString);
    // }, [TimeString]);
    const GenerateTimestamp = (miliseconds: number): Timestamp => {
        const hour = Math.floor(miliseconds / 3600);
        const mins = Math.floor((miliseconds % 3600) / 60);
        const secs = Math.floor(miliseconds % 60);
        return {
            hour,
            mins,
            secs,
        };
    };
    const handleProgressChange = (val: number) => {
        setProgress(val);
    };
    const handleTimeUpdate = () => {
        if (!VideoRef) return;
        setCurrentTime(VideoRef.currentTime);
        const timestampData = GenerateTimestamp(VideoRef.currentTime);
        setTimeString((prev) => ({ ...prev, currentTime: timestampData }));
    };
    useEffect(() => {
        const updateDuration = (val: number) => {
            setDuration(val);
            const timestampData = GenerateTimestamp(val);
            setTimeString((prev) => ({ ...prev, duration: timestampData }));
        };
        // if (!VideoRef.current) return;

        if (!VideoRef) return;
        updateDuration(VideoRef.duration);
        VideoRef.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            VideoRef.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, [VideoRef]);

    useEffect(() => {
        const updateProgress = (val: number) => {
            setProgress(val);
        };
        const cal = (currentTime / duration) * 100;
        updateProgress(cal);
    }, [currentTime, duration]);

    return { progress, handleProgressChange, duration, currentTime };
};
export default useProgressTracker;
