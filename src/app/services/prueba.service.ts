import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Prueba } from '../Models/prueba.model';
import { Respuesta } from '../Models/respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  public pruebas : Prueba[] = [];

  private urlEndPoint: string = environment.UrlApiGateway;

  

  constructor(private http: HttpClient, private router: Router) { }

  async obtenerPruebas() {
    return this.http.get(`${this.urlEndPoint}/pruebas`).pipe(
      map(response => {
        let respuesta = response as Respuesta;
        let pruebas: Prueba[] = [];
        if (respuesta.statusCode === 400) {
          return pruebas;
        }
        console.log("ESTOY EN EL MÉTODO",respuesta)
        pruebas = response as Prueba[];
        return pruebas.map(prueba => {
          prueba.observacion = prueba.observacion.toUpperCase();
          prueba.Observacion = prueba.observacion;
          prueba.Algoritmo = prueba.nombreAlgoritmo;
          prueba.Modulo = prueba.nombreModulo;
          prueba.FechaCreacion = prueba.createAt;
          return prueba;
        });
      })
    ).toPromise();
  }
}
