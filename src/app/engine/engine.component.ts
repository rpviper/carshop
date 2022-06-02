import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartProduct } from '../models/cart.model';
import { Product } from '../models/product.model';
import { EngineService } from '../services/engine.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  products: Product[] = [];
  engineItems: Product[] = []

  constructor(private engineService: EngineService,
    private translateService: TranslateService,
        ) {}

  ngOnInit(): void {
    this.engineService.getEnginesFromDb().subscribe(response => {
      for (const key in response) {
        this.products.push(response[key]);

      }
    })
  }

  addToCart(productClicked: Product) {
    const cartItemSS = sessionStorage.getItem("cartItems");
    let cartItems: CartProduct[] = [];
    if (cartItemSS) {
      cartItems = JSON.parse(cartItemSS);
    }
    const index = cartItems.findIndex(element => element.product.id === productClicked.id);
    if (index >= 0) {
      cartItems[index].quantity++;
    } else {
      cartItems.push({product: productClicked, quantity: 1});
     }
    
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        
    // this.engineService.cartChanged.next(true);
  }

  onSortAZ() {
    this.products.sort((a,b) => a.name.trim().localeCompare(b.name));
  }

  onSortZA() {
    this.products.sort((a,b) => b.name.trim().localeCompare(a.name));
  }
  
  onSortPriceAsc() {
    this.products.sort((a,b) => a.price - b.price);
  }

  onSortPriceDesc() {
    this.products.sort((a,b) => b.price - a.price);
  }


}
