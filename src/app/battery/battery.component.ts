import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartProduct } from '../models/cart.model';
import { Product } from '../models/product.model';
import { BatteryService } from '../services/battery.service';


@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {

  products: Product[] = [];
  engineItems: Product[] = []

  constructor(private batteryService: BatteryService,
    private translateService: TranslateService,
        ) {}

  ngOnInit(): void {
    this.batteryService.getBatteriesFromDb().subscribe(response => {
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
