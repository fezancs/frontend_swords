import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-accordian',
  templateUrl: './shop-accordian.component.html',
  styleUrls: ['./shop-accordian.component.css']
})
export class ShopAccordianComponent implements OnInit {

  test:string='abc';
  constructor() { }

  category = [
    {
      id:"1",
      name: "abc",
    },
    {
      id:"3",
      name: "def",
    },
    {
      id:"2",
      name: "ghi",
    } 
  ]

  subcategory = [
    {
      id:"1",
      parentid:"1",
      name: "aaa",
    },
    {
      id:"1",
      parentid:"1",
      name: "aaaaaaaaaa",
    },
    {
      id:"3",
      parentid:"2",
      name: "eee",
    },
    {
      id:"2",
      parentid:"3",
      name: "sss",
    } 
  ]

  print(category:string , subcategory:string)
  {
    console.log(category);
    console.log(subcategory);
  }

  ngOnInit(): void {

     $(".toggle h3").click(function(e){
            e.preventDefault();
            if($(this).closest("div").find("div:first").css("display")=="none")
            {   
              console.log("i am clicked");
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
