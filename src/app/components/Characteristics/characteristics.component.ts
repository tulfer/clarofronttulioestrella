import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html'
})
export class Characteristics implements OnInit {
  @Input() caracteristicas: any;
  ngOnInit(): void {
    this.caracteristicas = [];
  }

}