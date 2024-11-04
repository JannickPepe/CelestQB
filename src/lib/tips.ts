// lib/getTips.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTips(page: number = 1, pageSize: number = 2, query: string = '') {
  const tips = await prisma.tip.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    where: {
      title: {
        contains: query,
        mode: 'insensitive',
      },
    },
    orderBy: {
      date: 'desc',
    },
  });

  const totalTips = await prisma.tip.count({
    where: {
      title: {
        contains: query,
        mode: 'insensitive',
      },
    },
  });
  const totalPages = Math.ceil(totalTips / pageSize);

  return { tips, totalPages };
}
