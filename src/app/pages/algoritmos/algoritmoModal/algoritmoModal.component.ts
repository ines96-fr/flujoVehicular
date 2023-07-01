import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbWindowRef } from '@nebular/theme';
import { optionsAlgoritmos, optionsModulo, optionsServicios, optionsAnalisis } from "../algoritmos";
import { IOptions } from "../../../Models/shared.model";

@Component({
  templateUrl: './algoritmoModal.component.html',
  styleUrls: ['./algoritmoModal.component.scss'],
})

export class AlgortimoModalComponent {

  public formGroup: FormGroup;
  data: any = null;
  accion:any = "";
  optionsAlgoritmos:IOptions[] = optionsAlgoritmos;
  optionsModulo:IOptions[] = optionsModulo;
  optionsServicios:IOptions[] = optionsServicios;
  optionsAnalisis:IOptions[] = optionsAnalisis;

  constructor(public windowRef: NbWindowRef, private formBuilder: FormBuilder) {
    this.data = windowRef.config.context;
    this.accion = windowRef.config.context;
    console.log(this.data)

    this.formGroup = this.formBuilder.group({
      nombre: this.data?.Descripcion,
      modulo: "1",
      ejemplo: "1"
    });

  }




  close() {
    this.windowRef.close();
  }
}
