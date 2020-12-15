import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFsRoutingModule } from './page-fs-routing.module';
import { PageFsComponent } from './page-fs.component';


@NgModule({
  declarations: [
    PageFsComponent
  ],
  imports: [
    CommonModule,
    PageFsRoutingModule
  ]
})
export class PageFsModule { }
