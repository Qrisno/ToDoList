import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LogGuardService implements CanActivate{
  constructor(private authenticationService: AuthenticationService){

  }
  canActivate(): boolean {
    return !!this.authenticationService.getUserId();
  }
}
