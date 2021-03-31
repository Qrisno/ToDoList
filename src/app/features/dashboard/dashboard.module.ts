import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {SideBarElementComponent} from '../../components/side-bar-element/side-bar-element.component';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {HeaderComponent} from '../header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [{path: '', component: DashboardComponent}];

@NgModule({
  declarations: [DashboardComponent, SideBarElementComponent, SideBarComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
