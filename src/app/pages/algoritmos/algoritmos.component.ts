import { Component, Inject, Injectable, TemplateRef, ViewChild } from '@angular/core';
import { settings, data } from './algoritmos';
import { AlgortimoModalComponent } from './algoritmoModal/algoritmoModal.component';
import { NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { MessageDeleteComponent } from '../../@theme/components/messageDelete/messageDelete.component';

@Component({
  selector: 'ngx-algoritmos',
  templateUrl: './algoritmos.component.html',
  styleUrls: ['./algoritmos.component.scss'],
})

@Injectable()
export class AlgoritmosComponent{

  settingsTable = settings;
  dataTable = data;
  verEjemplo:boolean= false;
  buttons: NbWindowControlButtonsConfig = {
    minimize: false,
    maximize: false,
    fullScreen: false,
    close: true,
  };

  constructor(private windowService: NbWindowService) {

  }

  openWindowForm(e:Event) {
    console.log(e)
    this.windowService.open(AlgortimoModalComponent, { title: `Configuración de Algoritmos`, hasBackdrop: true, closeOnEsc: false, buttons:this.buttons, context : ""});
  }

  onCustom(event) {
    if(event.action === "editar"){
      this.openWindowForm(event);
    }else if(event.action === "ver"){
      this.verEjemplo = true;
    }else{
      //this.openWindowForm(event);
     this.windowService.open(AlgortimoModalComponent, { hasBackdrop: true, closeOnEsc: false, buttons:this.buttons, context : "eliminar"});
    }
    //alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`)
  }
}
