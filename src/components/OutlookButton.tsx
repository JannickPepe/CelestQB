"use client"

import React from 'react';

const EmailButton: React.FC = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:celest@hotmail.com';
    };

    return (
        <button
            onClick={handleEmailClick}
            className="px-4 py-2 text-xl font-bold text-white rounded focus:outline-none mt-6 hover:scale-110 transition-transform"
        >
            Contact via <span className='text-purple-600 font-black'>Outlook</span>
            <hr></hr>
        </button>
    );
};

export default EmailButton;
