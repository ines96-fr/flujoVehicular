import { AfterViewInit, Component, OnInit } from '@angular/core';
import { data, settings } from './pruebas';
import { NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { PruebaModalComponent } from './prueba-modal/prueba-modal.component';
import { PruebaService } from '../../services/prueba.service';
import { Prueba } from '../../Models/prueba.model';
import { LocalDataSource } from 'ng2-smart-table';
import { ISettingsTables } from '../../@theme/components';


@Component({
  selector: 'ngx-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent implements OnInit {

  settingsTable = settings;
  dataTable : Array<Prueba> = [];
  icon:string = 'settings-2-outline';
  crear: string = "Crear Prueba";

  source: LocalDataSource;  
  settings:ISettingsTables; 

  constructor(private windowService: NbWindowService,
    private pruebaService : PruebaService) 
  {
    this.pruebaService.obtenerPruebas().subscribe((data : Array<Prueba>) => {
      this.dataTable = data;
    });
  }
  

  ngOnInit() {

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
    //console.log(event.data)
    if(event.action === "editar"){
      this.openWindowForm(event,event.data);
    }
    else{

    }
  }
}
