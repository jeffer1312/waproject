/*
  Warnings:

  - You are about to drop the column `price` on the `plans` table. All the data in the column will be lost.
  - Added the required column `priceOneMonth` to the `plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceThreeMonths` to the `plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceTwelveMonths` to the `plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plans` DROP COLUMN `price`,
    ADD COLUMN `priceOneMonth` DOUBLE NOT NULL,
    ADD COLUMN `priceThreeMonths` DOUBLE NOT NULL,
    ADD COLUMN `priceTwelveMonths` DOUBLE NOT NULL;
