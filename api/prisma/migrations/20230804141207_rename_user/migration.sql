/*
  Warnings:

  - You are about to drop the column `userId` on the `RegistrationCodes` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customerId` to the `RegistrationCodes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `RegistrationCodes` DROP FOREIGN KEY `RegistrationCodes_userId_fkey`;

-- AlterTable
ALTER TABLE `RegistrationCodes` DROP COLUMN `userId`,
    ADD COLUMN `customerId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Customer` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Customer_id_key`(`id`),
    UNIQUE INDEX `Customer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RegistrationCodes` ADD CONSTRAINT `RegistrationCodes_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
