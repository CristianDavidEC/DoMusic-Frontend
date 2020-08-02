import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoPerfilComponent} from './tipo-perfil/tipo-perfil.component'


const routes: Routes = [
  {
    path: 'tipo-perfil',
    component: TipoPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule { }
