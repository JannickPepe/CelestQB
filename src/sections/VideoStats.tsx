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
            <h3>Video Stats</h3>
            <div>
                <strong>Title:</strong> {videoData.snippet.title}
            </div>
            <div>
                <strong>Views:</strong> {videoData.statistics.viewCount}
            </div>
            <div>
                <strong>Likes:</strong> {videoData.statistics.likeCount}
            </div>
            <div>
                <strong>Dislikes:</strong> {videoData.statistics.dislikeCount}
            </div>
        </div>
    );
};

export default VideoStats;
