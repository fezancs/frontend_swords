import { Component } from '@angular/core';
import { from } from 'rxjs';
//import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swordskingdom';

  constructor(){
   /* render(
      {
        id:"#mypaypalbuttons",
        currency:"USD",
        value:"50",
        onApprove :(details) =>{
             alert("transaction sucessfull");
        }
      }
    );*/
  }
}
