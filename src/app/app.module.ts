import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Offer } from './components/Offer/offer.component';
import { Characteristics } from './components/Characteristics/characteristics.component';
import { Prices } from './components/Prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    Offer,
    Characteristics,
    Prices
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
