import React from 'react';


const YouTubeShareButton = () => {
    const youtubeUrl = "https://youtube.com/@celestqb?si=5mJ_UekqG5IrsfBK";
    
    // Function to handle copy to clipboard
    const handleCopyLink = () => {
        navigator.clipboard.writeText(youtubeUrl)
        .then(() => {
            alert("YouTube link copied to clipboard!");
        })
        .catch((error) => {
            alert("Failed to copy link. Please try again.");
            console.error(error);
        });
    };

    return (
        <section className=''>
            {/* Copy Button */}
            <button 
                onClick={handleCopyLink} 
                className=" text-zinc-300 mt-1 text-sm font-light hover:text-purple-400 transition-colors"
            >
                Copy YouTube Link
            </button>

            {/* Social Media Share Buttons */}
            <div className="mt-3 mb-1 flex justify-start items-center gap-2 text-xs font-semibold">
                <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(youtubeUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-purple-400 py-1 text-white rounded hover:border-none transition-transform"
                >
                    Share on Twitter
                </a>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(youtubeUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-purple-400 py-1 text-white rounded hover:border-none transition-transform"
                >
                    Share on Facebook
                </a>
                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(youtubeUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-purple-400 py-1 text-white rounded hover:border-none transition-transform"
                >
                    Share on LinkedIn
                </a>
            </div>
        </section>
    );
};

export default YouTubeShareButton;
