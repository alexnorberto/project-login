import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SignupComponent, IntroComponent, LoginComponent } from './components/';

@NgModule({
  declarations: [SignupComponent, IntroComponent, LoginComponent],
  imports: [ CommonModule, RouterModule ],
})
export class ProjectModule { }
