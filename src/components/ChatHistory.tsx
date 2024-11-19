import { useEffect, useState } from "react";

type ChatHistory = {
    question: string;
    response: string;
    created_at: string; // Optional: include this for display
};


const ChatHistoryComponent = () => {
    const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await fetch("/api/chatHistory");
                if (!res.ok) throw new Error("Failed to fetch chat history");

                const data: ChatHistory[] = await res.json();
                setChatHistory(data);

            } catch (error) {
                console.error("Error fetching chat history:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    if (loading) return <p>Loading chat history...</p>;

    return (
        <div className="max-w-2xl mx-auto relative">
            <h2 className="text-center text-2xl mb-2 font-semibold mt-8">Recent Questions</h2>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
                {chatHistory.map((item, index) => (
                    <div key={index} className="border-2" style={{borderRadius:6}}>
                        <div className="px-4 pt-2 text-center">
                            <small className="text-xs text-zinc-400">{new Date(item.created_at).toLocaleString()}</small>
                            <p className="font-semibold text-purple-500 underline">{item.question}</p>
                        </div>

                         {/* Tooltip for Response */}
                        <div className="text-center text-sm px-2 py-2">
                            {item.response ? item.response : "No response available."}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatHistoryComponent;