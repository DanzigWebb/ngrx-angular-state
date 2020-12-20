import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsFilterPipe } from './fs-filter.pipe';



@NgModule({
  declarations: [
    FsFilterPipe
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    FsFilterPipe
  ]
})
export class FsFilterModule { }
