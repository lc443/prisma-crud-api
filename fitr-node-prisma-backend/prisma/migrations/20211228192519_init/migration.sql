-- AlterTable
ALTER TABLE "exercises" ADD COLUMN     "workout_id" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "workouts"("workout_id") ON DELETE RESTRICT ON UPDATE CASCADE;
