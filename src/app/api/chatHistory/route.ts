import { NextResponse } from "next/server";
import { fetchChatHistory } from "@/lib/chatHistory"; // Adjust import as necessary

export async function GET() {
    try {
        const questions = await fetchChatHistory();

        // Cache the response for 5 minutes
        return NextResponse.json(questions, {
            headers: {
                "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
            },
        });

    } catch (error) {
        console.error("Error in chat history API:", error);
        return NextResponse.json(
            { error: "Failed to fetch chat history" },
            { status: 500 }
        );
    }
}
