import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  
  loginForm: FormGroup;
  shippingForm: FormGroup;  
  billingForm: FormGroup;
  cartitems : CartItems[] = [];
  totalbill :number;
  itemscount:number;
  email:string;
  env=environment;

  submitted =false;
  constructor(private router: Router,private fb: FormBuilder,private orderService: GuestorderService,private store : Store,private authService: ClientauthService,) {
    render(
      {
        id:"#mypaypalbuttons",
        currency:"USD",
        value:"50",
        onApprove :(details) =>{
             alert("transaction sucessfull");
             this.placeorder();
        }
      }
    );
   }

  ngOnInit(): void {

 // console.log(this.env.user_email);

  if(localStorage.getItem("email")) //this.env.user_email.length>0
  {

    render(
      {
        id:"#mypaypalbuttons",
        currency:"USD",
        value:"50",
        onApprove :(details) =>{
             alert("transaction sucessfull");
             this.placeorder();
        }
      }
    );

    this.email=localStorage.getItem("email");

    $("#login").css("display","none");   
    $("#billinginfo").css("display","block");
    this.orderService.getcustomer(this.email).subscribe(  //.env.user_email
      result => {
        console.log(result);
       this.billingForm.patchValue(result.data)
      }
    )
  }


    this.createForm();
  }

  onSubmit(event) {
    event.preventDefault();
      $("#login").css("display","none");   
      $("#billinginfo").css("display","block");
  }

  onSubmit1(event) {
   
    this.submitted=true;
    if (this.billingForm.invalid) {
      return;
    }
    event.preventDefault();
        if (this.billingForm.valid) {
      $("#billinginfo").css("display","none");   
      $("#shippinginfo").css("display","block");
      $("#billinginfo1").css("display","block");
    }
    this.submitted=false;
  }

  onSubmit2(event) {  
    this.submitted=true;
    if (this.shippingForm.invalid) {
      return;
  }

  event.preventDefault();
  this.store.pipe(select(fromCart.getCartItems)).subscribe(
    cartitems => {
     this.cartitems = cartitems;
   }) 

   this.store.pipe(select(fromCart.getTotalBill)).subscribe(
    totalbill => {
     this.totalbill = totalbill;
   })

    event.preventDefault();
        if (this.billingForm.valid) {
      $("#shippinginfo").css("display","none");   
      $("#shippingmethod").css("display","block");
      $("#shippinginfo1").css("display","block");
    }
  }

  onSubmit3(event) {
    event.preventDefault();
        if (this.billingForm.valid) {
      $("#shippingmethod").css("display","none");   
      $("#paymentinfo").css("display","block");
      $("#shippingmethod1").css("display","block");
    }
  }

  onSubmit4(event) {
    event.preventDefault();
    $("#paymentinfo").css("display","none");   
      $("#payment").css("display","block");
    }

  back3(event) {
     
    if (this.billingForm.valid) {
        $("#paymentinfo").css("display","none");
        $("#shippingmethod").css("display","block");   
    }
  }

  back2(event) {
     
    event.preventDefault();
      if (this.billingForm.valid) {
        $("#shippingmethod").css("display","none");
        $("#shippinginfo").css("display","block");   
    }
  }

  back1(event) {
    event.preventDefault();
      if (this.billingForm.valid) {
        $("#shippinginfo").css("display","none");
        $("#billinginfo").css("display","block");   
    }
  }

  checkCheckBoxvalue(event){
    if(event.target.checked){
      this.shippingForm.patchValue({
        firstname: this.billingForm.get('firstname').value,
        lastname: this.billingForm.get('lastname').value,
        company: this.billingForm.get('company').value,
        email: this.billingForm.get('email').value,
        telephone: this.billingForm.get('telephone').value,
        country: this.billingForm.get('country').value,
        address: this.billingForm.get('address').value,
        appartment: this.billingForm.get('appartment').value,
        ordernote: this.billingForm.get('ordernote').value,
        postcode: this.billingForm.get('postcode').value,
        town: this.billingForm.get('town').value
      }); 
    }
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

    this.loginForm = this.fb.group({
      emailaddress: ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],
    },)

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
  get f3() { return this.loginForm.controls; }

  login(event) {
    console.log("hi");
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }
    event.preventDefault();
    
    this.authService.login({
      emailaddress: this.loginForm.get('emailaddress').value,
      password: this.loginForm.get('password').value
    }).subscribe(
      result => {
        if (result) {
         // this.messageService.clear();
          this.env.user_email=this.loginForm.get('emailaddress').value
          this.router.navigateByUrl('/clientdashboard');
        }
      }
    )

    this.submitted=false;
  }


  /*onSubmit():void{
    this.model = this.signupForm.value;
  
    this.orderService.signup(this.model).subscribe(
      result => {
        //console.log(result);
        if( ! result.error) {
          console.log("done");
        }
      }
    )
  }*/

  placeorder(){
     //getting cartitems from redux
     this.store.pipe(select(fromCart.getCartItems)).subscribe(
      cartitems => {
       this.cartitems = cartitems;
     })
     //getting totalbill from redux
     this.store.pipe(select(fromCart.getTotalBill)).subscribe(
      totalbill => {
       this.totalbill = totalbill;
     })
     //getting item count from redux
     this.store.pipe(select(fromCart.getItemsCount)).subscribe(
      itemscount => {
       this.itemscount = itemscount;    
      })
      // order inteface 
      const model={billinginfo :this.billingForm.value ,shippinginfo:this.shippingForm.value , cartitems:this.cartitems,totalbill:this.totalbill,itemscount:this.itemscount} as Order;
      //calling servive
     if(this.env.user_email.length==0){
      this.orderService.addorder(model).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            alert('Your order has been placed successfully');
          } else {
            alert('Some thingh went wrong!');
          }
        }
      ) 
     }
     if(this.env.user_email.length>0){
      this.orderService.addregisteredorder(model).subscribe(
        result => {
          console.log(result);
          if ( ! result.error) {
            alert('Your order has been placed successfully');
          } else {
            alert('Some thingh went wrong!');
          }
        }
      ) 
     }
      console.log(model);
  }

}
