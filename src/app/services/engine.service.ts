import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class EngineService {
  url = "https://minucarshop-default-rtdb.europe-west1.firebasedatabase.app/engine.json"

  constructor(private http: HttpClient) { }

  getEnginesFromDb() {
    return this.http.get<Product[]>(this.url);
  }

  addEngineToDb(newEngine: Product) {
    return this.http.post(this.url, newEngine);
  }

  updateEnginesInDb(updatedEngines: Product[]) {
    return this.http.put(this.url, updatedEngines)
  }

}
