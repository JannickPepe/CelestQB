import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    // Extract query parameters
    const page = parseInt(searchParams.get("page") || "1", 10);
    const itemsPerPage = parseInt(searchParams.get("itemsPerPage") || "3", 10);

    if (isNaN(page) || isNaN(itemsPerPage) || page < 1 || itemsPerPage < 1) {
        return NextResponse.json(
            { message: "Invalid pagination parameters" },
            { status: 400 }
        );
    }

    const skip = (page - 1) * itemsPerPage;

    try {
        // Fetch topics with the required fields
        const topics = await prisma.topic.findMany({
            skip,
            take: itemsPerPage,
            select: {
                id: true,
                name: true, // No alias needed for the database query
                description: true,
            },
        }).then((topics) =>
            topics.map((topic) => ({
                id: topic.id,
                topicName: topic.name, // Map `name` to `topicName`
                description: topic.description,
            }))
        );
        // Count total topics for pagination
        const totalTopics = await prisma.topic.count();
    
        return NextResponse.json({
            topics,
            totalPages: Math.ceil(totalTopics / itemsPerPage),
            currentPage: page,
        });

    } catch (error) {
        console.error("Error fetching topics:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
    
}