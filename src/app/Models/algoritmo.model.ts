
export class Algoritmo {
    id: number = 0;
    moduloId: number = 0;
    nombre: string = "";
    descripcion: string = "";
    usaLibreria: boolean = false;
    lenguage: string = "";
    comandoEjecucion: string = "";
    urlRepositorio: string = "";
    codServicioAws: string = "";
    idServicioAws: string = "";
    nombreModulo: string = "";
    createAt: string = "";
    tipoAnalisis: string = "OFFLINE";
    libreria: Libreria = new Libreria();
}

class Libreria {
    id: number = 0;
    nombre: string = "";
    documentacion: string = "";
}