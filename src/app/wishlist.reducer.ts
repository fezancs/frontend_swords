import { Action } from '@ngrx/store';
import { WishlistItems } from './wishlist';
import { WishlistActions , WishlistActionTypes } from './wishlist.actions';

export const wishlistFeatureKey = 'wishlist';

export interface State {
  cartitems : WishlistItems[],
  itemscount : number,  
}

export const initialState: State = {
  cartitems : [
    {"name" : "sword" ,"image":"http://localhost:3000/images/product.png" , "price" : 99 ,"quantity" : 1},
    {"name" : "Flusas Knife" ,"image":"http://localhost:3000/images/product.png", "price" : 99 ,"quantity" : 2},
    {"name" : "Number 1 SWORD","image":"http://localhost:3000/images/product.png" , "price" : 99 ,"quantity" : 1}],
   itemscount : 3,
   
};

export function reducer(state = initialState, action: WishlistActions): State {
  switch (action.type) {

    case WishlistActionTypes.LoadWishlists:
      return{
        ...state
      }
 
      case WishlistActionTypes.AddWishlistItem: return {
       ...state ,
       cartitems : [...state.cartitems, action.payload.user1],
       itemscount : state.itemscount+1
     }
  
     case WishlistActionTypes.RemoveWishlistItem: return {
       ...state,
       cartitems: [...state.cartitems.filter(item => item.name !== action.payload)],
       itemscount : state.itemscount-1
     }
 
     case WishlistActionTypes.INCWishlistItem:{
       return {
         ...state,
         cartitems: state.cartitems.map(obj =>
             obj.name === action.payload.user1.name
                 ? {...obj, quantity: action.payload.user1.quantity+1}
                 : obj
             )
     };
     }
 
     case WishlistActionTypes.DECWishlistItem:{
       return {
         ...state,
         cartitems: state.cartitems.map(obj =>
             obj.name === action.payload.user1.name
                 ? {...obj, quantity: action.payload.user1.quantity-1}
                 : obj
             )
     };
     }
 
    default:
      return state;
  }
}
