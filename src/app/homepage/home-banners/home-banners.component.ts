import { Component, OnInit } from '@angular/core';
import { BannerproductsService } from '../services/bannerproducts.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import {CartItems} from '../../cart';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home-banners',
  templateUrl: './home-banners.component.html',
  styleUrls: ['./home-banners.component.css']
})
export class HomeBannersComponent implements OnInit {

  rows: Product[] = [];

  constructor(private store : Store,private bannerService: BannerproductsService,
    private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getbannerproducts();
  }

  getbannerproducts() {
    console.log("bestseller");
    this.bannerService.getbannerproducts().subscribe(
      result => {
        this.rows = result;
        console.log(result);
      }
    )
  }  

  adduser(name :string , price : number, image :string,visibility : number): void {
    console.log(price);
    console.log(image);
    if(visibility == 0)
    {
         alert("this product is out of stock");
    }
    else
    {
      const user: CartItems = {"name" : name , "price" : price,"image":image ,"quantity" : 1};
    
      this.store.dispatch(new CartActions.AddCartItem({"user1":user}));

      this.toastr.success('added to cart' , name);
    }
  }

}
