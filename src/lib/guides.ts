// lib/getGuides.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getGuides(page: number = 1, pageSize: number = 2, query: string = '') {
  const guides = await prisma.guide.findMany({
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

  const totalGuides = await prisma.guide.count({
    where: {
      title: {
        contains: query,
        mode: 'insensitive',
      },
    },
  });
  const totalPages = Math.ceil(totalGuides / pageSize);

  return { guides, totalPages };
}
