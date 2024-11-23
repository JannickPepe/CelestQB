import { NextResponse } from "next/server";
import { fetchChatHistory, fetchChatHistoryCount } from "@/lib/chatHistory";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "3", 10);

    try {
        const { questions, totalPages } = await fetchChatHistory(page, pageSize);
        const totalCount = await fetchChatHistoryCount(); // This will return at most 9

        return NextResponse.json(
            { questions, totalPages, totalCount },
            {
                headers: {
                    "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
                },
            }
        );
    } catch (error) {
        console.error("Error in chat history API:", error);
        return NextResponse.json(
            { error: "Failed to fetch chat history" },
            { status: 500 }
        );
    }
}
