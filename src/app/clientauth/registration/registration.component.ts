import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientauthService } from '../services/clientauth.service';
import { Customer } from '../models/customer';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model: Customer;
  registrationForm: FormGroup;  
  submitted =false;
  constructor(private fb: FormBuilder,
    private clientauthService: ClientauthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      conpassword: ['', [Validators.required]],
      company: ['' ],
      _website: ['swordskingdom'],
      _store: ['swordskingdom'],
      created_in: ['swordskingdom'],
      accounttype:['registered'],
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
    this.model = this.registrationForm.value;
    this.clientauthService.registration(this.model).subscribe(
      result => {
       // console.log(result);
        if ( ! result.error) {
          alert('you have successfully registered please login!');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  
    this.submitted=false;
  }

}
