import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AnimationController, ModalController } from '@ionic/angular';
import { CartComponent } from 'src/app/pages/cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount = 0;

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.cartService.getCartCount().subscribe(value => {
      if (value > 0) {
        // this.animateCart();
      }
      this.cartCount = value;
  }

  
  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'custom-modal'
    });

    await modal.present();
  }

}
