import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  templateUrl: './algoritmoModal.component.html',
  styleUrls: ['./algoritmoModal.component.scss'],
})
export class AlgortimoModalComponent {
  label:Object = {

  }
  optionsAlgoritmos = [{value:"1", name:"Algoritmo de Regresión"}, {value:"2", name:"Algoritmo de Árbol de Desición",}];
  optionsModulo = [{value:"1", name:"Aálisis de imágenes"}, {value:"2", name:"Análisis de Trayectorias"}, {value:"2", name:"Parametrización"}];
  optionsServicios = [{value:"1", name:"Máquina EC2"}];
  optionsAnalisis = [{value:"1", name:"Offline"}, {value:"2", name:"Online"}]
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
