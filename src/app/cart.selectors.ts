import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './cart.reducer';

const getCartFeatureState = createFeatureSelector<State>('cartState');

export const getCartItems = createSelector (
   getCartFeatureState ,
   state => state.cartitems
 )

 export const getItemsCount = createSelector (
   getCartFeatureState ,
   state => state.itemscount
 )

 export const getTotalBill = createSelector (
   getCartFeatureState ,
   state => state.totalbill
 )
