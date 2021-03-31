import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogGuardService} from './services/loggedInGuard.service';
import {LogOutGuardService} from './services/log-out-guard.service';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', canActivate: [LogGuardService], children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      }]},
  {path: '', canActivate: [LogOutGuardService], loadChildren:
      () => import('./features/registration/registration.module').then(m => m.RegistrationModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

