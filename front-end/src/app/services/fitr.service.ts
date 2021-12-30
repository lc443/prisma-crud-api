import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Exercise } from '../models/exercises';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class FitrService {

  constructor(private http: HttpClient) { }

  //CATEGORY
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.API_URL_AND_PORT}/categories`);
  }

  getCategory(id: number): Observable<Category> {
   return this.http.get<Category>(`${environment.API_URL_AND_PORT}/categories/${id}`);
  }


//EXERCISE
  getExercises(): Observable<Exercise[]>{
    return this.http.get<Exercise[]>(`${environment.API_URL_AND_PORT}/exercises`);
  } 

  getExercise(id: number): Observable<Exercise>{
    return this.http.get<Exercise>(`$${environment.API_URL_AND_PORT}/exercises/${id}`);
  }

  updateExercise(id: number, exercise: Exercise): Observable<Exercise>{
    return this.http.put<Exercise>(`${environment.API_URL_AND_PORT}/exercises/${id}`, {exercise}
    );
  }

  createExercise(exercise: Exercise): Observable<Exercise>{
    return this.http.post<Exercise>(`${environment.API_URL_AND_PORT}/exercises`, {exercise}
    );
  }

  deleteExercise(id: number): Observable<Exercise>{
    return this.http.delete<Exercise>(`${environment.API_URL_AND_PORT}/exercises/${id}`);
  }

  //WORKOUT
  getWorkouts(): Observable<Workout[]>{
    return this.http.get<Workout[]>(`${environment.API_URL_AND_PORT}/workouts`);
  } 

  getWorkout(id: number): Observable<Workout>{
    return this.http.get<Workout>(`$${environment.API_URL_AND_PORT}/workouts/${id}`);
  }

  updateWorkout(id: number, workout: Workout): Observable<Workout>{
    return this.http.put<Workout>(`${environment.API_URL_AND_PORT}/workouts/${id}`, {workout}
    );
  }

  createWorkout(workout: Workout): Observable<Workout>{
    return this.http.post<Workout>(`${environment.API_URL_AND_PORT}/workouts`, {workout}
    );
  }

  deleteWorkout(id: number): Observable<Workout>{
    return this.http.delete<Workout>(`${environment.API_URL_AND_PORT}/workouts/${id}`);
  }

}
