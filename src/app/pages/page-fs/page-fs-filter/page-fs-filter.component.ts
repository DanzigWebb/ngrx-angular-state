import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectFilterStr } from '@app/state/fs/fs.selectors';
import { FormControl } from '@angular/forms';
import { FsService } from '@app/pages/page-fs/fs.service';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector:    'fs-filter',
  templateUrl: './page-fs-filter.component.html',
  styleUrls:   ['./page-fs-filter.component.scss']
})
export class PageFsFilterComponent implements OnInit, OnDestroy {

  public filter$ = this.store.pipe(select(selectFilterStr));
  public searchFieldCtrl = new FormControl();

  private readonly sub: Subscription;

  constructor(
    private fsService: FsService,
    private store: Store
  ) {
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    this.updateFilterStr();
    this.checkFilter();
  }

  private checkFilter() {
    const filter$ = this.filter$.subscribe(value => {
      if (value !== this.searchFieldCtrl.value) {
        this.searchFieldCtrl.setValue(value);
      }
    });
    this.sub.add(filter$);
  }

  private updateFilterStr() {
    const control$ = this.searchFieldCtrl.valueChanges.pipe(
      map(str => typeof str === 'string' ? str.trim() : ''),
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe(value => this.fsService.updateFilterStr(value));

    this.sub.add(control$);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
