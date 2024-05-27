import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { muscleGroups } from '../../../data/exercises';
import { Exercise } from '../../models/exercise.interface';
import { ExercisesService } from '../../services/exercises.service';
import { ExerciseCardComponent } from '../exercise-card/exercise-card.component';

@Component({
  selector: 'app-fitness',
  standalone: true,
  imports: [CommonModule, ExerciseCardComponent],
  templateUrl: './fitness.component.html',
  styleUrl: './fitness.component.scss'
})
export class FitnessComponent {

  exercisesService = inject(ExercisesService)

  muscleGroupsEntries: { id: number; name: string }[] = muscleGroups;
  selectedMuscle: { id: number; name: string } = { id: 0, name: '' };
  exercisesByMuscleGroup: Exercise[] = []

  setSelectedGroup(entry: { id: number, name: string }): void {
    this.selectedMuscle = entry;
    this.exercisesService.setGroupMuscle(entry.id)
    this.exercisesByMuscleGroup = this.exercisesService.selectedGroupSig();
  }
}