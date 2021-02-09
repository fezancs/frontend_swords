import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { HomeNewarrivalsComponent } from './home-newarrivals/home-newarrivals.component';
import { HomeBannersComponent } from './home-banners/home-banners.component';
import { HomeProductlistComponent } from './home-productlist/home-productlist.component';
import { HomeTestimonalComponent } from './home-testimonal/home-testimonal.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { from } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [HomepageComponent, HomeServicesComponent, HomeNewarrivalsComponent, HomeBannersComponent, HomeProductlistComponent, HomeTestimonalComponent,HomeBlogComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    NgxUsefulSwiperModule,
    SharedModule,
    NgbModule ,
  
  ]
})
export class HomepageModule { }
