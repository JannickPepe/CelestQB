"use client"

import { useState, useEffect, ReactNode } from 'react';

const VideoStats = ({ videoId }: { videoId: ReactNode }) => {
    const [videoData, setVideoData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideoStats = async () => {
            try {
                const response = await fetch(`/api/youtube/videoStats?videoId=${videoId}`);

                if (!response.ok) {
                    setError('Error fetching video stats');
                    return;
                }

                const data = await response.json();
                setVideoData(data);

            } catch (error) {
                setError('Error fetching video stats');
            } finally {
                setLoading(false);
            }
        };

        fetchVideoStats();
    }, [videoId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <div className='flex justify-center gap-4 mt-2 border px-4 py-2 text-sm md:text-base' style={{borderRadius:5}}>
                <p className='max-w-[240px]'><span className='font-semibold text-violet-500'>Title:</span> {videoData.snippet.title}</p>
                <span>*</span> 
                <p><span className='font-semibold text-violet-500'>Views:</span> {videoData.statistics.viewCount}</p> 
                <span>*</span>
                <p><span className='font-semibold text-violet-500'>Likes:</span> {videoData.statistics.likeCount}</p> 
            </div>
        </div>
    );
};

export default VideoStats;
