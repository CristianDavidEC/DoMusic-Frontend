import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

import { ParametrosRoutingModule } from './parametros-routing.module';
import { MostrarPublicacionComponent } from './publicaciones/mostrar-publicacion/mostrar-publicacion.component';
import { MostrarNotificacionComponent } from './notificaciones/mostrar-notificacion/mostrar-notificacion.component';
import { CrearPublicacionComponent} from './publicaciones/crear-publicacion/crear-publicacion.component'

import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    MostrarPublicacionComponent,
    MostrarNotificacionComponent,
    CrearPublicacionComponent
    
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class ParametrosModule { }
