import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { YoumaylikeService } from '../services/youmaylike.service';
import { Product } from '../models/product';
import { QuickviewService } from '../services/quickview.service';

@Component({
  selector: 'app-youmaylike',
  templateUrl: './youmaylike.component.html',
  styleUrls: ['./youmaylike.component.css']
})
export class YoumaylikeComponent implements OnInit {

  rows:Product[]=[];
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
  showloadingspinner1=true;
  constructor(private productService: YoumaylikeService, private quickService: QuickviewService) { }

  ngOnInit(): void {
    this.getpopular();
  }

  getpopular() {
    console.log("popular");
    this.productService.getpopular().subscribe(
      result => {
        this.rows = result;
        console.log(result);
      }
    )
  }

  showquickview(quickview_sku : string) : void{  
   
    if($(".search-content").css("display")=="none")
    {
      $(".search-content").css("display","block");
      
      this.quickService.getquickview(quickview_sku).subscribe(
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
          this.showloadingspinner1=false;
          console.log(result);
        }
      )

    }
  }
  closeSearch():void{
    $(".search-content").css("display", "none");
  }
  

  slideData = [
    {
      id: 382,
      name: "Metal bluetooth cyan",
    }, {
      id: 822,
      name: "Avon",
    }, {
      id: 159,
      name: "Infrastructures",
    }, {
      id: 424,
      name: "Users Cotton",
    }, {
      id: 572,
      name: "Haptic Oklahoma Jewelery",
    }, {
      id: 127,
      name: "Circles Integration Street",
    }, {
      id: 1009,
      name: "uniform Communications Tuna",
    }, {
      id: 619,
      name: "North Carolina",
    }, {
      id: 716,
      name: "Eyeballs Rubber",
    }, {
      id: 382,
      name: "Nevada green unleash",
    }
  ]

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoHeight: true,
    slidesPerView: 4,
    allowTouchMove: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique'
    },
    loop: true
  };


}
