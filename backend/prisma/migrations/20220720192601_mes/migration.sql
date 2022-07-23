/*
  Warnings:

  - Added the required column `months` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orders` ADD COLUMN `months` INTEGER NOT NULL;
