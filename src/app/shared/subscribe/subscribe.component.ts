import { Component, OnInit } from '@angular/core';
import { NewslettersubscribersService } from '../services/newslettersubscribers.service';
import { Newslettersubscribers } from '../models/newslettersubscribers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {


  constructor(private newsletterService: NewslettersubscribersService) { }

  ngOnInit(): void {
  }

  addnewslettersubscriber() {
    var email1 = $('#subscriberemail').val();
    
    console.log(email1);
    const model = { email: email1,firstname:"n/a",middlename:"n/a",lastname:"n/a",_status:"subscribed",_store:"swordskingdom", _website: "swordskingdom" } as Newslettersubscribers;
    this.newsletterService.addnewslettersubscribers(model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          alert('You have successfully subscribed');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

}
