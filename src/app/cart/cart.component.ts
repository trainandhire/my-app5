import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public name:string = "";
  public price:number = 0;
  public rating:number = 0;
  public isFreeDelivery:boolean=false;

  public term:string="";

  public products:any = [
    {name:'pen', price:10, rating:3, isFreeDelivery:true},
    {name:'phone', price:100, rating:2, isFreeDelivery:false},
    {name:'shirt', price:400, rating:4, isFreeDelivery:true},
    {name:'cap', price:200, rating:5, isFreeDelivery:false},
    {name:'mobile case', price:300, rating:2, isFreeDelivery:true},
    {name:'remote', price:400, rating:2.5, isFreeDelivery:false},
    {name:'tv', price:12000, rating:1, isFreeDelivery:true},
    {name:'headset', price:1000, rating:1.5, isFreeDelivery:false},
    {name:'airpods', price:12000, rating:1.8, isFreeDelivery:true},
    {name:'pant', price:2000, rating:4.4, isFreeDelivery:false},
  ];

  search(){
    this.products = this.products.filter((product:any)=> product.name.indexOf(this.term) != -1 );
  }

  onlyFreeDelivery(){
    this.products = this.products.filter((product:any)=> product.isFreeDelivery==true)
  }

  pricelh(){
    this.products = this.products.sort((a:any,b:any)=>a.price-b.price);
  }

  pricehl(){
    this.products = this.products.sort((a:any,b:any)=>b.price-a.price);
  }

  ratinglh(){
    this.products = this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }

  ratinghl(){
    this.products = this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }

  applyDiscount(){
    this.products = this.products.map((product:any)=>{
      product.price = product.price/2;
      return product;
    })
  }

  applyDeliveryChanges(){
    this.products = this.products.map( (product:any) => {
      if(product.isFreeDelivery==false){
        product.price = product.price + 20;
      }
      return product;
    })
  }

  total(){
    var total = this.products.reduce( (sum:any,product:any)=> sum+product.price, 0 );
    alert("Total price is Rs. "+total);
  }

  totalItems(){
    alert("Total cart items: "+this.products.length);
  }

  delete(i:any){
    this.products.splice(i,1);
  }

  add(){
    var product = {
      name: this.name,
      price: this.price,
      rating: this.rating,
      isFreeDelivery: this.isFreeDelivery
    }

    this.products.unshift(product);


  }



}
