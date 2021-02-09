import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-shop-slider',
  templateUrl: './shop-slider.component.html',
  styleUrls: ['./shop-slider.component.css']
})
export class ShopSliderComponent implements OnInit {

   minValue: number = 10;
  maxValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    noSwitching: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  updatesearchresult(){
    console.log(this.minValue);
  }

}
