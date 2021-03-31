import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {fader} from '../../route-animations'
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  animations:[
    fader
  ]
})
export class AuthPageComponent implements OnInit {
  login!:boolean;

  constructor(private router: RouterOutlet){
  console.log(1)
  }
  ngOnInit(): void {
  }
  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
  switchAuthMode(){
    this.login = !this.login;
    return this.login;
  }

}
