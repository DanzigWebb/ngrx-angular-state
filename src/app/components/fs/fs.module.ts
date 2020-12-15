import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileItemComponent } from './file-item/file-item.component';
import { FileWrapperComponent } from './file-wrapper/file-wrapper.component';


@NgModule({
  declarations: [
    FileItemComponent,
    FileWrapperComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class FsModule { }
