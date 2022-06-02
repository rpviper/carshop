import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart.model';
import { EngineService } from '../services/engine.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = [];

  constructor(private engineService: EngineService ) { }

  ngOnInit(): void {
    const cartItemSS = sessionStorage.getItem("cartItems");
    if (cartItemSS) {
      this.cartProducts = JSON.parse(cartItemSS);
    }
  }

}
