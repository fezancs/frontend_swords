import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './wishlist.reducer';

const getWishlistFeatureState = createFeatureSelector<State>('wishlist');

export const getCartItems = createSelector (
   getWishlistFeatureState ,
   state => state.cartitems
 )

 export const getItemsCount = createSelector (
   getWishlistFeatureState ,
   state => state.itemscount
 )


