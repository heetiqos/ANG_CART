import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Iproduct } from '../Iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  total!: number;
  cartItems!: Iproduct[];

constructor(private cartService:CartService) {
}

incQtty(product: Iproduct) {// to increase quantity button
  this.cartService.onQttyIncrease(product)
  this.total = this.cartService.getTotal();
}

decQtty(product: Iproduct) {// to decrease quantity button
  this.cartService.onQttyDecrease(product)
  this.total = this.cartService.getTotal();
}

onDelete(index:number) {// to delete in the delete button
  this.cartService.onDelete(index)
  this.total = this.cartService.getTotal();
}


ngOnInit(): void {
  this.cartItems = this.cartService.getCart();
  this.total = this.cartService.getTotal();
}


}
