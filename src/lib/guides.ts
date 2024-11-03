import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getGuides(page: number = 1, pageSize: number = 2) {
    const guides = await prisma.guide.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
            date: 'desc',
        },
    });

    const totalGuides = await prisma.guide.count();
    const totalPages = Math.ceil(totalGuides / pageSize);

    return { guides, totalPages };
}