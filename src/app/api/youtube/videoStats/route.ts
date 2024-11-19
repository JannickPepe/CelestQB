import axios from 'axios';
import { NextResponse } from 'next/server';

const API_KEY = process.env.YOUTUBE_API_KEY; // Make sure your API key is stored in environment variables

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get('videoId');

    if (!videoId) {
        return NextResponse.json({ error: 'videoId is required' }, { status: 400 });
    }

    try {
        // Make request to the YouTube Data API to get video statistics
        const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
            params: {
                part: 'snippet,statistics', // You want both snippet and statistics of the video
                id: videoId,                // The video ID to fetch stats for
                key: API_KEY                // Your YouTube API key
            }
        });

        if (data.items && data.items.length > 0) {
            const videoData = data.items[0]; // Grab the first (and only) item from the response
            return NextResponse.json(videoData); // Return the real video data
        } else {
            return NextResponse.json({ error: 'Video not found' }, { status: 404 });
        }
        
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch video stats', details: error }, { status: 500 });
    }
}
