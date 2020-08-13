import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { MostrarPublicacionComponent } from './mostrar-publicacion/mostrar-publicacion.component';
import { ModificarPublicacionComponent } from './modificar-publicacion/modificar-publicacion.component';

const routes: Routes = [
  
  {
    path: 'crear-publicaciones',
    component: CrearPublicacionComponent
  },
  {
  path: 'listar-publicaciones',
  component: MostrarPublicacionComponent
  },
  {
    path: 'modificar-publicaciones/:idPublicacion',
    component: ModificarPublicacionComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacionesRoutingModule { }
