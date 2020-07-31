import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensajesRoutingModule } from './mensajes-routing.module';
import { CrearMensajeComponent } from './crear-mensaje/crear-mensaje.component';
import { EliminarMensajeComponent } from './eliminar-mensaje/eliminar-mensaje.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';


@NgModule({
  declarations: [CrearMensajeComponent, EliminarMensajeComponent, MostrarMensajeComponent],
  imports: [
    CommonModule,
    MensajesRoutingModule
  ]
})
export class MensajesModule { }
