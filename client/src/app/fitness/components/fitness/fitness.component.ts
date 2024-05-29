import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { muscleGroups } from '../../../data/exercises';
import { Exercise } from '../../models/exercise.interface';
import { ExercisesService } from '../../services/exercises.service';
import { ExerciseCardComponent } from '../exercise-card/exercise-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-fitness',
  standalone: true,
  imports: [CommonModule, ExerciseCardComponent, MatButtonModule,MatIconModule],
  templateUrl: './fitness.component.html',
  styleUrl: './fitness.component.scss'
})
export class FitnessComponent implements OnInit{
  exercisesService = inject(ExercisesService)

  muscleGroupsEntries: { id: number; name: string }[] = muscleGroups;
  selectedMuscle: { id: number; name: string } = { id: 0, name: '' };
  exercisesByMuscleGroup: Exercise[] = []

  ngOnInit(): void {
    this.setSelectedGroup(muscleGroups[0]);
  }

  setSelectedGroup(entry: { id: number, name: string }): void {
    this.selectedMuscle = entry;
    this.exercisesService.setGroupMuscle(entry.id)
    this.exercisesByMuscleGroup = this.exercisesService.selectedGroupSig();
  }

  addAllExercisesToDailyWorkout():void{
    this.exercisesService.selectedGroupSig().forEach((e)=>{
      this.exercisesService.addExerciseToDailyWorkout(e);
    })
  }
}
