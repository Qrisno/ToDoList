import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {RegistrationModule} from './features/registration/registration.module';
import {DashboardModule} from './features/dashboard/dashboard.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    DashboardModule,
    RegistrationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
