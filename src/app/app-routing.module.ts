import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent, LoginComponent,  IntroComponent } from './project';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  {
    path:'intro',
    component:IntroComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
