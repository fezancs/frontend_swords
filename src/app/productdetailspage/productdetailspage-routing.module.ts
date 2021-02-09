import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductdetailspageComponent } from './productdetailspage.component';

const routes: Routes = [{ path: '', component: ProductdetailspageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductdetailspageRoutingModule { }
