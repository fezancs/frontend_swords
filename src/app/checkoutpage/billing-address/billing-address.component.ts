import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { CartItems } from 'src/app/cart';
import { Order } from '../models/order';
//import { orderService } from '../services/order.service';
import { GuestorderService } from '../services/guestorder.service';
import { Store , select } from '@ngrx/store';
import * as CartActions from 'src/app/cart.actions';
import * as fromCart from 'src/app/cart.selectors';
import { render } from 'creditcardpayments/creditCardPayments';
import { environment } from 'src/environments/environment';
import { ClientauthService } from '../services/clientauth.service';
import { Router } from '@angular/router';
import { event } from 'jquery';
   
@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {
 
  billingForm: FormGroup;
  shippingForm: FormGroup;
  submitted =false;
  address="same";
  genders:string[];
  cartitems : CartItems[] = [];
  totalbill :number;
  active=1;
  layout:string;

  constructor(private router: Router,private fb: FormBuilder,private orderService: GuestorderService,private store : Store,private authService: ClientauthService,) {
  
    render(
      {
        id:"#mypaypalbuttons",
        currency:"USD",
        value:"50",
        onApprove :(details) =>{
             alert("transaction sucessfull");
             //this.placeorder();
        }
      }
    );

  }
  

  ngOnInit(): void {

    this.createForm();

    this.store.pipe(select(fromCart.getCartItems)).subscribe(
      cartitems => {
       this.cartitems = cartitems;
     })

     this.store.pipe(select(fromCart.getTotalBill)).subscribe(
      totalbill => {
       this.totalbill = totalbill;
     })



    // this.genders=['male' ,'female','other'];

  }


  aaa(e)
  { 
  //  alert(this.active);  
    if(e=="dif"){
      this.address="dif";
      this.active=2;
      alert(this.address);
    }
    // else{
    //   this.address="same";
    // }
   // alert(e);
    
  }

  createForm() {
 
    this.shippingForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['' , [Validators.required]],
      company: [''],
      email: ['',[Validators.required,Validators.email]],
      telephone: ['',[Validators.required]],
      country: ['' ,[Validators.required]],
      address: ['',[Validators.required]],
      appartment: [''],
      ordernote: [''],
      postcode: [''],
      town: [''],
    }, )
  
    this.billingForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['' , [Validators.required]],
      company: [''],
      email: ['',[Validators.required,Validators.email]],
      telephone: ['',[Validators.required]],
      country: ['' ,[Validators.required]],
      address: ['',[Validators.required]],
      appartment: [''],
      ordernote: [''],
      postcode: [''],
      town: [''],
      store:['swordskingdom'],
      website:['swordskingdom'],
      accounttype:['guest'],
      createdin:['swordskingdom']
      }, )
    
  }
    get f() { return this.billingForm.controls; }
    get f1() { return this.shippingForm.controls; }
 

}
