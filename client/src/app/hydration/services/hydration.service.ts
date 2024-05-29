import { Injectable, OnInit, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HydrationService implements OnInit{
 ngOnInit(): void {
 }
 dailyGoalSig = signal<number>(-1);
 dailyGoalIsSetSig = signal<boolean>(false);
 waterAmountsSig = signal<number[]>([])

 toogleDailyGoalIsSet():void{
  this.dailyGoalIsSetSig.set(!this.dailyGoalIsSetSig());
 }

 addDrankWater(amount:number):void{
  this.waterAmountsSig.set([...this.waterAmountsSig(),amount])
 }

 undoDrankWater():void{
  this.waterAmountsSig.set([...this.waterAmountsSig().slice(0,-1)])
 }

 getLastAmountAdded():number{
  return this.waterAmountsSig()[this.waterAmountsSig().length-1];
 }

}
