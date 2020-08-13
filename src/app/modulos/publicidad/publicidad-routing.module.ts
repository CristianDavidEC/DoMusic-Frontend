import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarPublicidadComponent } from './mostrar-publicidad/mostrar-publicidad.component';
import { CrearPublicidadComponent } from './crear-publicidad/crear-publicidad.component';
import { ModificarPublicidadComponent } from './modificar-publicidad/modificar-publicidad.component';
import { AutAdminGuard } from 'src/app/guardianes/aut-admin.guard';

const routes: Routes = [
{
  path: 'listar-publicidades',
  component: MostrarPublicidadComponent
},
{
  path: 'crear-publicidades',
  component: CrearPublicidadComponent,
  canActivate: [AutAdminGuard]
},
{
  path: 'modificar-publicidades/:idPublicidad',
  component: ModificarPublicidadComponent,
  canActivate: [AutAdminGuard]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicidadRoutingModule { }
