import { Component, Inject, Injectable, TemplateRef, ViewChild } from '@angular/core';
import { settings, data } from './algoritmos';
import { AlgortimoModalComponent } from './algoritmoModal/algoritmoModal.component';
import { NbWindowService } from '@nebular/theme';

export interface INameButton{
  crear:string,
  ver:string,

}




@Component({
  selector: 'ngx-algoritmos',
  templateUrl: './algoritmos.component.html',
  styleUrls: ['./algoritmos.component.scss'],
})

@Injectable()
export class AlgoritmosComponent implements INameButton{

  settingsTable = settings;
  dataTable = data;
  verEjemplo:boolean= false;
  icon:string = 'settings-2-outline';
  crear: string = "Configurar Algoritmos";
  ver: string = "Ejemplos Algoritmos";
  name:INameButton = {
    crear: this.crear,
    ver: this.ver
  }

  constructor(private windowService: NbWindowService) {

  }

  openWindowForm(e:Event) {
    this.windowService.open(AlgortimoModalComponent, { title: `Configuración de Algoritmos`, hasBackdrop: true, closeOnEsc: false });
  }

  onCustom(event) {
    if(event.action === "editar"){
      this.openWindowForm(event);
    }else if(event.action === "ver"){
      this.verEjemplo = true;
    }else{
     // this.windowService.open(, { title: `Configuración de Algoritmos`, hasBackdrop: true, closeOnEsc: false });
    }
    //alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`)
  }
}
