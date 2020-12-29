import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFsRoutingModule } from './page-fs-routing.module';
import { PageFsComponent } from './page-fs.component';
import { StoreModule } from '@ngrx/store';
import { FsModule } from '@app/components/fs/fs.module';
import { fsFilterStrReducer, fsReducer } from '@app/state/fs/fs.reducer';
import { SharedModule } from '@app/shared/shared.module';
import { FsFilterModule } from '@app/shared/pipes/fs-filter/fs-filter.module';
import { PageFsFilterComponent } from './page-fs-filter/page-fs-filter.component';
import { ChartsPolarModule } from '@app/components/charts/charts-polar/charts-polar.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NotifyModule } from '@app/shared/components/notify/notify.module';


@NgModule({
  declarations: [
    PageFsComponent,
    PageFsFilterComponent
  ],

  imports: [
    CommonModule,
    PageFsRoutingModule,
    StoreModule.forRoot({
      files: fsReducer,
      searchField: fsFilterStrReducer
    }),
    SharedModule,
    FsModule,
    FsFilterModule,
    ChartsPolarModule,
    NotifyModule
  ]
})
export class PageFsModule {
}
