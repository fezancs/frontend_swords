import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceorderpageRoutingModule } from './placeorderpage-routing.module';
import { PlaceorderpageComponent } from './placeorderpage.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PlaceorderpageComponent, OrderContainerComponent],
  imports: [
    CommonModule,
    PlaceorderpageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PlaceorderpageModule { }
