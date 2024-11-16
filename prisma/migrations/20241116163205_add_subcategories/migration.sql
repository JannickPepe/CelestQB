/*
  Warnings:

  - You are about to drop the column `subcategory_id` on the `ChatHistory` table. All the data in the column will be lost.
  - You are about to drop the `Subcategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChatHistory" DROP CONSTRAINT "ChatHistory_subcategory_id_fkey";

-- DropForeignKey
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_topic_id_fkey";

-- AlterTable
ALTER TABLE "ChatHistory" DROP COLUMN "subcategory_id";

-- DropTable
DROP TABLE "Subcategory";
