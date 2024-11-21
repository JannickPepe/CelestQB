"use client"

import React, { ReactNode, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { HiOutlineGlobeAmericas } from "react-icons/hi2";

interface YouTubeDashboardProps {
    channelId: ReactNode;
    createdDate?: string; // Optional property
    fieldsToShow?: Array<'title' | 'createdDate' | 'location' | 'subscribers' | 'totalVideos' | 'totalViews'>; // Fields to display
    className?: string;
}

interface ChannelStats {
    title: string;
    location: string;
    subscribers: number;
    totalVideos: number;
    totalViews: number;
}

const YouTubeDashboard = ({
    channelId,
    createdDate,
    className,
    fieldsToShow = ['title', 'createdDate', 'location', 'subscribers', 'totalVideos', 'totalViews'], // Default to all fields
}: YouTubeDashboardProps) => {

    const [channelStats, setChannelStats] = useState<ChannelStats | null>(null);

    useEffect(() => {
        const fetchChannelStats = async () => {
        try {
            const response = await fetch(`/api/youtube/channelStats?channelId=${channelId}`);
            const data = await response.json();
            setChannelStats({
                title: data.title,
                location: data.location,
                subscribers: data.subscribers,
                totalVideos: data.totalVideos,
                totalViews: data.totalViews,
            });
        } catch (error) {
            console.error('Error fetching channel stats:', error);
        }
        };

        fetchChannelStats();
    }, [channelId]);

    if (!channelStats) {
        return <div>Loading...</div>;
    }

    return (
        <div className={twMerge("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-xs mt-2", className)}>
            {fieldsToShow.includes('title') && <h1 className='text-purple-500'>{channelStats.title}</h1>}
            {fieldsToShow.includes('subscribers') && <p><span className='text-purple-500'>Subs:</span> {channelStats.subscribers}</p>}
            {fieldsToShow.includes('totalVideos') && <p><span className='text-purple-500'>Videos:</span> {channelStats.totalVideos}</p>}
            {fieldsToShow.includes('totalViews') && <p><span className='text-purple-500'>Views:</span> {channelStats.totalViews}</p>}
            {fieldsToShow.includes('createdDate') && createdDate && (
                <p><span className='text-purple-500'>Created:</span> {new Date(createdDate).toLocaleDateString()}</p>
            )}
            {fieldsToShow.includes('location') && <p><span className='text-purple-500'>Location:</span> {channelStats.location}</p>}
        </div>
    );
};

export default YouTubeDashboard;
