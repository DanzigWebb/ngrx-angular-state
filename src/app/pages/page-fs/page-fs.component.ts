import { Component, OnInit } from '@angular/core';
import { FsService } from '@app/pages/page-fs/fs.service';
import { select, Store } from '@ngrx/store';
import { selectFiles, selectFilterStr } from '@app/state/fs/fs.selectors';
import { tap } from 'rxjs/operators';
import { IFileData } from '@app/core/models/fs.interface';
import { Subscription } from 'rxjs';

@Component({
  selector:    'app-page-fs',
  templateUrl: './page-fs.component.html',
  styleUrls:   ['./page-fs.component.scss']
})
export class PageFsComponent implements OnInit {

  public readonly filter$ = this.store.pipe(select(selectFilterStr));
  public currentPath: string;
  public files: IFileData[];

  private readonly sub: Subscription;

  constructor(
    private fsService: FsService,
    private store: Store
  ) {
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    this.awaitFiles();
    this.fsService.getHomeDir();
  }

  private awaitFiles(): void {
    const store$ = this.store.pipe(select(selectFiles),
      tap(({path, list}) => {
        this.currentPath = path;
        this.files = list;
      })).subscribe();
    this.sub.add(store$);
  }

  public enter(fileName: string): void {
    const dirPath = this.currentPath + '/' + fileName;
    this.fsService.getDirByPath(dirPath).subscribe();
  }

  public goBack(): void {
    this.fsService.back();
  }
}
