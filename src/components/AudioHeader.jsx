"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const AudioHeader = () => {

    // State for toggling audio and visual indicator
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);

    // Refs for audio and navigation container
    const audioElementRef = useRef(null);

    // Toggle audio and visual indicator
    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    // Manage audio playback
    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

    return (
        <div>
            <button
                onClick={toggleAudioIndicator}
                className="flex items-center space-x-0.5"
            >
                <audio
                    ref={audioElementRef}
                    className="hidden"
                    src="/audio/darth-vader-breathing-26674.mp3"
                    loop
                />
                {[1, 2, 3, 4].map((bar) => (
                    <div
                        key={bar}
                        className={clsx("indicator-line", {
                            active: isIndicatorActive,
                        })}
                        style={{
                            animationDelay: `${bar * 0.1}s`,
                        }}
                    />
                ))}
            </button>
        </div>
    )
}

export default AudioHeader
