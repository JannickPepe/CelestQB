import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // TIP CREATE
    await prisma.tip.createMany({
        data: [
            {
                title: "DB Sparkling Zero",
                text: "Beginner Tips Focus on Episode Battles: This mode is the heart of the game, allowing you to relive iconic fights and unlock characters. Completing battles will earn you Zeni, which you can use to unlock more characters and items. Use Battle Training: This mode helps you master the game's controls and moves, making it easier to tackle tougher battles. Equip Ability Items: These items provide powerful passive boosts that enhance your characters. Make sure to equip them to maximize your potential. Complete Challenges and Missions: These are great for earning Zeni early on, which is essential for unlocking characters, Ability Items, and cosmetics. Spend Your Shenron Wishes Immediately: If you obtain an extra Dragon Ball while having a full set, you risk losing it permanently. Use your wishes right away to avoid missing out.",
                date: new Date(),
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLOwp35dwJm4osDOpfFuVBi8p7NfOL-lJpQ&s",
            },
        ],
    });

    // GUIDE CREATE
    await prisma.guide.createMany({
        data: [
            {
                title: "DB Sparkling Zero",
                text: "General Advice Explore Thoroughly: The game is filled with secrets and hidden items. Take your time to explore every area. Target Challenges and Missions: These are great for farming Zeni and unlocking new content. Stay Patient: The game can be challenging, but patience and persistence will help you improve and succeed3. Engage with the Community: Join online forums and communities to share tips, strategies, and experiences with other players.",
                date: new Date(),
                image: "https://static.bandainamcoent.eu/high/dragon-ball/dragon-ball-sparking-zero/01-news/dbsz-announcement-thumbnail.jpg",
            },
        ],
    });

    /*
   // CREATE GENRES
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

    // CREATE topics and link genres using their IDs
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

    */
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