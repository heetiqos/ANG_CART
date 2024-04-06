import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Iproduct';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  productItems!: Iproduct[];
  
  ngOnInit(): void {
    this.productItems = products; // IT IS IMPORTANT TO CONSOLE LOG
    
    
  }
}
