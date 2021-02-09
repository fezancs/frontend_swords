import { Component, OnInit ,Input } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { Reviews } from '../models/reviews';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productdetails-review',
  templateUrl: './productdetails-review.component.html',
  styleUrls: ['./productdetails-review.component.css']
})
export class ProductdetailsReviewComponent implements OnInit {

  model: Reviews;
  submitted =false;
  reviewsForm: FormGroup; 
  env=environment;
  rows : Reviews[]=[];
  currentrate :number=3.5;
  constructor(private fb: FormBuilder,public reviewsService:ReviewsService) { 
  }

  ngOnInit(): void {
   
    this.createForm();

     this.getreviews();
  }

  createForm() {
    this.reviewsForm = this.fb.group({
      sku:[''],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      headline:['', [Validators.required]],
      comment:['', [Validators.required]],
      rating:[''],
    }, )
  }
  get f() { return this.reviewsForm.controls; }

  onSubmit1(event) {

    this.submitted=true;
    if (this.reviewsForm.invalid) {
      return;
    }
    event.preventDefault();
    this.reviewsForm.controls.sku.setValue(this.env.reviewssku);
    this.reviewsForm.controls.rating.setValue(this.currentrate);
    

    this.model = this.reviewsForm.value;
    this.reviewsService.addreview(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.getreviews();
          alert('comment added successfully !');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  
    this.submitted=false;
  }


  getreviews(){
    this.reviewsService.getreviews(this.env.reviewssku).subscribe(
      result => {
        console.log(result);
        this.rows=result;
      }
    )
  }

}
