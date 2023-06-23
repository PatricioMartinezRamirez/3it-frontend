import { Component, OnInit } from '@angular/core';
import { Resultado } from '../../interfaces/encuesta';
import { EncuestaService } from '../../services/encuesta.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {


  constructor(private encuestaService: EncuestaService) {

   }

  get resultados(){
    return this.encuestaService._resultados;
  }
  ngOnInit(): void {

  }

}
