import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import * as fromCart from '../../cart.selectors';
import {CartItems} from '../../cart';
import { HomesliderService } from '../services/homeslider.service';
import { Trendingnews } from '../models/homeslider';
import { createAction, props } from '@ngrx/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active:number;
  close:number=0;
  language:string="ENGLISH";
  currency:string="Dollar";
  cartitems : CartItems[] = [];
  totalbill :number;
  itemscount:number;
  trendingnews1:Trendingnews[]=[];

  constructor(private store : Store,private homesliderService: HomesliderService) { }

  

  showcart() : void{  
      if($("#mycart").css("display")=="none")
      {
        $("#mycart").css("display", "block");
      }
      else{
        $("#mycart").css("display", "none");
      }  
  }
  showinput() : void{  
    console.log("hi");
    if($(".search-content1").css("display")=="none")
    {
      $(".org-btn").css("display", "none");
      $(".search-content1").css("display", "block");
    }
    else{
      $(".search-content1").css("display", "none");
      $(".org-btn").css("display", "block");
    }
  
}
   removeitem(name:string):void{
    const user: string =  name ;
    this.store.dispatch(new CartActions.RemoveCartItem(user));
   }

  openSearch() : void{
    if($("#myOverlay").css("display")=="none")
      {
        $("#myOverlay").css("display", "block");
      }
      else{
        $("#myOverlay").css("display", "none");
      }
  }
  closecart():void{
    $(".cart").css("display", "none");
  }
  

  ngOnInit(): void {
    
    this.gettrendingnews();

    this.store.pipe(select(fromCart.getCartItems)).subscribe(
      cartitems => {
       this.cartitems = cartitems;
       console.log(cartitems);
     })

     this.store.pipe(select(fromCart.getTotalBill)).subscribe(
      totalbill => {
       this.totalbill = totalbill;
     })

     this.store.pipe(select(fromCart.getItemsCount)).subscribe(
      itemscount => {
       this.itemscount = itemscount;
       if(this.itemscount==0)
       {
         $(".cartempty").css("display", "block");
         $(".cartdiv").css("display", "none");
        }
       else
       {
        $(".cartdiv").css("display", "block");
        $(".cartempty").css("display", "none");
       }    
      })


  }

  slideData = [
    {
      name: "assets/images/placeholder.png",
    },
    {
      name: "assets/images/placeholder.png",
    },
    {
      name: "assets/images/placeholder.png",
    } 
  ]

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    slidesPerView: 1,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    
    on: { slideChange () { 
    $('header-box').show();
    console.log('slideChange') } },

    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique'
    },
    loop: true
  };

  trending = [
    {
      news :"trending news here",
    },
    {
      news :"trending news here",
    },
    {
      news :"trending news here",
    } 
  ]

  gettrendingnews() {
    this.homesliderService.gettrendingnews().subscribe(
      result => {
        this.trendingnews1 = result;
        console.log(result);
      }
    )
  }


  config1: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    slidesPerView: 1,
    allowTouchMove: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true
    },
    
    navigation: {
      nextEl: '.swiper-button-next-trending',
      prevEl: '.swiper-button-prev-trending'
    },
    loop: true
  };


}
