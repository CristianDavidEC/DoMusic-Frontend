import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilesRoutingModule } from './perfiles-routing.module';
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';
import { EliminarPerfilComponent } from './eliminar-perfil/eliminar-perfil.component';
import { MostrarPerfilComponent } from './mostrar-perfil/mostrar-perfil.component';

import { CrearAficionadoComponent } from './perfil-aficionado/crear-aficionado/crear-aficionado.component'

import { CrearBandaComponent } from './perfil-banda/crear-banda/crear-banda.component'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TipoPerfilComponent } from './tipo-perfil/tipo-perfil.component';


@NgModule({
  declarations: [
    CrearPerfilComponent,
    ModificarPerfilComponent,
    EliminarPerfilComponent,
    MostrarPerfilComponent,
    TipoPerfilComponent,
    CrearAficionadoComponent,
    CrearBandaComponent],
  imports: [
    CommonModule,
    PerfilesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PerfilesModule { }
