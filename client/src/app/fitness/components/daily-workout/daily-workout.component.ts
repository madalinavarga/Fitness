import { Component, OnInit, inject } from '@angular/core';
import { ExercisesService } from '../../services/exercises.service';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Exercise } from '../../models/exercise.interface';


@Component({
  selector: 'app-daily-workout',
  standalone: true,
  imports: [CommonModule,MatSlideToggleModule],
  templateUrl: './daily-workout.component.html',
  styleUrl: './daily-workout.component.scss'
})
export class DailyWorkoutComponent{
  exercisesService = inject(ExercisesService)
  dailyExercisesSig = this.exercisesService.dailyWorkoutSig;

  handleToggleChange(exercise:Exercise):void{
    this.exercisesService.changeExerciseStatus(exercise);
  }
}
