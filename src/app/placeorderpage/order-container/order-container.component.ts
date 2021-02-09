import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import * as fromCart from '../../cart.selectors';
import {CartItems} from '../../cart';
import { createAction, props } from '@ngrx/store';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.css']
})
export class OrderContainerComponent implements OnInit {

  cartitems : CartItems[] = [];
  totalbill :number;
  constructor(private store : Store) { }

  adduser(): void {
    const user: CartItems = {"name" : "sword" , "price" : 99 ,"image":"http://localhost:3000/images/product.png","quantity" : 1};
    
    this.store.dispatch(new CartActions.AddCartItem({"user1":user}));
  }

  ngOnInit(): void {

    this.store.pipe(select(fromCart.getCartItems)).subscribe(
      cartitems => {
       this.cartitems = cartitems;
     })

     this.store.pipe(select(fromCart.getTotalBill)).subscribe(
      totalbill => {
       this.totalbill = totalbill;
     })


  }
  slideData = [
    {
      name: "Flusas Knife",
      quantity: "1",
      price :"$99.00"
    },
    {
      name: "Number 1 SWORD",
      quantity: "2",
      price :"$99.00"
    },
    {
      name: "Fighter Sword",
      quantity: "1",
      price :"$99.00"
    }      
  ]
}
