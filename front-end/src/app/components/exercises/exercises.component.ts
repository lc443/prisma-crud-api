import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Exercise } from 'src/app/models/exercises';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exercises: Exercise[] = []
  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): Exercise[] {
    this.exerciseService.getExercises().pipe().subscribe(
      data => this.exercises = data);
      console.log(this.exercises)
    return this.exercises;;
  }
}
