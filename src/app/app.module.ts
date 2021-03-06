import { NgModule } from '@angular/core';

/** Modules */
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './@core/core.module';

/** Components */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
