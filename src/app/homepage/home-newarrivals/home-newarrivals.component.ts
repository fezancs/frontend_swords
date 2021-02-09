import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import * as fromCart from '../../cart.selectors';
import {CartItems} from '../../cart';
import { createAction, props } from '@ngrx/store';
import { event } from 'jquery';
import { ValueTransformer } from '@angular/compiler/src/util';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { WishlistItems } from '../../wishlist';
import * as WishlistActions  from '../../wishlist.actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-newarrivals',
  templateUrl: './home-newarrivals.component.html',
  styleUrls: ['./home-newarrivals.component.css']
})
export class HomeNewarrivalsComponent implements OnInit {

  showloadingspinner2=true;
  rows: Product[] = [];
  image1:string;
  image2:string;
  image3:string;
  image4:string;
  image5:string;
  short_description:string;
  name:string;
  price:number;
  sale_percent:string;
  sale:string;
  visibility:number;
  rating:number;


  constructor(private store : Store,private productService: ProductService,
    private router: Router,private toastr: ToastrService) { }

  
  adduser(name :string , price : number,image :string,visibility : number): void {

   console.log(price);

    console.log(visibility);
    if(visibility == 0)
    {
         alert("this product is out of stock");
    }
    else
    {
      const user: CartItems = {"name" : name , "price" : price,"image":image ,"quantity" : 1};
    
      this.store.dispatch(new CartActions.AddCartItem({"user1":user}));

      this.toastr.success('added to cart' , name);

    }
    
  }

  addwishlist(name :string , price : number,image :string): void {
    console.log(price);
    console.log(name);
    const user: WishlistItems = {"name" : name ,"image": image, "price" : price ,"quantity" : 1};
    
    this.store.dispatch(new WishlistActions.AddWishlistItem({"user1":user}));
  }

  showquickview1(quickview_sku : string) : void{  
    if($(".search-content1").css("display")=="none")
    {
      $(".search-content1").css("display", "block");
      
      this.productService.getquickview(quickview_sku).subscribe(
        result => {
          
          this.image1=result.data.image1;
          this.image2=result.data.image2;
          this.image3=result.data.image3;
          this.image4=result.data.image4;
          this.image5=result.data.image5;
          this.short_description=result.data.short_description;
          this.name=result.data.name;
          this.price=result.data.price;
          this.sale=result.data.sale;
          this.visibility=result.data.visibility;
          this.sale_percent=result.data.sale_percent;
          this.rating=result.data.rating;
          this.showloadingspinner2=false;
          console.log(this.image1);
        }
      )


    }
  }
  closeSearch():void{
    $(".search-content1").css("display", "none");
  }

  aa(){
    console.log("class add to cart");
    $(this).parent().find(".class-icon").css("visibility","visible");
  }

  ngOnInit(): void {

    this.getspecialproducts();

 /*
    $( ".class-addtocart" ).mouseover(function(e) {
      console.log("class add to cart");
      e.preventDefault;
       $(this).parent().find(".class-icon").css("visibility","visible");
    });
    $( ".class-addtocart" ).mouseout(function(e) {
      e.preventDefault;
      $(this).parent().find(".class-icon").css("visibility","hidden");
    });
    $( ".class-icon" ).mouseover(function(e) {
      e.preventDefault;
      $(this).parent().find(".class-icon").css("visibility","visible");
    });
    $( ".class-icon" ).mouseout(function(e) {
      $(this).parent().find(".class-icon").css("visibility","hidden");
    });
*/

    /* $(".sword-details").click(function(e){
      e.preventDefault();
      console.log(e.target.getElementsByTagName("span").length);   
  })

  $(".middle").click(function(e){
    e.preventDefault();
    console.log(e.target.parentElement.parentElement.parentElement);
   var n=e.target.parentElement.parentElement.parentElement;
   
   console.log( n.getElementsByTagName("p"));
   var b= (n.getElementsByTagName("p"))
})*/

  }

  getspecialproducts() {
    console.log("bestseller");
    this.productService.getspecialproducts().subscribe(
      result => {
       this.rows = result;
        console.log(this.rows);
      }
    )
  } 

}
