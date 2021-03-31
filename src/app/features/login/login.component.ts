import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username?: any;
  password?: any;
  invalid = this.authenticationService.validStatus;
  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }



}
