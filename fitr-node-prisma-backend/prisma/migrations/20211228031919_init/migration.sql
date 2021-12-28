-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "workouts" (
    "workout_id" SERIAL NOT NULL,
    "workout_title" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("workout_id")
);

-- CreateTable
CREATE TABLE "exercises" (
    "exercise_id" SERIAL NOT NULL,
    "exercise_name" VARCHAR(255) NOT NULL,
    "category_id" INTEGER NULL,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("exercise_id")
);

-- CreateTable
CREATE TABLE "categories" (
    "category_id" INTEGER NOT NULL,
    "category_name" VARCHAR(255) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "workouts_workout_title_key" ON "workouts"("workout_title");

-- CreateIndex
CREATE UNIQUE INDEX "categories_category_id_key" ON "categories"("category_id");

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
