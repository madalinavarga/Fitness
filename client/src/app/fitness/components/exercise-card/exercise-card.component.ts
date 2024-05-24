import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Exercise } from '../../models/exercise.interface';

@Component({
  selector: 'app-exercise-card',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.scss'
})
export class ExerciseCardComponent {
  exercise = input.required<Exercise>();

  handleAddExercise() {
    console.log("Exercitiu adaugat la daily workout")
  }
}
