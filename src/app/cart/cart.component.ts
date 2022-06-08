import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart.model';
import { BatteryService } from '../services/battery.service';
import { EngineService } from '../services/engine.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  totalSum = 0;
  totalItems = 0;


  constructor(private engineService: EngineService,
    private batteryService: BatteryService
    ) { }

  ngOnInit(): void {
    const cartItemsSS = sessionStorage.getItem("cartItems");
    if (cartItemsSS) {
      this.cartProducts = JSON.parse(cartItemsSS);
      this.cartTotalSum();
    }
  }
 

  decreaseQuantity(cartProduct: CartProduct) {
    cartProduct.quantity--;
    if (cartProduct.quantity <= 0) {    // see on selle jaoks et ei läheks miinusesse ostukorv
      this.removeProduct(cartProduct);
 }
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
    // this.productService.cartChanged.next(true); 
    this.cartTotalSum();
  }
  
  increaseQuantity(cartProduct: CartProduct) {
    cartProduct.quantity++; 
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
    // this.productService.cartChanged.next(true); 
    this.cartTotalSum();
  }
  
  removeProduct(cartProduct: CartProduct) {
    const index = this.cartProducts.findIndex(element => element.product.id === cartProduct.product.id);
    if (index >= 0) {
    this.cartProducts.splice(index, 1);
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
    // this.productService.cartChanged.next(true);   // see rida on selleks et navbar updatikks
    this.cartTotalSum();
    }
  }

  private cartTotalSum() {
    this.totalSum = 0;
    this.totalItems = 0;
    this.cartProducts.forEach(element => this.totalSum = this.totalSum + element.product.price * element.quantity);
    this.totalSum = Math.round((this.totalSum + Number.EPSILON) * 100) / 100  
    this.cartProducts.forEach(element => this.totalItems = this.totalItems + element.quantity);
    }

  emptyCart() {
    this.cartProducts = [];
    sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
    // this.productService.cartChanged.next(true); 
    this.cartTotalSum();
  }

}
  

  
