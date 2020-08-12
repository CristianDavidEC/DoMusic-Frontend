import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearAdministradorComponent } from './crear-administrador/crear-administrador.component';

const routes: Routes = [
  {
    path: 'crear-administradores',
    component: CrearAdministradorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
