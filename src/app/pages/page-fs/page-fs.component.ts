import { Component, OnInit } from '@angular/core';
import { FsService } from '@app/pages/page-fs/fs.service';
import { select, Store } from '@ngrx/store';
import { selectFiles } from '@app/state/fs/fs.selectors';
import { retrievedFilesList } from '@app/state/fs/fs.actions';

@Component({
  selector:    'app-page-fs',
  templateUrl: './page-fs.component.html',
  styleUrls:   ['./page-fs.component.scss']
})
export class PageFsComponent implements OnInit {

  files$ = this.store.pipe(select(selectFiles));

  constructor(
    private fsService: FsService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.fsService
      .getHomeDir()
      .subscribe((data) => (
        this.store.dispatch(retrievedFilesList({files: data.list}))
      ));
  }
}
