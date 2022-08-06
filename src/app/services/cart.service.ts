import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: string;
  price: string;
  img: string;
  title: string;
  desc: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any = {};
  private cartItems = new BehaviorSubject(0);

  constructor() { }


  addProduct(product: Product) {

    if (!this.cart[product.id]) {
      this.cart[product.id] = {
        amount: 1,
        ...product
      }
    } else {
      this.cart[product.id].amount += 1;
    }


    this.cartItems.next(this.cartItems.value + 1);
  }



  // function to remove one product 
  removeProduct(product: Product) {
    if (this.cart[product.id]) {
      this.cart[product.id].amount -= 1;
      if (this.cart[product.id].amount === 0) {
        delete this.cart[product.id];
      }
    }
    this.cartItems.next(this.cartItems.value - 1);
  }



  deleteItem(product: Product) {
    delete this.cart[product.id];
    this.cartItems.next(this.cartItems.value - 1);
  }


  getCartCount() {
    return this.cartItems.asObservable();
  }

  getCart() {
    const cartItems = [];
    for (const [key, value] of Object.entries(this.cart)) {
      cartItems.push(value)
    }
    return cartItems;
  }
}
