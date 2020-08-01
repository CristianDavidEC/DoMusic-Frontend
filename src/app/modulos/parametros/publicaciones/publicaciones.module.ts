import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { ModificarPublicacionComponent } from './modificar-publicacion/modificar-publicacion.component';
import { EliminarPublicacionComponent } from './eliminar-publicacion/eliminar-publicacion.component';
import { MostrarPublicacionComponent } from './mostrar-publicacion/mostrar-publicacion.component';


@NgModule({
  declarations: [CrearPublicacionComponent, ModificarPublicacionComponent, EliminarPublicacionComponent, MostrarPublicacionComponent],
  imports: [
    CommonModule,
    PublicacionesRoutingModule
  ]
})
export class PublicacionesModule { }
