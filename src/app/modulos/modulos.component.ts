import { Component, OnInit } from '@angular/core';
import { MODULOS } from './modulos';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
})
export class ModulosComponent implements OnInit {

  public modulos: {};

  constructor() { }

  ngOnInit() {
    this.modulos = MODULOS
  }

}
