import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostarComentariosComponent } from './mostar-comentarios/mostar-comentarios.component';

const routes: Routes = [
  {
    path: 'listar-comentarios',
    component: MostarComentariosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentariosRoutingModule { }
