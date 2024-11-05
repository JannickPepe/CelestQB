import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    await prisma.tip.createMany({
        data: [
            {
                title: "Tip 1",
                text: "This is the first tip.",
                date: new Date(),
                image: "https://example.com/image1.jpg",
            },
            {
                title: "Tip 2",
                text: "This is the second tip.",
                date: new Date(),
                image: "https://example.com/image2.jpg",
            },
            {
                title: "Tip 3",
                text: "This is the third tip.",
                date: new Date(),
                image: "https://example.com/image2.jpg",
            },
        ],
    });

    await prisma.guide.createMany({
        data: [
            {
                title: "Guide 1",
                text: "This is the first guide.",
                date: new Date(),
                image: "https://example.com/image1.jpg",
            },
            {
                title: "Guide 2",
                text: "This is the second guide.",
                date: new Date(),
                image: "https://example.com/image2.jpg",
            },
            {
                title: "Guide 3",
                text: "This is the third guide.",
                date: new Date(),
                image: "https://example.com/image2.jpg",
            },
        ],
    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })