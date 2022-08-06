import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[] = [];
  cartSum = 0;

  constructor(private cartService: CartService,
    private router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
    this.cartSum = this.cart.reduce((val, item) => val += +(item.price), 0);
  }

  dec(id: any) {
    this.cartService.removeProduct(id);
    this.cart = this.cartService.getCart();
    this.cartSum = this.cart.reduce((val, item) => val += +(item.price), 0);
    console.log(id);
    
  }
  inc(id: any) {
    this.cartService.addProduct(id);
    console.log(id);

  }

  dismiss() {
    this.router.navigate(['/order']);
  }
}
