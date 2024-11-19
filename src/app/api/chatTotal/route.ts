import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        // Total number of questions
        const totalQuestions = await prisma.chatHistory.count();
    
        // Find the topic with the most responses
        const mostResponsesTopic = await prisma.chatHistory.groupBy({
            by: ["topicId"],
            _count: {
                response: true,
            },
            orderBy: {
                _count: {
                    response: "desc",
                },
            },
            take: 1, // Get only the topic with the highest count
        });
    
        if (mostResponsesTopic.length > 0) {
            const topicId = mostResponsesTopic[0]?.topicId;
    
            if (topicId) {
                // Get the topic name using the topicId_Topic_id relation
                const topic = await prisma.topic.findUnique({
                    where: {
                        id: topicId,
                    },
                    select: {
                        name: true,
                    },
                });
        
                return NextResponse.json({
                    totalQuestions,
                    mostResponsesTopic: {
                        topicName: topic?.name || "Unknown",
                        responseCount: mostResponsesTopic[0]._count.response,
                    },
                });
            }
        }
    
        // No topics found or topicId is null
        return NextResponse.json({
            totalQuestions,
            mostResponsesTopic: {
            topicName: "None",
            responseCount: 0,
            },
        });

    } catch (error) {
        console.error("Error fetching chat summary:", error);
        return NextResponse.json({ error: "Failed to fetch chat summary" }, { status: 500 });
    }
}