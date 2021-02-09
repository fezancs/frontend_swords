import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { Reviews } from '../models/reviews';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  model: Blog[]=[];
  model1: Reviews;
  id:number;
  title:string;
  rows : Reviews[]=[];
  currentrate :number=3.5;
  reviewsForm: FormGroup; 
  submitted =false;

  constructor(private fb: FormBuilder,private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    console.log("id");
    if(this.id) {
      this.getblog();
    }
     this.createForm();
  }

  createForm() {
    this.reviewsForm = this.fb.group({
      title:[''],
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
    this.reviewsForm.controls.title.setValue(this.title);
    this.reviewsForm.controls.rating.setValue(this.currentrate);
    

    this.model1 = this.reviewsForm.value;
    console.log(this.model1);
    this.blogService.addreview(this.model1).subscribe(
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




  getblog() {
    console.log("blog");
    this.blogService.getBlog(this.id).subscribe(
      result => {
        this.model=result;
        this.title=result[0].title;
        this.getreviews();
        console.log(this.model);
      }
    )
  }
  getreviews(){
    this.blogService.getreviews(this.title).subscribe(
      result => {
        console.log(result);
        this.rows=result;
      }
    )
  }

}
