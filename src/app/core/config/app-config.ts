import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiConfig } from '@app/core/config/models';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppConfig {
  public readonly host = 'http://localhost:3001/';
  public readonly homePath = '/Users/aleksandr/Documents/projects';

  public readonly FILES_URL = this.host + 'files';
  public SEPARATOR;

  constructor(
    private http: HttpClient
  ) {
  }

  getConfig(): Observable<IApiConfig> {
    return this.http.get<IApiConfig>(this.host + 'getConfig')
      .pipe(tap(config => {
        this.SEPARATOR = config.separator;
      }));
  }
}
