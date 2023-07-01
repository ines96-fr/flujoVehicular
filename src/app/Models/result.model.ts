
export interface Result {
    comando_id:     string;
    estado:         string;
    exitosa:        boolean;
    fecha_creacion: Date;
    fecha_fin:      Date;
    fecha_inicio:   Date;
    id:             number;
    mensaje:        string;
    output:         string[];
    padre_id:       number;
    prueba_id:      number;
}