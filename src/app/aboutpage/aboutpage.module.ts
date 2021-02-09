import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutpageRoutingModule } from './aboutpage-routing.module';
import { AboutpageComponent } from './aboutpage.component';
import { AboutSetraComponent } from './about-setra/about-setra.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { AboutCardsliderComponent } from './about-cardslider/about-cardslider.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutpageComponent, AboutSetraComponent, AboutInfoComponent, AboutCardsliderComponent],
  imports: [
    CommonModule,
    AboutpageRoutingModule,
    NgxUsefulSwiperModule,
    SharedModule
  ]
})
export class AboutpageModule { }
