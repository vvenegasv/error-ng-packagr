import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { MultiStepComponent } from './components/multi-step.component';

@NgModule({
  declarations: [
    MultiStepComponent
  ],
  imports: [CommonModule, BrowserModule],
  exports: [MultiStepComponent],
  providers: []
})
export class MultiStepModule { }
