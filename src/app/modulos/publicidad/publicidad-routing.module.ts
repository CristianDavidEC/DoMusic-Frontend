import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarPublicidadComponent } from './mostrar-publicidad/mostrar-publicidad.component';
import { CrearPublicidadComponent } from './crear-publicidad/crear-publicidad.component';
import { ModificarPublicidadComponent } from './modificar-publicidad/modificar-publicidad.component';

const routes: Routes = [
{
  path: 'listar-publicidades',
  component: MostrarPublicidadComponent
},
{
  path: 'crear-publicidades',
  component: CrearPublicidadComponent
},
{
  path: 'modificar-publicidades',
  component: ModificarPublicidadComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicidadRoutingModule { }
