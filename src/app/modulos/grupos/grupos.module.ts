import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GruposRoutingModule } from './grupos-routing.module';
import { CrearGrupoComponent } from './crear-grupo/crear-grupo.component';
import { ModificarGrupoComponent } from './modificar-grupo/modificar-grupo.component';
import { EliminarGrupoComponent } from './eliminar-grupo/eliminar-grupo.component';
import { MostrarGrupoComponent } from './mostrar-grupo/mostrar-grupo.component';


@NgModule({
  declarations: [CrearGrupoComponent, ModificarGrupoComponent, EliminarGrupoComponent, MostrarGrupoComponent],
  imports: [
    CommonModule,
    GruposRoutingModule
  ]
})
export class GruposModule { }
