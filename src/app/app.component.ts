import { Component, OnInit } from '@angular/core';
import { AppLoaderService } from '@app/shared/service/app-loader.service';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoading = false;

  constructor(
    public loader: AppLoaderService
  ) {
  }

  ngOnInit() {
    this.loader.isLoading$.pipe(
      tap(isLoad => console.log(isLoad)),
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe(state => {
      this.isLoading = state;
    });
  }

}
