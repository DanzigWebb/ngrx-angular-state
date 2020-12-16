import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFileResponseData } from '@app/core/models/fs.interface';
import { AppConfig } from '@app/core/config/app-config';
import { Store } from '@ngrx/store';
import { retrievedFilesList } from '@app/state/fs/fs.actions';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FsService {

  constructor(
    private config: AppConfig,
    private http: HttpClient,
    private store: Store
  ) {
  }

  public getDirByPath(path: string): Observable<IFileResponseData> {
    const apiUrl = `${this.config.host}files`;
    return this.http.post<IFileResponseData>(apiUrl, {path}).pipe(
      tap(data => this.store.dispatch(retrievedFilesList({data})))
    )
  }

  public getHomeDir(): Observable<IFileResponseData> {
    return this.getDirByPath(this.config.homePath)
  }
}
