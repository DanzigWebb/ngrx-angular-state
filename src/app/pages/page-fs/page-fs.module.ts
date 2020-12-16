import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFsRoutingModule } from './page-fs-routing.module';
import { PageFsComponent } from './page-fs.component';
import { StoreModule } from '@ngrx/store';
import { FsModule } from '@app/components/fs/fs.module';
import { fsReducer } from '@app/state/fs/fs.reducer';


@NgModule({
  declarations: [
    PageFsComponent
  ],
  imports: [
    CommonModule,
    PageFsRoutingModule,
    StoreModule.forRoot({files: fsReducer}),
    FsModule
  ]
})
export class PageFsModule { }
