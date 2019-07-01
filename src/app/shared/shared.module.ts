import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { AnimatedButtonComponent } from './components/animated-button.component';
import { AnimatedTextComponent } from './components/animated-text.component';

@NgModule({
  declarations: [AlertComponent, AnimatedButtonComponent, AnimatedTextComponent],
  exports: [
    AlertComponent,
    AnimatedButtonComponent,
    AnimatedTextComponent
  ],
  imports: [
    CommonModule // fornisce le direttive di base del framework (senza il bootstrap) ai moduli dichiarati in declarations
  ]
})
export class SharedModule { }
