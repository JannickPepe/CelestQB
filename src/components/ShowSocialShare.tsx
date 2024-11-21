import React, { useState } from 'react';
import YouTubeShareButton from './SocialShare'; // Make sure to import the YouTubeShareButton component

const ShowShareButton = () => {
    const [showShareButton, setShowShareButton] = useState(false);

    // Function to toggle the visibility of the YouTubeShareButton
    const toggleShareButton = () => {
        setShowShareButton(!showShareButton);
    };

    return (
        <div>
            {/* Button to toggle the visibility of YouTubeShareButton */}
            <button
                onClick={toggleShareButton}
                className=""
            >
                {showShareButton ? <div className='hover:text-purple-400 transition-colors'>Close</div> : "Share"}
            </button>

            {/* Conditionally render the YouTubeShareButton */}
            {showShareButton && <YouTubeShareButton />}
        </div>
    );
};

export default ShowShareButton;
