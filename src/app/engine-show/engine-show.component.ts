import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../models/product.model';
import { EngineService } from '../services/engine.service';

@Component({
  selector: 'app-engine-show',
  templateUrl: './engine-show.component.html',
  styleUrls: ['./engine-show.component.css']
})
export class EngineShowComponent implements OnInit {
  engineItems: Product[] = []
  url = "https://minucarshop-default-rtdb.europe-west1.firebasedatabase.app/engine.json"
  products: Product[] = [];
  product: any
  form: any

  constructor(private engineService: EngineService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
   const engineName = location.href.split("engine-show/")[1];
   this.engineService.getEnginesFromDb().subscribe(response => {
    //  const newArray = [];
    for (const key in response) {
      this.products.push(response[key]);
    }
    // this.products = newArray;
    this.product = this.products.find(element => element.name === engineName); 
    this.form = new FormGroup({
      name: new FormControl(this.product.name)
    })
  })
  }

}
