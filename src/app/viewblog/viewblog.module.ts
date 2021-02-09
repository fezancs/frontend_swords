import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewblogRoutingModule } from './viewblog-routing.module';
import { ViewblogComponent } from './viewblog.component';
import { ViewComponent } from './view/view.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewblogComponent, ViewComponent],
  imports: [
    CommonModule,
    ViewblogRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class ViewblogModule { }
