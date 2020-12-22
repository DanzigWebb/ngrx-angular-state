import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '@app/shared/shared.module';


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
