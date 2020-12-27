import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsPolarComponent } from './charts-polar.component';



@NgModule({
  declarations: [ChartsPolarComponent],
  exports: [
    ChartsPolarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChartsPolarModule { }
