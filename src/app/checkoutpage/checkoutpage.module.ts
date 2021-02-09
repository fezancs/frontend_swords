import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutpageRoutingModule } from './checkoutpage-routing.module';
import { CheckoutpageComponent } from './checkoutpage.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CheckoutpageComponent, BillingAddressComponent],
  imports: [
    CommonModule,
    CheckoutpageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class CheckoutpageModule { }
