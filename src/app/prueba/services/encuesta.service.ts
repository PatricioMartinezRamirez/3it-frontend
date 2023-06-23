import { Injectable } from "@angular/core";
import { Resultado, Formulario, Genero } from '../interfaces/encuesta';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from "rxjs";



@Injectable()
export class EncuestaService{

    private url: string = 'http://localhost:8080';
    public _resultados: Resultado[] = [ ];
 
    constructor(private http: HttpClient) {
        this.obtenerEncuestas().subscribe(
            result => {
                this._resultados = result;
            }
        );
        
    }

    enviarEncuesta( formulario: Formulario):Observable<Formulario>{

        const url = `${this.url}/encuesta/guardar-encuesta`;
        return this.http.post<Formulario>(url, formulario);
    }

    obtenerGenero():Observable<Genero[]>{
        const url = `${this.url}/genero/listar-genero`;
        return this.http.get<Genero[]>(url);

    }

    obtenerEncuestas():Observable<Resultado[]>{
        const url = `${this.url}/encuesta/listar-encuestas`;
        return this.http.get<Resultado[]>(url);

    }
}