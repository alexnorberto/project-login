import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent, LoginComponent,  IntroComponent,
         RecoverpasswordComponent, RedefinepasswordComponent
} from './project';

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
  },
  {
    path:'recoverpass',
    component:RecoverpasswordComponent
  },
  {
    path:'redefinepass',
    component:RedefinepasswordComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
