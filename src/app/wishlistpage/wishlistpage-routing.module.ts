import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistpageComponent } from './wishlistpage.component';

const routes: Routes = [{ path: '', component: WishlistpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistpageRoutingModule { }
