"use client"

import { useState, useEffect, ReactNode } from 'react';

const ChannelStats = ({ channelId }: { channelId: ReactNode }) => {
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
                    <div className='flex justify-center gap-4 mt-2 border px-4 py-2 text-sm md:text-base' style={{borderRadius:5}}>
                        <p><span className='font-semibold text-violet-500'>Title:</span> {channelData.snippet.title}</p>
                        <span>*</span>
                        <p><span className='font-semibold text-violet-500'>Video Count:</span> {channelData.statistics.videoCount}</p>
                        <span>*</span>
                        <p><span className='font-semibold text-violet-500'>Subscriber Count:</span> {channelData.statistics.subscriberCount}</p>
                    </div>
                </div>
            ) : (
                <p>Loading channel data...</p>
            )}
        </div>
    );
};

export default ChannelStats;
