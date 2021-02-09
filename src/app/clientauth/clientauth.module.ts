import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientauthRoutingModule } from './clientauth-routing.module';
import { ClientauthComponent } from './clientauth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ClientauthComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    ClientauthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ClientauthModule { }
