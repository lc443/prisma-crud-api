import { Exercise } from "./exercises";
import { User } from "./user";

export class Workout {
    workout_id!: number;
    workout_title!: string;
    workout_description!: string;
    workout_type!: string
    user!: User;
    exercises!: Exercise[]
    createdAt!: Date;
    updatedAt!: Date

}