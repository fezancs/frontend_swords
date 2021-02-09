import { Action } from '@ngrx/store';
import { WishlistItems } from './wishlist';

export enum WishlistActionTypes {
  LoadWishlists = '[Wishlist] Load Wishlists',
  AddWishlistItem = '[Wishlist] Add Item',
  RemoveWishlistItem = '[Wishlist] Remove Item',
  INCWishlistItem =  '[Wishlist] INC Wishlist Item',
  DECWishlistItem =  '[Wishlist] DEC Wishlist Item'
}

export class LoadWishlists implements Action {
  readonly type = WishlistActionTypes.LoadWishlists;
}

export class AddWishlistItem implements Action {
  readonly type = WishlistActionTypes.AddWishlistItem;
  constructor(public payload: { user1: WishlistItems }) { }
}

export class RemoveWishlistItem implements Action {
  readonly type = WishlistActionTypes.RemoveWishlistItem;
  constructor(public payload: string  ) {}
 }
 
 export class INCWishlistItem implements Action {
  readonly type = WishlistActionTypes.INCWishlistItem;
  constructor(public payload: { user1: WishlistItems }) { }
}
export class DECWishlistItem implements Action {
  readonly type =WishlistActionTypes.DECWishlistItem;
  constructor(public payload: { user1: WishlistItems }) { }
}



export type WishlistActions = LoadWishlists | AddWishlistItem | RemoveWishlistItem | INCWishlistItem | DECWishlistItem;

