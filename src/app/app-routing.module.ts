import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './features/auth-page/auth-page.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import {LogGuardService} from './services/loggedInGuard.service';
import {AuthenticationService} from './services/authentication.service';


const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [LogGuardService]},
  {path: 'auth', component: AuthPageComponent, children: [
    {path: 'register', component: RegistrationComponent, data: {animation: 'isRight'}},
    {path: 'login', component: LoginComponent, data: {animation: 'isLeft'}}
  ], canActivate: [AuthenticationService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
