import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilAficionadoRoutingModule } from './perfil-aficionado-routing.module';
import { CrearAficionadoComponent } from './crear-aficionado/crear-aficionado.component';
import { EliminarAficionadoComponent } from './eliminar-aficionado/eliminar-aficionado.component';
import { ModificarAficionadoComponent } from './modificar-aficionado/modificar-aficionado.component';
import { MostrarAficionadoComponent } from './mostrar-aficionado/mostrar-aficionado.component';


@NgModule({
  declarations: [CrearAficionadoComponent, EliminarAficionadoComponent, ModificarAficionadoComponent, MostrarAficionadoComponent],
  imports: [
    CommonModule,
    PerfilAficionadoRoutingModule
  ]
})
export class PerfilAficionadoModule { }
