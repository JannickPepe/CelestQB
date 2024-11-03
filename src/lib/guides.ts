import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getGuides() {
    const guides = await prisma.guide.findMany({
        orderBy: {
        date: 'desc',
        },
    });
    return guides;
}