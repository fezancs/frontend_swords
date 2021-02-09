import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import * as fromCart from '../../cart.selectors';
import {CartItems} from '../../cart';
import { createAction, props } from '@ngrx/store';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  cartitems : CartItems[] = [];
  totalbill :number;

  constructor(private store : Store) {
   }
  
   removeitem(name:string):void{
    const user: string =  name ;
    this.store.dispatch(new CartActions.RemoveCartItem(user));
   }
   
   inc(user:CartItems):void{
    this.store.dispatch(new CartActions.INCCartItem({"user1":user}));
   }
   
   dec(user:CartItems):void{
    this.store.dispatch(new CartActions.DECCartItem({"user1":user}));
   }
  ngOnInit(): void {

    this.store.pipe(select(fromCart.getCartItems)).subscribe(
      cartitems => {
       this.cartitems = cartitems;
       console.log(cartitems);
     })

     this.store.pipe(select(fromCart.getTotalBill)).subscribe(
      totalbill => {
       this.totalbill = totalbill;
     })


  }

}
