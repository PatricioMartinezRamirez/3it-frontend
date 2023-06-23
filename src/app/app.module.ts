import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './prueba/componentes/formulario/formulario.component';
import { ResultadoComponent } from './prueba/componentes/resultado/resultado.component';
import { EncuestaService } from './prueba/services/encuesta.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [EncuestaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
