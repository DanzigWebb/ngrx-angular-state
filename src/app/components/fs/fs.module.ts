import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileItemComponent } from './file-item/file-item.component';
import { FileWrapperComponent } from './file-wrapper/file-wrapper.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { FileIconComponent } from './file-item/file-icon/file-icon.component';


@NgModule({
  declarations: [
    FileItemComponent,
    FileWrapperComponent,
    FileIconComponent
  ],
  exports: [
    FileWrapperComponent,
    FileItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatMenuModule
  ]
})
export class FsModule { }
