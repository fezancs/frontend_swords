import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppageComponent } from './shoppage.component';

const routes: Routes = [{ path: '', component: ShoppageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppageRoutingModule { }
