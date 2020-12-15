import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageFsComponent } from './page-fs.component';

const routes: Routes = [
  {path: '', component: PageFsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFsRoutingModule { }
