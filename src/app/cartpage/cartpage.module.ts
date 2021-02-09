import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartpageRoutingModule } from './cartpage-routing.module';
import { CartpageComponent } from './cartpage.component';
import { CartAccordianComponent } from './cart-accordian/cart-accordian.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CartpageComponent, CartAccordianComponent, CartItemsComponent],
  imports: [
    CommonModule,
    CartpageRoutingModule,
    SharedModule
  ]
})
export class CartpageModule { }
