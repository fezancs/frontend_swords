import { Action } from '@ngrx/store';
import {CartItems} from './cart';
export enum CartActionTypes {
  LoadCarts = '[Cart] Load Carts',
  AddCartItem = '[Cart] Add Item',
  RemoveCartItem = '[User] Remove Customer',
  INCCartItem =  '[User] INC Cart Item',
  DECCartItem =  '[User] DEC Cart Item'
}

export class LoadCarts implements Action {
  readonly type = CartActionTypes.LoadCarts;
}

export class AddCartItem implements Action {
  readonly type = CartActionTypes.AddCartItem;
  constructor(public payload: { user1: CartItems }) { }
}

export class RemoveCartItem implements Action {
  readonly type = CartActionTypes.RemoveCartItem;
  constructor(public payload: string  ) {}
 }
 
 export class INCCartItem implements Action {
  readonly type = CartActionTypes.INCCartItem;
  constructor(public payload: { user1: CartItems }) { }
}
export class DECCartItem implements Action {
  readonly type = CartActionTypes.DECCartItem;
  constructor(public payload: { user1: CartItems }) { }
}
export type CartActions = LoadCarts | AddCartItem | RemoveCartItem | INCCartItem | DECCartItem;
