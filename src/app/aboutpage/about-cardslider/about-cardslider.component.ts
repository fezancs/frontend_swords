import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-about-cardslider',
  templateUrl: './about-cardslider.component.html',
  styleUrls: ['./about-cardslider.component.css']
})
export class AboutCardsliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
