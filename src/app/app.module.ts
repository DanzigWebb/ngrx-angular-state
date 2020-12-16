import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageFsModule } from '@app/pages/page-fs/page-fs.module';
import { TemplateModule } from '@app/shared/template/template.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //  Pages
    PageFsModule,
    TemplateModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
