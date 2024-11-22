"use client"

import { useState, useEffect, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const VideoStats = ({ videoId, className, title, likes, subs }: { videoId: ReactNode; className?: string; title?: ReactNode; likes?: ReactNode; subs?: ReactNode; }) => {
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
            <div className={twMerge('flex justify-center gap-4 mt-2 border px-4 py-2 text-xs', className)} style={{borderRadius:5}}>
                <p className=''><span className='font-semibold text-purple-400'>{title}:</span> {videoData.snippet.title}</p>
                <p><span className='font-semibold text-purple-400'>{subs}:</span> {videoData.statistics.viewCount}</p> 
                <p><span className='font-semibold text-purple-400'>{likes}:</span> {videoData.statistics.likeCount}</p> 
            </div>
        </div>
    );
};

export default VideoStats;
