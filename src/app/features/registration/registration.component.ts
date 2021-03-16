import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  register:any;
  database;
  logged:boolean = false;
  constructor(private fb: FormBuilder,
     private authenticationService:AuthenticationService,
      private router: Router) {
    
  this.database = firebase.database();
   }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: new FormControl(null),
      surname: new FormControl(null),
      username: new FormControl(null),
      passGroup: new FormGroup({
        password: new FormControl(null, [
          Validators.required, 
          Validators.minLength(6),
          Validators.pattern("^[A-Za-z0-9]+$")
        ]),
      confirmPass: new FormControl(null, [
        Validators.required, 
        Validators.minLength(6),
        Validators.pattern("^[A-Za-z0-9]+$")
      ]),
      
      },
      {validators:<ValidatorFn>this.checkPass}),
      
      
    })
  }
  

  checkPass(group:FormGroup): ValidationErrors|null{
    if(group.get('password')?.value !== group.get('confirmPass')?.value){
      return {'call':true};
    }
    return null;
  }
  onSubmit(name:any,surname:any,username: any, password:any){
    if(this.registrationForm.valid){
      this.router.navigate(['dashboard']);
      this.authenticationService.loggedState = true;
      let data:any;
      this.authenticationService.getUserList().on('value', (snapshot:any) => {
        data= snapshot.val();
        console.log(data)
        
      });
      console.log(data[data.length-1])
      const userId = data?.length;
        console.log(userId)
        
      this.database.ref('usersList/' + userId).set({

        name:name,
        surname:surname,
        username: username,
        password:password.password
        
      });
      
      return
    }
    console.log(this.registrationForm)
      console.log('error')
    
  }

}
