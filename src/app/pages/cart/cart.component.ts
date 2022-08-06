import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[] = [];
  cartSum: number = 0;

  constructor(private cartService: CartService,
    private router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartSum = this.cart.reduce((val, item) => val += +(item.price * item.amount), 0);
  }

  dec(id: any) {
    this.cartService.removeProduct(id);
    this.cart = this.cartService.getCart();
    this.cartSum = this.cart.reduce((val, item) => val += +(item.price * item.amount), 0);
  }

  inc(id: any) {
    this.cartService.addProduct(id);
    this.cart = this.cartService.getCart();
    this.cartSum = this.cart.reduce((val, item) => val += +(item.price * item.amount), 0);
    this.cartSum += 1;
  }

  dismiss() {
    this.router.navigate(['/order']);
  }
}
