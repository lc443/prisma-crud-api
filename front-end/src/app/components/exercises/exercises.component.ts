import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Exercise } from 'src/app/models/exercises';
import { FitrService } from 'src/app/services/fitr.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exercises: Exercise[] = []
  constructor(private fitrService: FitrService) { }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): Exercise[] {
    this.fitrService.getExercises().pipe().subscribe(
      data => this.exercises = data);
      console.log(this.exercises)
    return this.exercises;;
  }
}
