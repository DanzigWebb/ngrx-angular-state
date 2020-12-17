import { Component, OnInit } from '@angular/core';
import { FsService } from '@app/pages/page-fs/fs.service';
import { select, Store } from '@ngrx/store';
import { selectFiles } from '@app/state/fs/fs.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector:    'app-page-fs',
  templateUrl: './page-fs.component.html',
  styleUrls:   ['./page-fs.component.scss']
})
export class PageFsComponent implements OnInit {

  files$ = this.store.pipe(
    select(selectFiles),
    tap(data => this.currentPath = data.path)
  );
  currentPath: string;


  constructor(
    private fsService: FsService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.fsService.getHomeDir();
  }

  enter(fileName: string): void {
    const dirPath = this.currentPath + '/' + fileName;
    this.fsService.getDirByPath(dirPath).subscribe();
  }

  goBack(): void {
    this.fsService.back();
  }
}
