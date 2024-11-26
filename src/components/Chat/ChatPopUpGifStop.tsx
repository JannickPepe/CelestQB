"use client";

import Image from 'next/image';
import { useState } from 'react';
import searchGif from '@/assets/chatbubble.gif';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


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
                    className="object-cover bg-white rounded-full"
                    width={28}
                    height={28}
                />
            ) : (
                <IoChatbubbleEllipsesOutline className='size-7'/>
            )}
        </div>
    );
};

export default HoverStopGif;
