import { ChangeDetectorRef, Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ExercisesService } from './fitness/services/exercises.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  exercisesService = inject(ExercisesService)
  dailyWorkoutSig = this.exercisesService.dailyWorkoutSig

  getCount(): any {
    return this.dailyWorkoutSig().length;
  }
}
