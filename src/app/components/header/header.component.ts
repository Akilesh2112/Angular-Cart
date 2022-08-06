import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AnimationController, ModalController } from '@ionic/angular';
import { CartComponent } from 'src/app/pages/cart/cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private router: Router, private cartService: CartService, private modalCtrl: ModalController) { }
  
    cartCount = 0;

  ngOnInit(): void {
    this.cartService.getCartCount().subscribe(value => {
      this.cartCount = value;
    }
    );
  }

  async openCart(pageName:string) {
    this.router.navigate([`${pageName}`]);
  }
  
}
