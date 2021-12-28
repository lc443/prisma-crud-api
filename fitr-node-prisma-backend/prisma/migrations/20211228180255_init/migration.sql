/*
  Warnings:

  - The primary key for the `workouts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `workout_title` on the `workouts` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - A unique constraint covering the columns `[workout_description]` on the table `workouts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `first_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workout_description` to the `workouts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "first_name" VARCHAR(50) NOT NULL,
ADD COLUMN     "last_name" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "workouts" DROP CONSTRAINT "workouts_pkey",
ADD COLUMN     "workout_description" VARCHAR(255) NOT NULL,
ALTER COLUMN "workout_id" SET DEFAULT 0,
ALTER COLUMN "workout_id" DROP DEFAULT,
ALTER COLUMN "workout_title" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "user_id" SET DEFAULT 0;
DROP SEQUENCE "workouts_workout_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "workouts_workout_description_key" ON "workouts"("workout_description");
