import { Component, OnInit } from '@angular/core';
import { FsService } from '@app/pages/page-fs/fs.service';
import { select, Store } from '@ngrx/store';
import { selectFiles, selectFilterStr } from '@app/state/fs/fs.selectors';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector:    'app-page-fs',
  templateUrl: './page-fs.component.html',
  styleUrls:   ['./page-fs.component.scss']
})
export class PageFsComponent implements OnInit {

  filter$ = this.store.pipe(select(selectFilterStr));
  searchFieldCtrl = new FormControl();

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
    this.updateFilterStr();
    this.filter$.subscribe(value => {
      if (value !== this.searchFieldCtrl.value) {
        this.searchFieldCtrl.setValue(value);
      }
    });
  }

  enter(fileName: string): void {
    const dirPath = this.currentPath + '/' + fileName;
    this.fsService.getDirByPath(dirPath).subscribe();
  }

  goBack(): void {
    this.fsService.back();
  }

  updateFilterStr() {
    this.searchFieldCtrl.valueChanges.pipe(
      map(str => typeof str === 'string' ? str.trim() : ''),
      debounceTime(100),
      distinctUntilChanged()
    )
      .subscribe(value => this.fsService.updateFilterStr(value));
  }
}
