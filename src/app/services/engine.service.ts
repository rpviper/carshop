import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Engine } from '../models/engine.models';


@Injectable({
  providedIn: 'root'
})
export class EngineService {
  url = "https://minucarshop-default-rtdb.europe-west1.firebasedatabase.app/engine.json"

  constructor(private http: HttpClient) { }

  getEnginesFromDb() {
    return this.http.get<Engine[]>(this.url);
  }

  addEngineToDb(newEngine: Engine) {
    return this.http.post(this.url, newEngine);
  }

  updateEnginesInDb(updatedEngines: Engine[]) {
    return this.http.put(this.url, updatedEngines)
  }

}
