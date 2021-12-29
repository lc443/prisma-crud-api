import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercise } from '../models/exercises';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  exercise!: Exercise;
 
 
  constructor(private http: HttpClient) { }

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


 
}
