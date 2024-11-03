import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTips() {
    const tips = await prisma.tip.findMany({
        orderBy: {
        date: 'desc',
        },
    });
    return tips;
}