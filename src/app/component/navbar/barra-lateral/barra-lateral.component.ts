import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {
  accion_menu!:String;
  constructor() { }

  ngOnInit(): void {
  }

  publicarVehiculo():void{
    console.log('saludos-------------')
    this.accion_menu='publicar';
  }

}
