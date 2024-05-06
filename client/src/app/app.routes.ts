import { Routes } from "@angular/router";
import { FitnessComponent } from "./fitness/fitness/fitness.component";
import { HydrationComponent } from "./hydration/hydration/hydration.component";

export const routes: Routes = [
    { path: 'hydration', component: HydrationComponent },
    { path: 'fitness', component: FitnessComponent }

];
