import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailspageRoutingModule } from './productdetailspage-routing.module';
import { ProductdetailspageComponent } from './productdetailspage.component';
import { ProductdetailsTableComponent } from './productdetails-table/productdetails-table.component';
import { ProductdetailsAccordianComponent } from './productdetails-accordian/productdetails-accordian.component';
import { ProductdetailsDescriptionboxComponent } from './productdetails-descriptionbox/productdetails-descriptionbox.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { SharedModule } from '../shared/shared.module';
import { ProductdetailsReviewComponent } from './productdetails-review/productdetails-review.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ProductdetailspageComponent, ProductdetailsTableComponent, ProductdetailsAccordianComponent, ProductdetailsDescriptionboxComponent, ProductdetailsReviewComponent],
  imports: [
    CommonModule,
    ProductdetailspageRoutingModule,
    NgxNumberSpinnerModule,
    SharedModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class ProductdetailspageModule { }
