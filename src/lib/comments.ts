import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createComment({
  content,
  userName,
  guideId,
  tipId,
}: {
  content: string;
  userName: string;
  guideId?: number;
  tipId?: number;
}) {
  return await prisma.comment.create({
    data: {
      content,
      userName,
      guideId,
      tipId,
    },
  });
}

export async function fetchCommentsForGuide(guideId: number) {
  return await prisma.comment.findMany({
    where: { guideId },
    orderBy: { createdAt: "desc" },
  });
}

export async function fetchCommentsForTip(tipId: number) {
  return await prisma.comment.findMany({
    where: { tipId },
    orderBy: { createdAt: "desc" },
  });
}