import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const topicId = searchParams.get("topicId");

    if (!topicId) {
        return NextResponse.json({ error: "Topic ID is required" }, { status: 400 });
    }

    const genres = await prisma.genre.findMany({
        where: { topics: { some: { id: parseInt(topicId) } } },
    });

    return NextResponse.json(genres);
}