"use client";

import { useEffect, useRef } from "react";

export const Button = (props: React.PropsWithChildren<{ onClick?: () => void }>) => {
    const audio = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize the Audio object only on the client
        if (typeof window !== "undefined") {
            audio.current = new Audio('/audio/swing.mp3');
        }
    }, []);

    const handleClick = () => {
        // Play the sound
        if (audio.current) {
            audio.current.currentTime = 0; // Reset to start
            audio.current.play();
        }

        // Trigger the passed onClick function, if any
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <button
            className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]"
            onClick={handleClick}
        >
            <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]"></div>
                <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top, black, transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,225,.7)_inset] rounded-lg"></div>
            </div>
            <span>{props.children}</span>
        </button>
    );
};
