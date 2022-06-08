import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartProduct } from '../models/cart.model';
import { Product } from '../models/product.model';
import { BatteryService } from '../services/battery.service';

@Component({
  selector: 'app-battery-show',
  templateUrl: './battery-show.component.html',
  styleUrls: ['./battery-show.component.css']
})
export class BatteryShowComponent implements OnInit {

  batteryItems: Product[] = []
  products: Product[] = [];
  product!: Product
  changingForm!: FormGroup
  

  constructor(private batteryService: BatteryService,
    private route: ActivatedRoute,
           ) { }

  ngOnInit(): void {
    localStorage.getItem("language");
    const productId = this.route.snapshot.paramMap.get("productId");
    if (productId) {
      this.getBatteriesFromDb(productId);
    } 
  }

  private getBatteriesFromDb(productId: string) {
    this.batteryService.getBatteriesFromDb().subscribe(response => {
      for (const key in response) {
        this.products.push(response[key]);
      }
      const productFound = this.products.find(element => Number(element.id) === Number(productId));
      if (productFound) {
        this.product = productFound;
      }
      this.initEditForm();
    })
  }

  private initEditForm() {
    this.changingForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      imgSrc: new FormControl(this.product.imgSrc),
      category: new FormControl(this.product.category),
      description: new FormControl(this.product.description),
      isActive: new FormControl(this.product.isActive),
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
}