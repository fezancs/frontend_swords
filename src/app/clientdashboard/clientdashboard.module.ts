import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientdashboardRoutingModule } from './clientdashboard-routing.module';
import { ClientdashboardComponent } from './clientdashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ClientdashboardComponent],
  imports: [
    CommonModule,
    ClientdashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ClientdashboardModule { }
