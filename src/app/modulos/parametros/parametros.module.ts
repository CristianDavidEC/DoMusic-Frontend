import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

import { ParametrosRoutingModule } from './parametros-routing.module';
import { MostrarPublicacionComponent } from './publicaciones/mostrar-publicacion/mostrar-publicacion.component';
import { MostrarNotificacionComponent } from './notificaciones/mostrar-notificacion/mostrar-notificacion.component';


@NgModule({
  declarations: [
    MostrarPublicacionComponent,
    MostrarNotificacionComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ParametrosModule { }
