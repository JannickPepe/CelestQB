-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TopicGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TopicGenres_AB_unique" ON "_TopicGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_TopicGenres_B_index" ON "_TopicGenres"("B");

-- AddForeignKey
ALTER TABLE "_TopicGenres" ADD CONSTRAINT "_TopicGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TopicGenres" ADD CONSTRAINT "_TopicGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
