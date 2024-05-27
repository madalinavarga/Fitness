import { Injectable, OnInit, Signal, computed, signal } from '@angular/core';
import { allExercises as mockData } from '../../data/exercises';
import { Exercise, ExerciceDictionary } from '../models/exercise.interface';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  allExercisesSig = signal<ExerciceDictionary>({
    0: [
      {
        id: -1,
        imgSrc: '',
        title: ''
      },
    ]
  })
  selectedGroupSig = signal<Exercise[]>([])
  dailyWorkoutSig = signal<Exercise[]>([]);


  constructor() {
    this.allExercisesSig.set(mockData);
  }

  setGroupMuscle(groupId: number): void {
    this.selectedGroupSig.set(this.allExercisesSig()[groupId]);
  }

  addExerciseToDailyWorkout(newExercise: Exercise): void {
    const exists = this.dailyWorkoutSig().some(exercise => exercise.id === newExercise.id && exercise.title === newExercise.title);

    if (!exists) {
      this.dailyWorkoutSig.set([...this.dailyWorkoutSig(), newExercise]);
    }
  }
}
