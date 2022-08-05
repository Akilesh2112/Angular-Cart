import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  cartSum = 0;

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
    this.cartSum = this.cart.reduce((val, item) => val += +(item.price), 0);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
