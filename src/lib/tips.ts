import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTips(page: number = 1, pageSize: number = 2) {
    const tips = await prisma.tip.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: {
            date: 'desc',
        },
    });

    const totalTips = await prisma.tip.count();
    const totalPages = Math.ceil(totalTips / pageSize);

    return { tips, totalPages };
}