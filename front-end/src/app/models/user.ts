import { Workout } from "./workout";

export class User {
    user_id!: number;
    firstName!: string;
    lastName!: string;
    email!: string
    username!: string;
    password!: string
    role!: string
    workouts!: Workout[]

}