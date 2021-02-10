import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from './../cart.actions';
import * as fromCart from './../cart.selectors';
import {CartItems} from './../cart';
import { createAction, props } from '@ngrx/store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cartitems : CartItems[] = [];
  totalbill :number;
  constructor(private store : Store,private router: Router) { }

  adduser(): void {
    const user: CartItems = {"name" : "sword" , "price" : 99 ,"image":"http://34.66.243.232:3000/images/product.png","quantity" : 1};
    
    this.store.dispatch(new CartActions.AddCartItem({"user1":user}));
  }

  inc(user:CartItems):void{
    this.store.dispatch(new CartActions.INCCartItem({"user1":user}));
   }
   
   dec(user:CartItems):void{
    this.store.dispatch(new CartActions.DECCartItem({"user1":user}));
   }

   removeitem(name:string):void{
    const user: string =  name ;
    this.store.dispatch(new CartActions.RemoveCartItem(user));
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
 
  redirection(){
    console.log("jjj");
    this.router.navigateByUrl('/placeorderpage');
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
