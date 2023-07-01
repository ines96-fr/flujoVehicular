import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { FormBuilder, FormGroup } from '@angular/forms';
import { data, dataModal, settings, settingsModal } from '../pruebas';
import { Router } from "@angular/router"
import { AlgoritmoService } from '../../../services/algoritmo.service';
import { Algoritmo } from '../../../Models/algoritmo.model';
import { Modulo } from '../../../Models/modulo.model';
import { Prueba } from '../../../Models/prueba.model';
import { PruebaService } from '../../../services/prueba.service';

@Component({
  selector: 'ngx-prueba-modal',
  templateUrl: './prueba-modal.component.html',
  styleUrls: ['./prueba-modal.component.scss']
})
export class PruebaModalComponent {

  data: Prueba = null;
  public formGroup: FormGroup;
  settingsTable = settingsModal;
  dataTable = dataModal;
  NombreBoton = "Ejecutar"

  AlgoritmoId;
  EjemploId;
  ModuloId;

  optionsModulo = [];
  optionsAlgoritmo = [];
  optionsEjemplos = [];

  constructor(public windowRef: NbWindowRef,
    private formBuilder: FormBuilder,
    private router: Router,
    private algoritmoService : AlgoritmoService,
    private pruebaService : PruebaService) {

      this.data = new Prueba();
      
      if(this.windowRef.config.context){
        this.data = this.windowRef.config.context as Prueba;
      }
      else{

      }

      //console.log(this.data);

  }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      nombre: this.data?.Observacion,
      modulo: this.data?.moduloId?.toString(),
      ejemplo: "0",
      algoritmo : this.data?.algoritmoId?.toString()
    });

    this.obtenerModulos();
    this.obtenerPrueba(this.data.id);

  }

  obtenerPrueba(id) {
    this.pruebaService.obtenerPrueba(id).subscribe(result => {
      this.AlgoritmoId = result.algoritmoId;
      this.EjemploId = result.ejemploId;
      this.ModuloId = result.moduloId;

      console.log(this.EjemploId,this.AlgoritmoId);

      this.optionsAlgoritmo.push({value : result.algoritmo?.id, name : result.algoritmo?.descripcion});
      this.optionsEjemplos.push({value : result.ejemplo?.id, name : result.ejemplo?.descripcion});

      console.log(this.optionsAlgoritmo);
      console.log(this.optionsEjemplos);

      this.formGroup.get("modulo").setValue(this.ModuloId.toString());
      this.formGroup.get("algoritmo").setValue(this.AlgoritmoId.toString());
      this.formGroup.get("ejemplo").setValue(this.EjemploId.toString());

    });
  }

  obtenerAlgoritmos() {
    this.algoritmoService.listarAlgoritmos(this.data).subscribe(result => {
      this.optionsAlgoritmo = [];
      result?.forEach(algoritmo => {
        this.optionsAlgoritmo.push({value : algoritmo?.id?.toString(), name : algoritmo.nombre})
      });

    });
  }

  

  obtenerModulos() {
    this.algoritmoService.listarModulos().subscribe(result => {
      this.optionsModulo = [];

      result?.forEach(modulo => {
        this.optionsModulo.push({value : modulo?.id?.toString(), name : modulo.nombre})
      });
    });
  }

  obtenerEjemplos() {
    this.algoritmoService.listarEjemplos(this.data).subscribe(result => {
      this.optionsEjemplos = [];
      result?.forEach(ejemplo => {
        this.optionsEjemplos.push({value : ejemplo?.id?.toString(), name : ejemplo.descripcion})
      });
    });
  }

  moduloSeleccionado(opcion : string) {
    this.data.moduloId = +opcion;
    if(opcion != "0"){
      this.obtenerAlgoritmos();
    }
  }

  algoritmoSeleccionado(opcion : string) {
    this.data.algoritmoId = +opcion;
    if(opcion != "0"){
      this.obtenerEjemplos();
    }
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
