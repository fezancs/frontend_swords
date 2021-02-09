import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeorderpage',
  templateUrl: './placeorderpage.component.html',
  styleUrls: ['./placeorderpage.component.css']
})
export class PlaceorderpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hotsalesdata=[
    {
     swordname : "TOP SWORD",
     swordprice : 90.00,
    },
    {
     swordname : "HARRY POTOR",
     swordprice : 80.00,
    },
    {
     swordname : "TOP OF THE LIST",
     swordprice : 70.00,
    },
    {
     swordname : "TOP SWORD",
     swordprice : 80.00,
    }
   ]

}
