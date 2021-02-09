import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-productdetails-descriptionbox',
  templateUrl: './productdetails-descriptionbox.component.html',
  styleUrls: ['./productdetails-descriptionbox.component.css']
})
export class ProductdetailsDescriptionboxComponent implements OnInit {

  @Input() public description;
  @Input() public short_description;
  constructor() { }

  ngOnInit(): void {
  
  }

}
