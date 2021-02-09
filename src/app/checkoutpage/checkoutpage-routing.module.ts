import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutpageComponent } from './checkoutpage.component';

const routes: Routes = [{ path: '', component: CheckoutpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutpageRoutingModule { }
