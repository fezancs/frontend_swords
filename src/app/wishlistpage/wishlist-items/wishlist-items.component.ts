import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as WishlistActions  from '../../wishlist.actions';
import * as fromWishlist from '../../wishlist.selectors';
import { WishlistItems } from '../../wishlist';
@Component({
  selector: 'app-wishlist-items',
  templateUrl: './wishlist-items.component.html',
  styleUrls: ['./wishlist-items.component.css']
})
export class WishlistItemsComponent implements OnInit {

  wishlistitems :WishlistItems[] = [];
  totalbill :number;

  constructor(private store : Store) {
   }
  
   removeitem(name:string):void{
    const user: string =  name ;
    this.store.dispatch(new WishlistActions.RemoveWishlistItem(user));
   }
   
   inc(user:WishlistItems):void{
    this.store.dispatch(new WishlistActions.INCWishlistItem({"user1":user}));
   }
   
   dec(user:WishlistItems):void{
    this.store.dispatch(new WishlistActions.DECWishlistItem({"user1":user}));
   }
  ngOnInit(): void {

    this.store.pipe(select(fromWishlist.getCartItems)).subscribe(
      cartitems => {
       this.wishlistitems = cartitems;
       console.log(cartitems);
     })


  }

}
