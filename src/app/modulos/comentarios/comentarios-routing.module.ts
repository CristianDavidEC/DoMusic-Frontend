import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostarComentariosComponent } from './mostar-comentarios/mostar-comentarios.component';
import { CrearComentariosComponent } from './crear-comentarios/crear-comentarios.component';

const routes: Routes = [
  {
    path: 'listar-comentarios/:idPublicacion',
    component: MostarComentariosComponent
  },
  {
    path: 'crear-comentarios/:idPublicacion',
    component: CrearComentariosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentariosRoutingModule { }
