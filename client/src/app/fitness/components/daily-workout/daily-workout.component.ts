import { Component, inject } from '@angular/core';
import { ExercisesService } from '../../services/exercises.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-workout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-workout.component.html',
  styleUrl: './daily-workout.component.scss'
})
export class DailyWorkoutComponent {
  exercisesService = inject(ExercisesService)
  dailyExercisesSig = this.exercisesService.dailyWorkoutSig;

}
