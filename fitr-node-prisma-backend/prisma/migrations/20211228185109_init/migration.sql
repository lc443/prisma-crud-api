/*
  Warnings:

  - A unique constraint covering the columns `[workout_id]` on the table `workouts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "WorkoutType" AS ENUM ('None', 'Cycling', 'Dance', 'Running', 'Strength');

-- DropIndex
DROP INDEX "workouts_workout_description_key";

-- AlterTable
ALTER TABLE "workouts" ADD COLUMN     "workout_type" "WorkoutType" NOT NULL DEFAULT E'None';

-- CreateIndex
CREATE UNIQUE INDEX "workouts_workout_id_key" ON "workouts"("workout_id");
