import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {
  url = "https://minucarshop-default-rtdb.europe-west1.firebasedatabase.app/battery.json"

  constructor(private http: HttpClient) { }

  getBatteriesFromDb() {
    return this.http.get<Product[]>(this.url);
  }

  addBatteryToDb(newEngine: Product) {
    return this.http.post(this.url, newEngine);
  }

  updateBatteriesInDb(updatedBatteries: Product[]) {
    return this.http.put(this.url, updatedBatteries)
  }


}
