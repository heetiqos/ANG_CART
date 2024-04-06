import { Injectable } from '@angular/core';
import { Iproduct } from './Iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Iproduct[]= [];


  
  constructor() { }

  addToCart(product: Iproduct) {
    if(this.cartItems.includes(product)){
      product.qtty ++
    }else{
      this.cartItems.push(product)
    }
    
  }


  onQttyIncrease(product: Iproduct) {//how to increase the button qtty
    product.qtty ++;
  
  }

  onQttyDecrease(product: Iproduct) {// how to decrease the button qtty
    
    if(product.qtty == 1){
      let index = this.cartItems.indexOf(product);
      this.cartItems.splice(index, 1);
    }else product.qtty --;
  }

  onDelete(index:number) {// to delete in the delete button
    this.cartItems[index].qtty =1;
    this.cartItems.splice(index, 1);
  }


  getCart() {
    return this.cartItems
  }

  getCartLength(){ // for the cart icon that you will see how many product you click
    let length = 0;
    this.cartItems.forEach(function(val){
      length+= val.qtty;
    })  
    return length;
  }


  getTotal() {
    let total : number = 0;
    this.cartItems.forEach((product:Iproduct)=>{
      total += product.price * product.qtty
    
    })
    return total
 
  }
}
