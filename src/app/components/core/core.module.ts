import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared/shared.module';



@NgModule({
  declarations: [HeaderComponent],
  exports:      [
    HeaderComponent
  ],
  imports:      [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
