import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistpageRoutingModule } from './wishlistpage-routing.module';
import { WishlistpageComponent } from './wishlistpage.component';
import { SharedModule } from '../shared/shared.module';
import { WishlistAccordianComponent } from './wishlist-accordian/wishlist-accordian.component';
import { WishlistItemsComponent } from './wishlist-items/wishlist-items.component';


@NgModule({
  declarations: [WishlistpageComponent, WishlistAccordianComponent, WishlistItemsComponent],
  imports: [
    CommonModule,
    WishlistpageRoutingModule,
    SharedModule
  ]
})
export class WishlistpageModule { }
