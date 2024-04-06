import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../Iproduct';
import { products } from '../../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  products!: Iproduct[];

  //i want to create a single product that i can display in the component.html
  product!: Iproduct;

  constructor(private route:ActivatedRoute,
              private cartService:CartService) {

  }

  onAddToCart() {
  this.cartService.addToCart(this.product)
  }

  ngOnInit(): void {
    this.products = products;
    const id:number = +this.route.snapshot.params['index'];
    this.product = this.products[id]
 
    
    
  }
}

