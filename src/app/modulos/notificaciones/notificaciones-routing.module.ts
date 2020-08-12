import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarNotificacionComponent } from './mostrar-notificacion/mostrar-notificacion.component';

const routes: Routes = [
  {
    path: 'listar-notificaciones',
    component: MostrarNotificacionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesRoutingModule { }
