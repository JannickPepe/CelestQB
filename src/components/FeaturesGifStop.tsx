"use client";

import Image from 'next/image';
import { useState } from 'react';
import searchGif from '@/assets/searchGif.gif';
import searchImg from '@/assets/search.png';


const HoverStopGif = () => {
    // State to toggle between GIF and static image
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Use conditional rendering to switch between the GIF and static image */}
            {isHovering ? (
                <Image
                    src={searchGif} // GIF path
                    alt="Playing GIF"
                    className="object-cover"
                    width={28}
                    height={28}
                />
            ) : (
                <Image
                    src={searchImg} // Static image path
                    alt="Paused"
                    className="object-cover"
                    width={28}
                    height={28}
                />
            )}
        </div>
    );
};

export default HoverStopGif;
