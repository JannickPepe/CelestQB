import axios from 'axios';
import { NextResponse } from 'next/server';

const API_KEY = process.env.YOUTUBE_API_KEY; // Store your API key in environment variables

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const channelId = searchParams.get('channelId');

    if (!channelId) {
        return NextResponse.json({ error: 'channelId is required' }, { status: 400 });
    }

    try {
        // Make request to the YouTube Data API
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
            params: {
                part: 'snippet,statistics', // Include channel snippet and statistics
                id: channelId,              // The channelId we need stats for
                key: API_KEY                // Your API key
            }
        });

        if (data.items && data.items.length > 0) {
            const channelData = data.items[0]; // Grab the first (and only) item from the response
            
            const result = {
                title: channelData.snippet.title,
                creationDate: channelData.snippet.publishedAt, // Channel creation date
                location: channelData.snippet.country || 'Unknown', // Channel location
                subscribers: channelData.statistics.subscriberCount,
                totalVideos: channelData.statistics.videoCount,
                totalViews: channelData.statistics.viewCount,
            };

            return NextResponse.json(result); // Return the formatted channel data
        } else {
            return NextResponse.json({ error: 'Channel not found' }, { status: 404 });
        }
        
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch channel stats', details: error}, { status: 500 });
    }
}