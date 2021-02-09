import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientauthComponent } from './clientauth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{ path: '',
  children: [
  {
    path:'',
   component : LoginComponent
  },
  {
    path:'registration',
   component : RegistrationComponent
  },
 
]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientauthRoutingModule { }
