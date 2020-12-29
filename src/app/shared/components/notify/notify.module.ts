import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyConfirmComponent } from './notify-confirm/notify-confirm.component';
import { SharedModule } from '@app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    NotifyConfirmComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule
  ]
})
export class NotifyModule { }
