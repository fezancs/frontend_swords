import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailsQuickviewComponent } from './productdetails-quickview/productdetails-quickview.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HotSalesComponent } from './hot-sales/hot-sales.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { MessageComponent } from './message/message.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YoumaylikeComponent } from './youmaylike/youmaylike.component';

@NgModule({
  declarations: [ProductdetailsQuickviewComponent, SubscribeComponent, HotSalesComponent, RelatedProductsComponent, MessageComponent, HomeheaderComponent, HeaderComponent, YoumaylikeComponent],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule,
    RouterModule,
     NgbModule,
  ],
  exports:[ProductdetailsQuickviewComponent,
     SubscribeComponent,
     HotSalesComponent,
     RelatedProductsComponent,
     MessageComponent,
     HomeheaderComponent,
     HeaderComponent,
     YoumaylikeComponent]
})
export class SharedModule { }
