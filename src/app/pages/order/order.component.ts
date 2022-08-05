import { Component, OnInit } from '@angular/core';

import { CartService, Product } from '../../services/cart.service';

import productData from '../../../assets/json/menu.json';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products: any[] = [];


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.products = productData;
  }


  addProduct(product: Product) {
    this.cartService.addProduct(product);
  }
  
}
