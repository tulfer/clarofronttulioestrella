import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html'
})
export class Offer implements OnInit {
  @Input() id: string;
  @Input() nombre: string;
  ngOnInit(): void {
    this.id = "";
    this.nombre = "";
  }

}