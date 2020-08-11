import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensajesRoutingModule } from './mensajes-routing.module';
import { CrearMensajeComponent } from './crear-mensaje/crear-mensaje.component';
import { EliminarMensajeComponent } from './eliminar-mensaje/eliminar-mensaje.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CrearMensajeComponent, EliminarMensajeComponent, MostrarMensajeComponent],
  imports: [
    CommonModule,
    MensajesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class MensajesModule { }
