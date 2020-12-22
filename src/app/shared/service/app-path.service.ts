import { Injectable } from '@angular/core';
import { AppConfig } from '@app/core/config/app-config';

@Injectable({
  providedIn: 'root'
})
export class AppPathService {

  constructor(
    private config: AppConfig
  ) {
  }

  public resolve(...arg: string[]): string {
    return arg.join(this.config.SEPARATOR);
  }

  public dirName(path: string): string {
    return path
      .split(this.config.SEPARATOR)
      .slice(0, -1)
      .join(this.config.SEPARATOR);
  }
}
