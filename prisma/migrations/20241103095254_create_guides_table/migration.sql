-- CreateTable
CREATE TABLE "Guide" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "image" TEXT,

    CONSTRAINT "Guide_pkey" PRIMARY KEY ("id")
);
