import { Component, OnInit } from '@angular/core';
import listaOfertas from 'src/assets/datos/ofertas.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ofertas: any =  listaOfertas;
  
  idOferta: string;
  nombreOferta: string;
  caracteristicasOferta: any;
  preciosOferta: any;

  ngOnInit() {
    console.log(this.ofertas[0].versions[0]);
    this.idOferta = this.ofertas[0].versions[0].id;
    this.nombreOferta = this.ofertas[0].versions[0].name;
    this.caracteristicasOferta = this.ofertas[0].versions[0].characteristics;
    this.caracteristicasOferta = this.ofertas[0].versions[0].productOfferingPrices;
  }

  mostrarOferta(item:string) {
    
    this.ofertas.forEach(oferta => {
      
      let idOferta = oferta.versions[0].id;
      let nombreOferta = oferta.versions[0].name;
      let caracteristicasOferta = oferta.versions[0].characteristics;
      let preciosOferta = oferta.versions[0].productOfferingPrices;
      if (idOferta.trim() == item.trim()) {
        this.idOferta = idOferta;
        this.nombreOferta = nombreOferta;
        this.caracteristicasOferta = caracteristicasOferta;
        this.preciosOferta = preciosOferta;
      }
    });
  }
}
