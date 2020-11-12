import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent, IntroComponent, LoginComponent } from './components/';

@NgModule({
  declarations: [SignupComponent, IntroComponent, LoginComponent],
  //declarations: [],
  imports: [
    CommonModule,
  ]
})
export class ProjectModule { }
