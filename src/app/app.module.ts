import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from "./login/login-page/login-page.component";
import { RegistrationFormComponent } from './createUesr/registration-form/registration-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes  =[
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: '',  redirectTo: '/login', pathMatch: 'full' },
  { path: '**',  redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationFormComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
