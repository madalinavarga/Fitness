import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLinkActive } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../../common/edit-dialog/edit-dialog.component';
import { HydrationService } from '../services/hydration.service';


@Component({
  selector: 'app-hydration',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, CommonModule, MatIconModule, RouterLinkActive, ReactiveFormsModule, MatTooltipModule],
  templateUrl: './hydration.component.html',
  styleUrl: './hydration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HydrationComponent implements OnInit {
  dailyGoal!: FormControl<number>;
  currentAmount: number = 0;

  hydrationService = inject(HydrationService);
  dailyGoalSet = this.hydrationService.dailyGoalIsSetSig;
  waterAmounts = this.hydrationService.waterAmountsSig;

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
    this.dailyGoal = new FormControl<number>(Number(localStorage.getItem('daily-goal')) ?? -1, Validators.required) as FormControl<number>;
    if(this.hydrationService.dailyGoalIsSetSig()){
      this.currentAmount = this.waterAmounts().reduce((acc,curr)=>{
       return  acc+curr
      })
    }
  }


  get fillHeight(): number {
    if (this.currentAmount > this.dailyGoal.value) {
      return 100;
    }

    return (this.currentAmount / this.dailyGoal.value) * 100;
  }

  addWater(value: number): void {
    if ((this.currentAmount + value) <= this.dailyGoal.value) {
      this.currentAmount += value;
      this.hydrationService.addDrankWater(value);
    }
  }

  isDisable(value: number): boolean {
    return this.dailyGoal.value - this.currentAmount < value || !this.dailyGoalSet()
  }

  setGoal() {
    localStorage.setItem('daily-goal', this.dailyGoal.value.toString());
    this.hydrationService.toogleDailyGoalIsSet();
  }

  openEditDialog(dailyGoal: number) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        dailyGoal: dailyGoal,
        title: 'Edit Your Goal'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dailyGoal.setValue(result);
        this.cdr.markForCheck();
      }
    });
  }

  undo() {
    if (this.waterAmounts().length > 0) {
      let lastAdded = this.hydrationService.getLastAmountAdded();
      this.hydrationService.undoDrankWater();
      this.currentAmount -= lastAdded || 0;
    }
  }
}
