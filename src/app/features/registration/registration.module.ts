import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {LoginComponent} from '../login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from '../auth-page/auth-page.component';
import {InputTextModule} from 'primeng/inputtext';

const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'auth'},
  {path: 'auth', component: AuthPageComponent,  children: [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'register', component: RegistrationComponent, data: {animation: 'isRight'}},
  {path: 'login', component: LoginComponent, data: {animation: 'isLeft'}}
  ]}];

@NgModule({
  declarations: [RegistrationComponent, LoginComponent, AuthPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrationModule { }
