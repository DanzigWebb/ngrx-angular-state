import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFileResponseData } from '@app/core/models/fs.interface';
import { AppConfig } from '@app/core/config/app-config';

@Injectable({
  providedIn: 'root'
})
export class FsService {

  constructor(
    private config: AppConfig,
    private http: HttpClient
  ) {
  }

  public getDirByPath(path: string): Observable<IFileResponseData> {
    const apiUrl = `${this.config.host}files`;
    return this.http.post<IFileResponseData>(apiUrl, {path});
  }

  public getHomeDir(): Observable<IFileResponseData> {
    return this.getDirByPath(this.config.homePath);
  }
}
