import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectModule } from './project';
import { LoginComponent, SignupComponent, IntroComponent } from './project';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IntroComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
