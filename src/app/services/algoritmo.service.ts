import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Algoritmo } from '../Models/algoritmo.model';
import { Prueba } from '../Models/prueba.model';
import { map } from 'rxjs/operators';
import { Respuesta } from '../Models/respuesta.model';
import { Modulo } from '../Models/modulo.model';
import { Ejemplo } from '../Models/ejemplo.model';
import { Result } from '../Models/result.model';

@Injectable({
  providedIn: 'root'
})
export class AlgoritmoService {

  private urlEndPointParametrizacion: string = environment.UrlApiGatewayParametrizacion;
  private urlEndPointAlgoritmo: string = environment.UrlApiGatewayAlgoritmo;

  constructor(private http: HttpClient, private router: Router) { }

  listarModulos(): Observable<Modulo[]> {
    return this.http.get(`${this.urlEndPointParametrizacion}/modulos`).pipe(
      map(response => {
        let modulos = response as Modulo[];
        return modulos;
      })
    );
  }

  listarAlgoritmos(prueba: Prueba): Observable<Algoritmo[]> {
    return this.http.post(`${this.urlEndPointAlgoritmo}/listaralgoritmos`,prueba).pipe(
      map(response => {
        let respuesta = response as Respuesta;
        let algoritmos:Algoritmo[] = [];

        if(respuesta.statusCode === 400){
          return algoritmos;
        }

        algoritmos = response as Algoritmo[];
        return algoritmos.map(prueba => {
          return prueba;
        });
      })
    );
  }

  listarEjemplos(prueba: Prueba): Observable<Ejemplo[]> {
    return this.http.post(`${this.urlEndPointAlgoritmo}/listarejemplos`,prueba).pipe(
      map(response => {
        let respuesta = response as Respuesta;
        let ejemplos:Ejemplo[] = [];

        if(respuesta.statusCode === 400){
          return ejemplos;
        }

        ejemplos = response as Ejemplo[];

        return ejemplos.map(ej => {
          return ej;
        });
      })
    );
  }

  obtenerResultadosPrueba(request : any): Observable<Result[]> {
    return this.http.post(`${this.urlEndPointParametrizacion}/results`,request).pipe(
      map(response => {
        
        let respuesta = response as Respuesta;
        let results:Result[] = [];

        if(respuesta.statusCode === 400){
          return results;
        }

        results = response as Result[];
        return results.map(result => {
          return result;
        });
      }
      )
    );
  }
}
