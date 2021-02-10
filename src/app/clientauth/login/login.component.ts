import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientauthService } from '../services/clientauth.service';
import { MessageService } from 'src/app/services/message.service';
import { environment } from '../../../environments/environment';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import * as fromCart from '../../cart.selectors';
import {CartItems} from '../../cart';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  env=environment;
  loginForm: FormGroup;  
  submitted =false;
  email:string;
  cartitems : CartItems[] = [];
  totalbill :number;

  constructor(private store : Store,
    private fb: FormBuilder,
    private router: Router,
    private authService: ClientauthService,
    private messageService: MessageService) {
      if (this.authService.isLoggedIn()) {
        console.log("redirected");
        this.router.navigateByUrl('/clientdashboard');      
    }
     }

  ngOnInit(): void {

    this.store.pipe(select(fromCart.getCartItems)).subscribe(
      cartitems => {
       this.cartitems = cartitems;
     })

     this.store.pipe(select(fromCart.getTotalBill)).subscribe(
      totalbill => {
       this.totalbill = totalbill;
     })


    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      emailaddress: ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],
    }, )
  }
  get f() { return this.loginForm.controls; }

  onSubmit1(event) {
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
          this.messageService.clear();
          this.email=this.loginForm.get('emailaddress').value;
          localStorage.setItem("email",this.email);
          this.env.user_email=this.loginForm.get('emailaddress').value
          console.log(this.env.user_email);
          this.router.navigateByUrl('/clientdashboard');
        }
      }
    )

    this.submitted=false;
  }

}
