// app/api/chat/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Define the structure for the responses
type TopicResponses = {
    [key: string]: {
      [key: string]: string; // Each topic can have multiple questions and responses
    };
};

// Define your responses using the type
const responses: TopicResponses = {
    eldenring: {
        "how to beat boss": "To defeat the boss, learn its attack patterns and wait for the right moment to strike.",
        "best weapons": "The Moonlight Greatsword is a top-tier choice for many builds.",
        "how to parry": "yooo",
    },
    wukong: {
        "how to beat erlang": "If you want to beat Erlang, you need to git gud!",
        "How to beat Erlang": "If you want to beat Erlang, you need to git gud!",
        "best strategy": "Utilize your mobility and play defensively to outmaneuver your opponents.",
    },
    starwars: {
        "who is the chosen one": "Anakin Skywalker is believed to be the chosen one destined to bring balance to the Force.",
        "best lightsaber": "The best lightsaber is subjective, but many favor the green blade for its balance.",
    },
    // Add more topics and their respective responses as needed
};
    
export async function POST(req: Request) {
    try {
        const { topicId, question } = await req.json();
    
        const topic = await prisma.topic.findUnique({
            where: { id: topicId },
        });
        if (!topic) {
            return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
        }
        // Normalize topic name for matching
    const topicName = topic.name.toLowerCase().replace(/\s+/g, '');
    const sanitizedQuestion = question.toLowerCase().trim().replace(/[^\w\s]/g, '');

    const response = responses[topicName]?.[sanitizedQuestion] || "I'm not sure about that. Could you ask something else?";

    const chatHistory = await prisma.chatHistory.create({
      data: {
        topicId: topicId,
        question,
        response,
      },
    });

    // Set cache-control headers
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