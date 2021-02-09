import { Component, OnInit,Input } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as CartActions from '../../cart.actions';
import * as fromCart from '../../cart.selectors';
import {CartItems} from '../../cart';
import { createAction, props } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productdetails-table',
  templateUrl: './productdetails-table.component.html',
  styleUrls: ['./productdetails-table.component.css']
})
export class ProductdetailsTableComponent implements OnInit {

  currentrate :number=3.5;
  @Input() public name;
  @Input() public price;
  @Input() public thumbnail;
  @Input() public image1;
  @Input() public image2;
  @Input() public image3;
  @Input() public image4;
  @Input() public image5;
  @Input() public rating;
  @Input() public sale;
  @Input() public sale_percent;
  constructor(private store : Store ,private toastr: ToastrService) { }

  adduser(name1 :string,price1 :number,discount : number): void {
    console.log(name1);
    console.log(discount);
    console.log(price1);
    var name = $(".product-name1").text();
    var price =Number($(".product-price").text());
    var quantity=Number($("#num").val());
    console.log(quantity);
    const user: CartItems = {"name" : name , "price" : price ,"image":"http://localhost:3000/images/product.png","quantity" : quantity};
    
    this.store.dispatch(new CartActions.AddCartItem({"user1":user}));

    this.toastr.success('added to cart' , name);

  }


  ngOnInit(): void {

 $(".plus").click(function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.siblings('input');
  var value = $("#num").val();
  if (value < 30) {
    $('#num').val(Number($('#num').val())+1);
  } 
  else {
    value =30;
  }

  
});
$(".minus").click(function(e) { 
  e.preventDefault();
  var $this = $(this);
  var $input = $this.siblings('input');
  var value = $("#num").val();

  if (value > 1) {
   $('#num').val(Number($('#num').val())-1);
  } 
  else {
    value =1;
  }

});

 

  
let slides = document.getElementById('slideshow');
let imgs = slides.getElementsByTagName('img');
let imagemSelecionada = document.getElementById('displayed-img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let counter = 0;

next.addEventListener('click',nextSlide, false);
prev.addEventListener('click',prevSlide, false);

for (let i = 0; i < imgs.length; i++) {
       let index = i;
       let imagem = imgs[i];     
       clickImage(imagem, index);
       //imagem.setAttribute('data-index', index);       
  }
  function goToSlide(n) {
    counter = (n + imgs.length) % imgs.length;
    mudaImagem(imgs[counter], n);
    console.log(counter)
}

  function nextSlide() {
    goToSlide(counter + 1);    
  }
  
  function prevSlide() {
    goToSlide(counter - 1);
  }

  function mudaImagem(imagem, index) {    
    let path = imagem.getAttribute('src');
    imagemSelecionada.setAttribute('src', path);
  }

  function clickImage(imagem, index) {
      imagem.addEventListener('click', function(event){
      event.preventDefault();    
      mudaImagem(imagem, index); 
      goToSlide(index);
     });     
  }




  }


  slideData = [
    {
      image :"assets/images/productgallery.png",
      hr:"assets/images/productgallery.png",
    }, {
      image :"assets/images/productgallery.png",
      hr:"assets/images/productgallery.png",
    }, {
    image :"assets/images/productgallery.png",
    hr:"assets/images/productgallery.png",
    }, {
      image :"assets/images/productgallery.png",
      hr:"assets/images/productgallery.png",
    }, {
      image :"assets/images/productgallery.png",
      hr:"assets/images/productgallery.png",
    }
  ]





}
