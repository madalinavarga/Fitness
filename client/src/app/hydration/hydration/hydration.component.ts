import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLinkActive } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../../common/edit-dialog/edit-dialog.component';


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
  waterList: number[] = [];
  dailyGoalSet: boolean = false;

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dailyGoal = new FormControl<number>(Number(localStorage.getItem('daily-goal')) ?? -1, Validators.required) as FormControl<number>;
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
      this.waterList.push(value);
    }
  }

  isDisable(value: number): boolean {
    return this.dailyGoal.value - this.currentAmount < value || !this.dailyGoalSet
  }

  setGoal() {
    localStorage.setItem('daily-goal', this.dailyGoal.value.toString());
    this.dailyGoalSet = true;
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
    if (this.waterList.length > 0) {
      let lastAdded = this.waterList.pop();
      this.currentAmount -= lastAdded || 0;
    }
  }
}
