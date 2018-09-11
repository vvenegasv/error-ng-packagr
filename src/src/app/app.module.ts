import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiStepModule } from './modules/multi-step/multi-step.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultiStepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
