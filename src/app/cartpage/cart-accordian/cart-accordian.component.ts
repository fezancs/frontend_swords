import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-accordian',
  templateUrl: './cart-accordian.component.html',
  styleUrls: ['./cart-accordian.component.css']
})
export class CartAccordianComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(".toggle h3").click(function(e){
      e.preventDefault();
      if($(this).closest("div").find("div:first").css("display")=="none")
      {   
          $(".toggle h3").closest("div").find("div:first").hide();
          $(this).closest("div").find(".plus").find($(".fa")).removeClass('fa-angle-down').addClass('fa fa-angle-right');
      
          $(this).closest("div").find("div:first").show();
          $(this).closest("div").find(".plus").text();
          $(this).closest("div").find(".plus").find($(".fa")).removeClass('fa-angle-right').addClass('fa fa-angle-down');
               
      }
      else
      {
          $(this).closest("div").find("div:first").hide();
          $(this).closest("div").find(".plus").find($(".fa")).removeClass('fa-angle-down').addClass('fa fa-angle-right');
      }
      
      
  })


   


  }

}
