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

  private urlEndPoint: string = environment.UrlApiGatewayParametrizacion;

  constructor(private http: HttpClient, private router: Router) { }

  obtenerPruebas() : Observable<Array<Prueba>> {
    return this.http.get(`${this.urlEndPoint}/pruebas`).pipe(
      map(response => {
        let respuesta = response as Respuesta;
        let pruebas: Prueba[] = [];
        if (respuesta.statusCode === 400) {
          return pruebas;
        }
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
    );
  }

  obtenerPrueba(id: number): Observable<Prueba> {
    return this.http.get<Prueba>(`${this.urlEndPoint}/cabpruebas/${id}`).pipe();
  }
}
