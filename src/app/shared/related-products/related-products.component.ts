import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import {CartItems} from '../../cart';
import { environment } from '../../../environments/environment';
import { RelatesProductsService } from '../services/relates-products.service';
import { RelatesProducts} from '../models/relates-products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent implements OnInit {

  env=environment;
  rows: RelatesProducts[] = [];

  constructor(private store : Store, 
    private relatedproductsService: RelatesProductsService,
    private router: Router) { }

  adduser(name :string , price : number,image :string): void {
    const user: CartItems = {"name" : name , "price" : price ,"image":image,"quantity" : 1};
    
    this.store.dispatch(new CartActions.AddCartItem({"user1":user}));
  }


  showquickview() : void{  
    if($(".search-content").css("display")=="none")
    {
      $(".search-content").css("display", "block");
    }
  }
  closeSearch():void{
    $(".search-content").css("display", "none");
  }

nav(r :string){
  console.log(r);
 // this.router.navigateByUrl('/productdetailspage/'+r);
}
  ngOnInit(): void {
  
    console.log(this.env.related_sku);
    this.getrelatedProducts();
    
  }

  getrelatedProducts() {
    this.relatedproductsService.getrelatedproducts(this.env.related_sku).subscribe(
      result => {
        this.rows = result.data;
        console.log(this.rows);
      }
    )
  }
  
  hotsalesdata=[
    {
     swordname : "TOP SWORD",
     swordprice : 90.00,
    },
    {
     swordname : "HARRY POTOR",
     swordprice : 80.00,
    },
    {
     swordname : "TOP OF THE LIST",
     swordprice : 70.00,
    },
    {
     swordname : "TOP SWORD",
     swordprice : 80.00,
    }
   ]

}
