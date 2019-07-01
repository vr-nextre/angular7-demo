import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [AlertComponent],
  exports: [
    AlertComponent
  ],
  imports: [
    CommonModule // fornisce le direttive di base del framework (senza il bootstrap) ai moduli dichiarati in declarations
  ]
})
export class SharedModule { }
