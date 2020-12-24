import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PageFsModule } from '@app/pages/page-fs/page-fs.module';
import { TemplateModule } from '@app/shared/template/template.module';
import { AppConfig } from '@app/core/config/app-config';
import { MatIconRegistry } from '@angular/material/icon';

export function resourceProviderFactory(provider: AppConfig) {
  return () => new Promise(resolve => {
    provider.getConfig().subscribe(resolve);
  });
}

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

  providers: [
    {
      provide:    APP_INITIALIZER,
      useFactory: resourceProviderFactory,
      deps:       [AppConfig],
      multi:      true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
