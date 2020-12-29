import { Component, OnInit } from '@angular/core';
import { FsService } from '@app/pages/page-fs/fs.service';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectFiles, selectFilterStr } from '@app/state/fs/fs.selectors';
import { IFileData } from '@app/core/models/fs.interface';
import { AppPathService } from '@app/shared/service/app-path.service';

@Component({
  selector: 'app-page-fs',
  templateUrl: './page-fs.component.html',
  styleUrls: ['./page-fs.component.scss']
})
export class PageFsComponent implements OnInit {

  public readonly filter$ = this.store.pipe(select(selectFilterStr));
  public currentPath: string;
  public files: IFileData[];

  private readonly sub: Subscription;

  constructor(
    private fsService: FsService,
    private store: Store,
    private path: AppPathService
  ) {
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    this.awaitFilesFromStore();
    this.fsService.getHomeDir();
  }

  private awaitFilesFromStore(): void {
    const files$ = this.store.pipe(select(selectFiles),
      tap(({path, list}) => {
        this.currentPath = path;
        this.files = list;
        this.getDataForChart(list);
      })).subscribe();
    this.sub.add(files$);
  }

  public data: number[] = [];
  public labels: string[] = [];

  private getDataForChart(files: IFileData[]) {
    const data = {};
    files.forEach(file => {
      const {type} = file;
      data[type] = data[type] ? data[type] + 1 : 1;
    });

    this.labels = Object.keys(data);
    this.data = Object.keys(data).map(item => data[item]);
  }


  public enter(fileName: string): void {
    const dirPath = this.path.resolve(this.currentPath, fileName);
    this.getFiles(dirPath);
  }

  public goBack(): void {
    const path = this.path.dirName(this.currentPath);
    this.getFiles(path);
  }

  public update(): void {
    this.fsService.updateCurrentDir();
  }

  public goHome(): void {
    this.fsService.getHomeDir();
  }

  private getFiles(path: string): void {
    this.fsService
      .getDirByPath(path)
      .subscribe();
  }
}
