import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestasRoutingModule } from './encuestas-routing.module';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { MostrarEncuestaComponent } from './mostrar-encuesta/mostrar-encuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CrearEncuestaComponent, MostrarEncuestaComponent],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EncuestasModule { }
