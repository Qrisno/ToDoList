import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LogOutGuardService implements CanActivate{

  constructor(private authenticationService: AuthenticationService) {
  }
  canActivate(): boolean{
    console.log(!this.authenticationService.getUserId());
    return !this.authenticationService.getUserId();
  }
}
