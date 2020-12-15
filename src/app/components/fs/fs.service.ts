import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFileResponseData } from '@app/core/models/fs.interface';
import { AppConfig } from '@app/core/config/app-config';

@Injectable({
  providedIn: 'root'
})
export class FsService {

  private get host() {
    return this._config.host;
  }

  private get homePath() {
    return this._config.homePath;
  }

  constructor(
    private _config: AppConfig,
    private _http: HttpClient
  ) {
  }

  public getDirByPath(path: string): Observable<IFileResponseData> {
    const apiUrl = `${this.host}files`;
    return this._http.post<IFileResponseData>(apiUrl, path);
  }

  public getHomeDir(): Observable<IFileResponseData> {
    return this.getDirByPath(this.homePath);
  }
}
