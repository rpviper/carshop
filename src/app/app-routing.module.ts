import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AxleComponent } from './axle/axle.component';
import { BatteryShowComponent } from './battery-show/battery-show.component';
import { BatteryComponent } from './battery/battery.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { EngineShowComponent } from './engine-show/engine-show.component';
import { EngineComponent } from './engine/engine.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { TransmissionComponent } from './transmission/transmission.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "engine", component: EngineComponent},
  {path: "battery", component: BatteryComponent},
  {path: "transmission", component: TransmissionComponent},
  {path: "axle", component: AxleComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "faq", component: FaqComponent},
  {path: "cart", component: CartComponent},
  {path: "engine-show/:productId", component: EngineShowComponent},
  {path: "battery-show/:productId", component: BatteryShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
