import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data, dataModal, settings, settingsModal } from '../pruebas';
import { Router } from "@angular/router"

@Component({
  selector: 'ngx-prueba-modal',
  templateUrl: './prueba-modal.component.html',
  styleUrls: ['./prueba-modal.component.scss']
})
export class PruebaModalComponent {

  data: any = null;
  public formGroup: FormGroup;
  settingsTable = settingsModal;
  dataTable = dataModal;
  NombreBoton = "Ejecutar"

  optionsEjemplos = [{ value: "1", name: "Conteo vehicular" }, 
    { value: "2", name: "Aforo en negocio", }
  ];
  
  optionsModulo = [{ value: "1", name: "Análisis de trayectorias" }, 
    { value: "2", name: "Análisis de Imagenes" }, 
    { value: "2", name: "Vídeo en vivo" }
  ];

  constructor(public windowRef: NbWindowRef,
    private formBuilder: FormBuilder,
    private router: Router) {

    this.data = windowRef.config.context;

    console.log(this.data)

    this.formGroup = this.formBuilder.group({
      nombre: this.data?.Descripcion,
      modulo: "1",
      ejemplo: "1"
    });

  }

  onCustom(event) {
    if (event.action === "editar") {
      const url = this.router.serializeUrl(this.router.createUrlTree(['dashboard']));
      window.open(url, '_blank');
    }
  }

  onSubmit(checkoutForm) {
    console.log(checkoutForm)
  }

  close() {
    this.windowRef.close();
  }
}
