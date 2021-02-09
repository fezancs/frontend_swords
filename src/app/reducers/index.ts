import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCart from '../cart.reducer';
import * as fromWishlist from '../wishlist.reducer';


export interface State {

  [fromCart.cartFeatureKey]: fromCart.State;
  [fromWishlist.wishlistFeatureKey]: fromWishlist.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromCart.cartFeatureKey]: fromCart.reducer,
  [fromWishlist.wishlistFeatureKey]: fromWishlist.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
