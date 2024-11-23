// Import Prisma Client
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchChatHistoryCount = async () => {
    try {
        const totalCount = await prisma.chatHistory.count();
        return Math.min(totalCount, 9); // Cap the count at 9
    } catch (error) {
        console.error("Error fetching chat history count:", error);
        return 0;
    }
};

export const fetchChatHistory = async (page: number, pageSize: number) => {
    const totalLimit = 9; // Total items capped at 9
    const skip = (page - 1) * pageSize;

    if (skip >= totalLimit) {
        return { questions: [], totalPages: Math.ceil(totalLimit / pageSize) };
    }

    try {
        const questions = await prisma.chatHistory.findMany({
            skip,
            take: Math.min(pageSize, totalLimit - skip),
            orderBy: { created_at: "desc" },
            select: {
                question: true,
                response: true,
                created_at: true,
            },
        });

        const totalPages = Math.ceil(totalLimit / pageSize);

        return { questions, totalPages };
    } catch (error) {
        console.error("Error fetching chat history:", error);
        return { questions: [], totalPages: 0 };
    }
};