import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppConfig {
  public readonly host = 'http://localhost:3001/';
  public readonly homePath = '/Users/aleksandr/Documents/projects';

  public readonly FILES_URL = this.host + 'files'
}
