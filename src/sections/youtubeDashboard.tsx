"use client"

import { useState, useEffect, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const ChannelStats = ({ channelId, className, title, video, subs }: { channelId: ReactNode; className?: string; title?: ReactNode; video?: ReactNode; subs?: ReactNode;}) => {
    const [channelData, setChannelData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchChannelData = async () => {
        try {
            const response = await fetch(`/api/youtube/channelStats?channelId=${channelId}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch channel data');
            }

            const data = await response.json();
            setChannelData(data);  // Set the real channel data
            setError(null);  // Reset any previous errors

        } catch (error: any) {
            setError(error.message);  // Handle the error and set the error message
            console.error('Error fetching channel data:', error);
        }
    };

    useEffect(() => {
        if (channelId) {
            fetchChannelData();
        }

    }, [channelId]);

    return (
        <div>
            {error && <p>Error: {error}</p>}

            {channelData ? (
                <div className=''>
                    <div className={twMerge('flex justify-center gap-4 mt-2 border px-4 py-2 -ml-3', className)} style={{borderRadius:5}}>
                        <p><span className='font-semibold text-violet-500'>{title}:</span> @{channelData.snippet.title}</p>
                        <span>*</span>
                        <p><span className='font-semibold text-violet-500'>{subs}:</span> {channelData.statistics.subscriberCount}</p>
                        <span>*</span>
                        <p><span className='font-semibold text-violet-500'>{video}:</span> {channelData.statistics.videoCount}</p>
                    </div>
                </div>
            ) : (
                <p>Loading channel data...</p>
            )}
        </div>
    );
};

export default ChannelStats;
