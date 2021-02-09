import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceorderpageComponent } from './placeorderpage.component';

const routes: Routes = [{ path: '', component: PlaceorderpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceorderpageRoutingModule { }
