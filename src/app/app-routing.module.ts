import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AxleComponent } from './axle/axle.component';
import { BatteryComponent } from './battery/battery.component';
import { EngineComponent } from './engine/engine.component';
import { HomeComponent } from './home/home.component';
import { TransmissionComponent } from './transmission/transmission.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "engine", component: EngineComponent},
  {path: "battery", component: BatteryComponent},
  {path: "transmission", component: TransmissionComponent},
  {path: "axle", component: AxleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
