import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router ,ActivatedRoute } from '@angular/router';
import { ClientauthService } from 'src/app/clientauth/services/clientauth.service';
import { environment } from './../../environments/environment';
import { ClientinfoService } from './services/clientinfo.service';
import { Clientinfo } from './models/clientinfo';
import {Invoice} from './models/invoice';
import { Order } from './models/order';
@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.css']
})
export class ClientdashboardComponent implements OnInit {

  model: Clientinfo;
  env=environment;
  registrationForm: FormGroup;  
  submitted =false;
  email:string;
  invoice:Invoice[];
  order:Order[];
  constructor(private fb: FormBuilder,
    private authService: ClientauthService,
    private route: ActivatedRoute,
    private router: Router,
    private clientinfo: ClientinfoService) { }

  ngOnInit(): void {

    this.email=localStorage.getItem("email");

    this.getcustomer();

    this.getinvoice();

    this.getorder();

    this.createForm();

    $(document).ready(function(){
	
      $('#maps li').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('#maps li').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
      })
    
    })

  }


  createForm() {
    this.registrationForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: [''],
      company: ['' ],
      fax: ['' ],
      telephone: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      province: ['', [Validators.required]],
      country : ['', [Validators.required]],
      city: ['', [Validators.required]],
      address : ['', [Validators.required]],
    }, )
  }
  get f() { return this.registrationForm.controls; }

  onSubmit1(event) {
    console.log("hi");
    this.submitted=true;
    if (this.registrationForm.invalid) {
      return;
    }
    event.preventDefault();
    this.updatecustomer(); 
    this.submitted=false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/clientauth']);
  }

  getcustomer() {
    this.clientinfo.getcustomer(this.email).subscribe(            //.env.user_email
      result => {
        console.log(result);
        this.registrationForm.patchValue(result.data)
      }
    )
  }

  getinvoice() {
    this.clientinfo.getinvoice(this.email).subscribe(      //.env.user_email
      result => {
        console.log(result);
        this.invoice=result.data;
        console.log(this.invoice);
        //this.registrationForm.patchValue(result.data)
      }
    )
  }

  getorder() {
    this.clientinfo.getorder(this.email).subscribe(   //.env.user_email
      result => {
        console.log(result);
        this.order=result.data;
        console.log(this.order);
        //this.registrationForm.patchValue(result.data)
      }
    )
  }


  updatecustomer() {
    this.model = this.registrationForm.value;
    this.model.email = this.email;   //env.user_email;
    this.clientinfo.updatecustomer(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          alert('Successfully updated!');  
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

}
