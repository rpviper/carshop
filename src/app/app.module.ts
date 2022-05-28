import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EngineComponent } from './engine/engine.component';
import { BatteryComponent } from './battery/battery.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { AxleComponent } from './axle/axle.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EngineComponent,
    BatteryComponent,
    TransmissionComponent,
    AxleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
