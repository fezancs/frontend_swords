import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { ProductService } from './services/product.service';
import { Product } from './models/product';
import {  ActivatedRoute,Router } from '@angular/router';
import {CategoryService} from './services/category.service';
import { Category } from './models/category';
import { Subcategory } from './models/subcategory';
import { from } from 'rxjs';
import { SelectiveproductsService } from './services/selectiveproducts.service';
import { SortbyService } from './services/sortby.service';

@Component({
  selector: 'app-shoppage',
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.css']
})
export class ShoppageComponent implements OnInit {

  minValue: number = 10;
  maxValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    noSwitching: true
  };


  showloadingspinner=true;
  category: Category[] = [];
  subcategory: Subcategory[] = [];

  p: number = 1;
  limit: number = 8;
  total: number;
  title: string;
  productcategory:string;
  slideData: Product[] = [];
  myImage="/images/";
  filterkeyword:string;
 
  layout:string = 'grid';

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private selectiveproductsService: SelectiveproductsService,
    private sortbyService: SortbyService,
  ) { }

  onChange(deviceValue) {
    console.log(deviceValue);
    this.limit=deviceValue;
    this.getProducts(this.p);
  }
  onChangecategory(value){
    console.log(value);
    this.productcategory=value;
    this.getproductsbytype(1);
  }
  onChangesort(value){
    console.log(value);
    if(value=='name'){
      var p=1;
      let offset = (p - 1) * this.limit;
      this.showloadingspinner=true;
      this.sortbyService.getProductsbyname(offset, this.limit).subscribe(
        result => {
          this.slideData = result.data;
          console.log(result.data);
          console.log(this.slideData);
          this.total = result.total;
          this.showloadingspinner=false;
          console.log(result);
        }
      )
    }
    if(value=='price'){
      var p=1;
      let offset = (p - 1) * this.limit;
      this.showloadingspinner=true;
      this.sortbyService.getProductsbyprice(offset, this.limit).subscribe(
        result => {
           this.slideData = result.data;
           console.log(result.data);
           console.log(this.slideData);
           this.total = result.total;
          this.showloadingspinner=false;
          console.log(result.total);
        }
      )
    }

  }

  ngOnInit(): void {
    
    if(localStorage.getItem("filterkeyword"))
    {
      this.filterkeyword=localStorage.getItem("filterkeyword");
      console.log(this.filterkeyword);
      this.getfilteredproducts(1);
      localStorage.removeItem("filterkeyword");
    }
    else if( this.route.snapshot.paramMap.get('category') ) {
      this.productcategory = this.route.snapshot.paramMap.get('category');
      console.log(this.productcategory);
      this.getproductsbytype(1);
    }
    else{
      this.getProducts(this.p);
    }

    this.getcategorys();
    this.getsubcategorys();

    this.title = 'Products';
  

  $('button').on('click',function(e) {
    if ($(this).hasClass('grid')) {
        $('#listgrid-container ul').removeClass('list').addClass('grid');
    }
    else if($(this).hasClass('list')) {
        $('#listgrid-container ul').removeClass('grid').addClass('list');
    }
   });
  }

  getProducts(p: number) {
    let offset = (p - 1) * this.limit;
    this.productService.getProducts(offset, this.limit).subscribe(
      result => {
        this.slideData = result.data;
        console.log(result.data);
        console.log(this.slideData);
        this.total = result.total;
        this.showloadingspinner=false;
      }
    )
  }

  getPage(pageNo: number) {
    this.p = pageNo;
    this.getProducts(this.p);
  }

  getcategorys() {
    this.categoryService.getcategorys().subscribe(
      result => {
        this.category= result;
        console.log(this.category);
      }
    )
  }

  getsubcategorys() {
    this.categoryService.getsubcategorys().subscribe(
      result => {
        this.subcategory = result;
        console.log(this.subcategory);
      }
    )
  }

  getupdatesearchresult(pageNo: number) {
    this.p = pageNo;
    console.log(this.p);
    this.updatesearchresult(this.p);
  }

  updatesearchresult(p: number){
    let offset = (p - 1) * this.limit;
    console.log("offset");
    console.log(offset);
    this.selectiveproductsService.getselectiveproducts(this.minValue,this.maxValue,offset, this.limit).subscribe(
      result => {
        console.log("priceslider");
        this.slideData = result.data;
        console.log(result.data);
        console.log(this.slideData);
        this.total = result.total;
        this.showloadingspinner=false;
      }
    )
  }

  getproductsbytype(pageNo: number) {
    this.p = pageNo;
    console.log(this.p);
    this.productsbytype(this.p);
  }

  productsbytype(p: number){
    let offset = (p - 1) * this.limit;
    console.log("offset");
    console.log(offset);
    this.selectiveproductsService.getproductsbytype(this.productcategory,offset, this.limit).subscribe(
      result => {
        console.log("category");
        this.slideData = result.data;
        console.log(result.data);
        console.log(this.slideData);
        this.total = result.total;
        this.showloadingspinner=false;
      }
    )
  }

  getfilteredproducts(pageNo: number) {
    this.p = pageNo;
    this.filteredproducts(this.p);
  }
  filteredproducts(p: number){
    console.log("filter");
    let offset = (p - 1) * this.limit;
    this.selectiveproductsService.getfilterproducts(this.filterkeyword,offset, this.limit).subscribe(
      result => {
        console.log("filter");
        console.log(result);
        this.slideData = result.data;
        this.total = result.total;
        this.showloadingspinner=false;
      }
    )
  }

  slideData2 = [
    {
      image: "assets/images/product1.png",
      name: "CLASSIC SWORD",
      price: "$99.00",
    },
    {
      image: "assets/images/product1.png",
      name: "CASUAL GOLD SWORD",
      price: "$99.00",
    },
    {
      image: "assets/images/product1.png",
      name: "HOBBIT BLACK KNIGHT",
      price: "$99.00",
    },
    {
      image: "assets/images/product1.png",
      name: "CLASSIC SWORD",
      price: "$99.00",
    },
    {
      image: "assets/images/product1.png",
      name: "HOBBIT BLACK KNIGHT",
      price: "$99.00",
    },
    {
      image: "assets/images/product1.png",
      name: "HAYYAR POTER SWORD",
      price: "$99.00",
    },
  ]

  // category1 = [
  //   {
  //     id:"1",
  //     name: "abc",
  //   },
  //   {
  //     id:"3",
  //     name: "def",
  //   },
  //   {
  //     id:"2",
  //     name: "ghi",
  //   } 
  // ]

  // subcategory1 = [
  //   {
  //     id:"1",
  //     parentid:"1",
  //     name: "aaa",
  //   },
  //   {
  //     id:"1",
  //     parentid:"1",
  //     name: "aaaaaaaaaa",
  //   },
  //   {
  //     id:"3",
  //     parentid:"2",
  //     name: "eee",
  //   },
  //   {
  //     id:"2",
  //     parentid:"3",
  //     name: "sss",
  //   } 
  // ]

  print(category:string , subcategory:string)
  {
    console.log(category);
    console.log(subcategory);
    
    let offset = (this.p - 1) * this.limit;
    
    this.productService.getroductbycategory(category, subcategory,offset, this.limit).subscribe(
      result => {
        this.slideData = result.data;
        console.log(result);
        this.total = result.total;
      }
    )


  }


}
