import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../cart.actions';
import * as fromCart from '../cart.selectors';
import {CartItems} from '../cart';
import { createAction, props } from '@ngrx/store';
import { event } from 'jquery';
import { ValueTransformer } from '@angular/compiler/src/util';
import { ProductService } from './services/product.service';
import { Product } from './models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-productdetailspage',
  templateUrl: './productdetailspage.component.html',
  styleUrls: ['./productdetailspage.component.css']
})
export class ProductdetailspageComponent implements OnInit {

  env=environment;
  model: any[]=[];
  title: string;
  sku: string;
  res :any[]=[];
  public description="";
  public short_description ="";
  public name="";
  public thumbnail="";
  public image1="";
  public image2="";
  public image3="";
  public image4="";
  public image5="";
  public rating:number;
  public sale="";
  public sale_percent;
  price : number   ;
   
  constructor(private store : Store ,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  adduser(name :string , price : number): void {
    console.log(price);
    console.log(name);
    const user: CartItems = {"name" : name , "price" : price ,"image":"http://localhost:3000/images/product.png","quantity" : 1};
    
    this.store.dispatch(new CartActions.AddCartItem({"user1":user}));
  }

  ngOnInit(): void {
    
     // edit product
     this.sku = this.route.snapshot.paramMap.get('sku');
     this.env.related_sku=this.sku;
     this.env.reviewssku=this.sku;
     if(this.sku) {
       this.getProduct();
     }
  }

  getProduct() {
    this.productService.getProduct(this.sku).subscribe(
      result => {
        console.log(result);
        this.model=result.data;
        console.log(this.model);      
        this.res=result.data;
        this.description=result.data.description;
        this.short_description = result.data.short_description ;
        this.name=result.data.name;
        this.price=result.data.price;
        this.thumbnail=result.data.thumbnail;
        this.image1=result.data.image1;
        this.image2=result.data.image2;
        this.image3=result.data.image3;
        this.image4=result.data.image4;
        this.image5=result.data.image5;
        this.rating=result.data.rating;
        this.sale=result.data.sale;
        this.sale_percent=result.data.sale_percent;
      }
    )
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
