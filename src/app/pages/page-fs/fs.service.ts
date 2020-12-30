import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFileResponseData } from '@app/core/models/fs.interface';
import { AppConfig } from '@app/core/config/app-config';
import { Store } from '@ngrx/store';
import { resetFilterStr, retrievedFilesList, setFilterStr } from '@app/state/fs/fs.actions';
import { finalize, tap } from 'rxjs/operators';
import { AppLoaderService } from '@app/shared/service/app-loader.service';

@Injectable({
  providedIn: 'root'
})
export class FsService {

  currentData: IFileResponseData;

  constructor(
    private config: AppConfig,
    private http: HttpClient,
    private store: Store,
    private loader: AppLoaderService
  ) {
  }

  public getDirByPath(path: string): Observable<IFileResponseData> {
    this.loader.show();
    return this.http.post<IFileResponseData>(this.config.FILES_URL, {path}).pipe(
      finalize(() => this.loader.hide()),
      tap(data => {
        this.currentData = data;
        this.resetFilterStr();
        this.store.dispatch(retrievedFilesList({data}));
      })
    );
  }

  public updateCurrentDir() {
    this.getDirByPath(this.currentData.path).subscribe();
  }

  public getHomeDir(): void {
    this.getDirByPath(this.config.homePath).subscribe();
  }

  public deleteFile(fileName: string): void {
    const list = this.currentData.list.filter(file => file.name !== fileName);
    this.currentData = {...this.currentData, list};
    this.store.dispatch(retrievedFilesList({data: this.currentData}));
  }

  public updateFilterStr(searchField: string): void {
    this.store.dispatch(setFilterStr({searchField}));
  }

  public resetFilterStr(): void {
    this.store.dispatch(resetFilterStr());
  }
}
