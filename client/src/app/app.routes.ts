import { Routes } from "@angular/router";
import { HydrationComponent } from "./hydration/hydration/hydration.component";
import { FitnessComponent } from "./fitness/components/fitness/fitness.component";
import { ExerciseCardComponent } from "./fitness/components/exercise-card/exercise-card.component";
import { DailyWorkoutComponent } from "./fitness/components/daily-workout/daily-workout.component";

export const routes: Routes = [
    { path: 'hydration', component: HydrationComponent },
    { path: 'fitness', component: FitnessComponent },
    { path: 'card', component: ExerciseCardComponent },
    { path: 'daily-workout', component: DailyWorkoutComponent }

];
