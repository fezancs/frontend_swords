import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppageRoutingModule } from './shoppage-routing.module';
import { ShoppageComponent } from './shoppage.component';
import { ShopAccordianComponent } from './shop-accordian/shop-accordian.component';
import { ShopSliderComponent } from './shop-slider/shop-slider.component';
import { Ng5SliderModule } from 'ng5-slider';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ShoppageComponent, ShopAccordianComponent, ShopSliderComponent],
  imports: [
    CommonModule,
    ShoppageRoutingModule,
    Ng5SliderModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ShoppageModule { }
