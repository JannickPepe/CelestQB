import axios from 'axios';

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';


export const fetchChannelStats = async (channelId: string) => {
    const apiKey = process.env.YOUTUBE_API_KEY;

    const response = await axios.get(`${YOUTUBE_API_BASE}/channels`, {
        params: {
            part: 'statistics,snippet',
            id: channelId,
            key: apiKey,
        },
    });

    return response.data;
};

export const fetchVideos = async (channelId: string, maxResults: number = 10) => {
    const apiKey = process.env.YOUTUBE_API_KEY;

    const response = await axios.get(`${YOUTUBE_API_BASE}/search`, {
        params: {
            part: 'snippet',
            channelId,
            maxResults,
            key: apiKey,
        },
    });

    return response.data;
};

export const fetchVideoStats = async (videoId: string) => {
    const apiKey = process.env.YOUTUBE_API_KEY;
    
    const response = await axios.get(`${YOUTUBE_API_BASE}/videos`, {
        params: {
            part: 'statistics',
            id: videoId,
            key: apiKey,
        },
    });

    return response.data;
};
