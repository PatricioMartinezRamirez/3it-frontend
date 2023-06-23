import { Component, Input, OnInit } from '@angular/core';
import { Formulario, Genero } from '../../interfaces/encuesta';
import { EncuestaService } from '../../services/encuesta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

   listaGenero: Genero[] = [];

  nuevo : Formulario = {
    email: '',
    genero: ''
  }
  
  constructor( private encuestaService: EncuestaService) { }

  ngOnInit(): void {
    this.encuestaService.obtenerGenero().subscribe(
        result => {
          this.listaGenero = result;
        }
    );

  }

  validacion(){
    return this.nuevo.email.length > 0 ? false: true;
  }

  enviar():void {
    if(this.nuevo.email?.trim().length === 0){return;}
    console.log(this.nuevo);
    this.encuestaService.enviarEncuesta(this.nuevo).subscribe(
      result => { 
        console.log(result);
        this.encuestaService.obtenerEncuestas().subscribe(
          response => {
            this.encuestaService._resultados = response;
          }
        );
      },
      async err =>{
      }
      
    );
    this.nuevo = {
      email: '',
      genero: ''
    }
    
  }

}
