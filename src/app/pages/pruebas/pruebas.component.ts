import { Component, OnInit } from '@angular/core';
import { data, settings } from './pruebas';
import { NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { PruebaModalComponent } from './prueba-modal/prueba-modal.component';
import { PruebaService } from '../../services/prueba.service';
import { Prueba } from '../../Models/prueba.model';


@Component({
  selector: 'ngx-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  settingsTable = settings;
  //dataTable = data;
  dataTable;
  icon:string = 'settings-2-outline';
  crear: string = "Crear Prueba";

  constructor(private windowService: NbWindowService,
    private pruebaService : PruebaService) 
  {
    
  }

  get pruebasResult() : Prueba[] {
    return this.pruebaService.pruebas;
  }

  ngOnInit() {

    console.log("=======ANTES======");
    /* this.pruebaService.obtenerPruebas().subscribe(response => {
      this.dataTable = response;
      console.log(this.dataTable)
    }) */
    this.pruebaService.obtenerPruebas();
    console.log("=======DESPUES======");
  }

  

  openWindowForm(e:Event, data? : Object) {

    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
      close: true,
    };
    
    this.windowService.open(PruebaModalComponent, { title: `Configuración de Pruebas`, 
      hasBackdrop: true, 
      closeOnEsc: false,
      buttons: buttonsConfig,
      context : data
    });
  }

  onCustom(event) {

    if(event.action === "editar"){
      this.openWindowForm(event,event.data);
    }
    else{

    }
  }
}
