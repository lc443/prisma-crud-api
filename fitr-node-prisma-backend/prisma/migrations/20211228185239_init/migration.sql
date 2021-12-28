-- AlterTable
CREATE SEQUENCE "workouts_workout_id_seq";
ALTER TABLE "workouts" ALTER COLUMN "workout_id" SET DEFAULT nextval('workouts_workout_id_seq');
ALTER SEQUENCE "workouts_workout_id_seq" OWNED BY "workouts"."workout_id";
