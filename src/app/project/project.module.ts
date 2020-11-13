import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { SignupComponent, IntroComponent, LoginComponent } from './components/';
import { NewaccountComponent } from './components/newaccount/newaccount.component';
import { RecoverpasswordComponent } from './components/recoverpassword/recoverpassword.component';
import { RedefinepasswordComponent } from './components/redefinepassword/redefinepassword.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SignupComponent, 
    IntroComponent, 
    LoginComponent, 
    NewaccountComponent, 
    RecoverpasswordComponent, 
    RedefinepasswordComponent
  ],
  imports: [ CommonModule, RouterModule, FormsModule, HttpClientModule ],
})
export class ProjectModule { }
