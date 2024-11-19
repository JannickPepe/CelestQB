import { useEffect, useState } from "react";


interface ChatSummaryData {
    totalQuestions: number;
    mostResponsesTopic: {
        topicName: string;
        responseCount: number;
    };
}


const ChatSummary = () => {
    const [chatSummary, setChatSummary] = useState<ChatSummaryData | null>(null);

    useEffect(() => {
        const fetchChatSummary = async () => {
            try {
                const res = await fetch("/api/chatTotal");
                const data = await res.json();
                setChatSummary(data);

            } catch (error) {
                console.error("Failed to fetch chat summary:", error);
            }
        };

        fetchChatSummary();
    }, []);

    if (!chatSummary) return <p>Loading chat summary...</p>;

    return (
        <div className="flex justify-center gap-6 my-4">
            <p className="ring-2 ring-violet-500 px-2 py-1 rounded-full text-xs font-light">Total Questions Asked: <span className="font-bold underline">{chatSummary.totalQuestions}</span></p>
            <p className="ring-2 ring-violet-500 px-2 py-1 rounded-full text-xs font-light">
                Topic with Most Answers: {" "}
                <span className="font-bold underline">
                    {chatSummary.mostResponsesTopic.topicName} ({chatSummary.mostResponsesTopic.responseCount} answers)
                </span>
            </p>
        </div>
    );
};

export default ChatSummary;