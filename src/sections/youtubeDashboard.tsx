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
                <div>
                    <p>Title: {channelData.snippet.title}</p>
                    <p>Video Count: {channelData.statistics.videoCount}</p>
                    <p>Subscriber Count: {channelData.statistics.subscriberCount}</p>
                </div>
            ) : (
                <p>Loading channel data...</p>
            )}
        </div>
    );
};

export default ChannelStats;
