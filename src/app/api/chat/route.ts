import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { topicId, question } = await req.json();

        const topic = await prisma.topic.findUnique({
            where: { id: topicId },
        });

        if (!topic) {
            return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
        }

        const topicName = topic.name.toLowerCase().replace(/\s+/g, '');
        const sanitizedQuestion = question.toLowerCase().trim().replace(/[^\w\s]/g, '');

        // Lazy load responses
        const { responses } = await import('@/lib/chatResponses');

        const response =
            responses[topicName]?.[sanitizedQuestion] ||
            "I'm not sure about that. Could you ask something else?";

        const chatHistory = await prisma.chatHistory.create({
            data: {
                topicId: topicId,
                question,
                response,
            },
        });

        return NextResponse.json(
            { response, chatHistory },
            {
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                },
            }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error processing chat' }, { status: 500 });
    }
}
