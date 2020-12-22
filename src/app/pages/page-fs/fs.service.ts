import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFileResponseData } from '@app/core/models/fs.interface';
import { AppConfig } from '@app/core/config/app-config';
import { Store } from '@ngrx/store';
import { resetFilterStr, retrievedFilesList, setFilterStr } from '@app/state/fs/fs.actions';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FsService {

  currentData: IFileResponseData;

  constructor(
    private config: AppConfig,
    private http: HttpClient,
    private store: Store
  ) {
  }

  public getDirByPath(path: string): Observable<IFileResponseData> {
    return this.http.post<IFileResponseData>(this.config.FILES_URL, {path}).pipe(
      tap(data => {
        this.currentData = data;
        this.resetFilterStr();
        this.store.dispatch(retrievedFilesList({data}));
      })
    );
  }

  public getHomeDir(): void {
    this.getDirByPath(this.config.homePath).subscribe();
  }

  public back(): void {
    const getDirPath = this.currentData.path
      .split(this.config.SEPARATOR)
      .slice(0, -1)
      .join(this.config.SEPARATOR);

    this.getDirByPath(getDirPath).subscribe();
  }

  public updateFilterStr(searchField: string): void {
    this.store.dispatch(setFilterStr({searchField}));
  }

  public resetFilterStr(): void {
    this.store.dispatch(resetFilterStr());
  }
}
