import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicacionesModule} from './mostrar-publicacion/'

const routes: Routes = [
  {
    path: 'publicaciones',
    component: MostrarPublicacionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
