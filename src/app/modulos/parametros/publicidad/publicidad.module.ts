import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicidadRoutingModule } from './publicidad-routing.module';
import { CrearPublicidadComponent } from './crear-publicidad/crear-publicidad.component';
import { ModificarPublicidadComponent } from './modificar-publicidad/modificar-publicidad.component';
import { MostrarPublicidadComponent } from './mostrar-publicidad/mostrar-publicidad.component';


@NgModule({
  declarations: [CrearPublicidadComponent, ModificarPublicidadComponent, MostrarPublicidadComponent],
  imports: [
    CommonModule,
    PublicidadRoutingModule
  ]
})
export class PublicidadModule { }
