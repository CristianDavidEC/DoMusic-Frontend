import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { MostrarPublicacionComponent } from './mostrar-publicacion/mostrar-publicacion.component';

const routes: Routes = [
  
  {
    path: 'publicaciones',
    component: CrearPublicacionComponent
  },
  {
  path: 'listar-publicaciones',
  component: MostrarPublicacionComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
