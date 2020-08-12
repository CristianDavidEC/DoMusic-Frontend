import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarPublicidadComponent } from './mostrar-publicidad/mostrar-publicidad.component';

const routes: Routes = [
  {
  path: 'listar-publicidades',
  component: MostrarPublicidadComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicidadRoutingModule { }
