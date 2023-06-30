import { Algoritmo } from "./algoritmo.model";
import { Ejemplo } from "./ejemplo.model";

export class Prueba {

    id: number = 0;
    observacion: string = "";
    nombreModulo: string = "";
    nombreAlgoritmo: string = "";
    moduloId: number = 0;
    userId: number = 1;
    algoritmoId: number = 0;
    ejemploId: number = 0;
    createAt: string = "";
    estado: string = "R";
    ejemplo!: Ejemplo;
    algoritmo!: Algoritmo;

    Modulo: string = "";
    Algoritmo: string = "";
    Observacion: string = "";
    FechaCreacion: string = "";
}