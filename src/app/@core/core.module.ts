import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Interceptor */
import { JwtInterceptor } from './interceptors/jwt.interceptor';


@NgModule({
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  imports: [
    // CommonModule,  // Angular declaratives are provided by the BrowserModule too
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: []
})
export class CoreModule { }
