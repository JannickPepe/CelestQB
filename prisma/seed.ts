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

   // Create genres
    const genreData = [
        { name: "Action" },
        { name: "RPG" },
        { name: "Adventure" },
    ];

    const genres = await Promise.all(
        genreData.map((genre) =>
            prisma.genre.upsert({
                where: { name: genre.name }, // Use `name` as unique field
                update: {}, // No updates required
                create: genre,
            })
        )
    );
    console.log("Genres seeded:", genres);

    // Create topics and link genres using their IDs
    await prisma.topic.create({
        data: {
            name: "Dragonball",
            description: "A game based on the legend of the Monkey King",
            genres: {
                connect: genres.map((genre) => ({ id: genre.id })),
            },
        },
    });
    console.log("Topics seeded with genres!");
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