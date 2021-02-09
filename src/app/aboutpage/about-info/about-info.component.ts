import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.css']
})
export class AboutInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
          $(".toggle h3").click(function(e){
            e.preventDefault();
            if($(this).closest("div").find("div:first").css("display")=="none")
            {   
                $(".toggle h3").closest("div").find("div:first").hide();
                $(".toggle h3").closest("div").find(".plus").text("+");
                $(".toggle h3").closest("div").find(".imgacc").css("background", "white");
                $(this).closest("div").find("div:first").show();
                $(this).closest("div").find(".plus").text("x");
                $(this).closest("div").find(".imgacc").css("background", "#FFCA00");
            }
            else
            {
                $(this).closest("div").find("div:first").hide();
                $(this).closest("div").find(".plus").text("+");
                $(this).closest("div").find(".imgacc").css("background", "white");  
            }
            
            
        })

  }

}
