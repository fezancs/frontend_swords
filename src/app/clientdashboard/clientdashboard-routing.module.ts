import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientauthGuard } from '../clientauth/clientauth.guard';

import { ClientdashboardComponent } from './clientdashboard.component';

const routes: Routes = [{
   path: '',
   component: ClientdashboardComponent,
  canActivate:[ClientauthGuard]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientdashboardRoutingModule { }
