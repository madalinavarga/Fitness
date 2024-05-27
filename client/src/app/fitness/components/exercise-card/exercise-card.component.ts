import { Component, Input, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Exercise } from '../../models/exercise.interface';
import {MatIconModule} from '@angular/material/icon';
import { ExercisesService } from '../../services/exercises.service';

@Component({
  selector: 'app-exercise-card',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, FormsModule, MatIconModule],
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.scss'
})
export class ExerciseCardComponent {
  exercisesService = inject(ExercisesService)
  exercise = input.required<Exercise>();

  handleAddExercise() {
    this.exercisesService.addExerciseToDailyWorkout(this.exercise());
  }
}
