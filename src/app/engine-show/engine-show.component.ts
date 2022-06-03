import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartProduct } from '../models/cart.model';
import { Product } from '../models/product.model';
import { EngineService } from '../services/engine.service';

@Component({
  selector: 'app-engine-show',
  templateUrl: './engine-show.component.html',
  styleUrls: ['./engine-show.component.css']
})
export class EngineShowComponent implements OnInit {
  engineItems: Product[] = []
  products: Product[] = [];
  product!: Product
  changingForm!: FormGroup
  

  constructor(private engineService: EngineService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
           ) { }

  ngOnInit(): void {
    localStorage.getItem("language");
    const productId = this.route.snapshot.paramMap.get("productId");
    if (productId) {
      this.getEnginesFromDb(productId);
    } 
  }

  private getEnginesFromDb(productId: string) {
    this.engineService.getEnginesFromDb().subscribe(response => {
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
        
    // this.engineService.cartChanged.next(true);
  }
}
  


