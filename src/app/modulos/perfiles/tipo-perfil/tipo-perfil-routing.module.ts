import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPerfilComponent } from '../crear-perfil/crear-perfil.component'
import { CrearAficionadoComponent } from '../../perfiles/perfil-aficionado/crear-aficionado/crear-aficionado.component'

const routes: Routes = [
  {
    path: 'crear-perfil',
    component: CrearPerfilComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoPerfilRoutingModule { }
