import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from "./login/login-page/login-page.component";
import { RegistrationFormComponent } from './createUser/registration-form/registration-form.component';
import { RouterModule, Routes } from '@angular/router';
import { EditUserDetailComponent } from './createUser/editUser/edit-user-detail/edit-user-detail.component';

const routes: Routes  =[
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'edit', component: EditUserDetailComponent },
  { path: '',  redirectTo: '/login', pathMatch: 'full' },
  { path: '**',  redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationFormComponent,
    EditUserDetailComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
