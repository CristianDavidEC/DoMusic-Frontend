import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoPerfilComponent } from './tipo-perfil/tipo-perfil.component'
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component'
import { CrearAficionadoComponent } from './perfil-aficionado/crear-aficionado/crear-aficionado.component'
import { from } from 'rxjs';
import { CrearBandaComponent } from './perfil-banda/crear-banda/crear-banda.component';

const routes: Routes = [
  {
    path: 'tipo-perfil',
    component: TipoPerfilComponent
  },
  {
    path: 'crear-perfil',
    component: CrearPerfilComponent
  },
  {
    path: 'crear-aficionado',
    component: CrearAficionadoComponent
  },
  {
    path: 'crear-banda',
    component: CrearBandaComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule { }
