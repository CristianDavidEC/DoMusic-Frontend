import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesRoutingModule } from './perfiles-routing.module';
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';
import { EliminarPerfilComponent } from './eliminar-perfil/eliminar-perfil.component';
import { MostrarPerfilComponent } from './mostrar-perfil/mostrar-perfil.component';


@NgModule({
  declarations: [CrearPerfilComponent, ModificarPerfilComponent, EliminarPerfilComponent, MostrarPerfilComponent],
  imports: [
    CommonModule,
    PerfilesRoutingModule
  ]
})
export class PerfilesModule { }
