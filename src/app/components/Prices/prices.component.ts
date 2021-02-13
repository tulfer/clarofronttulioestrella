import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html'
})
export class Prices implements OnInit {
  @Input() precios: any;
  ngOnInit(): void {
    this.precios = [];
  }

}