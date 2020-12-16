import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { CoreModule } from '../../components/core/core.module';



@NgModule({
  declarations: [TemplateComponent],
  exports:      [
    TemplateComponent
  ],
  imports:      [
    CommonModule,
    CoreModule
  ]
})
export class TemplateModule { }
