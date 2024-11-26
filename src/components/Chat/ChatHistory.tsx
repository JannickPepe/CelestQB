import { useEffect, useState } from "react";
import ChatSummary from "./ChatTotal";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

type ChatHistory = {
    question: string;
    response: string;
    created_at: string; // Optional: include this for display
};

const ChatHistoryComponent = () => {
    const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 3; // Set items per page
    const [totalCount, setTotalCount] = useState<number>(0); // To store the total count


    const fetchHistory = async (page: number) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/chatHistory?page=${page}&pageSize=${itemsPerPage}`);
            if (!res.ok) throw new Error("Failed to fetch chat history");

            const { questions, totalPages, totalCount } = await res.json();
            setChatHistory(questions);
            setTotalPages(totalPages);
            setTotalCount(totalCount); 
        } catch (error) {
            console.error("Error fetching chat history:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHistory(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    if (loading) return <p>Loading chat history...</p>;

    return (
        <div className="max-w-3xl mx-auto relative">
            <ChatSummary />

            <div className="text-center">
                <h2 className="text-center text-2xl font-semibold my-2">The <span className="text-purple-500 font-bold">{totalCount}</span> Latest Questions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 px-6 md:px-0">
                {chatHistory.map((item, index) => (
                    <div key={index} className="border-2" style={{ borderRadius: 6 }}>
                        <div className="px-4 pt-2 text-center">
                            <small className="text-xs text-zinc-400">{new Date(item.created_at).toLocaleString()}</small>
                            <p className="font-semibold text-purple-500 underline">{item.question}</p>
                        </div>

                        <div className="text-center text-sm px-2 py-2">
                            {item.response ? item.response : "No response available."}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center gap-2 mb-6 mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="disabled:opacity-50"
                >
                    <FaRegArrowAltCircleLeft className="size-5" />
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="disabled:opacity-50"
                >
                    <FaRegArrowAltCircleRight className="size-5" />
                </button>
            </div>
        </div>
    );
};

export default ChatHistoryComponent;
