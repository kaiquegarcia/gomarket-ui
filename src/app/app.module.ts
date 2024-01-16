import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from 'src/services/backend.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: "BASE_URL",
      useValue: "http://localhost:8083", // TODO: make it an environment
    },
    {
      provide: BackendService,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
