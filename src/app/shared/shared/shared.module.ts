import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],

  exports: [
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
