// app/api/topics/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const topics = await prisma.topic.findMany(); // Fetch all topics
        return NextResponse.json(topics); // Return topics as JSON response
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching topics' }, { status: 500 });
    }
}
