// Import Prisma Client
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchChatHistory = async () => {
    try {
        // Fetch the 10 most recent questions
        const questions = await prisma.chatHistory.findMany({
            take: 6, // Limit the results to 10
            orderBy: { created_at: "desc" }, // Sort by newest first
            select: {
                question: true, // Only fetch the `question` field
                response: true, // Include response column
                created_at : true, // Optional: include the created date for display
            },
        });
        return questions;

    } catch (error) {
        console.error("Error fetching chat history:", error);
        return [];
    }
};
