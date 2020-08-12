import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearMensajeComponent} from './crear-mensaje/crear-mensaje.component';
import { EliminarMensajeComponent} from './eliminar-mensaje/eliminar-mensaje.component';
import { MostrarMensajeComponent} from './mostrar-mensaje/mostrar-mensaje.component';


const routes: Routes = [
  {
    path: 'crear-mensajes/:idReceptor',
    component: CrearMensajeComponent
  },
  {
    path: 'eliminar-mensajes',
    component: EliminarMensajeComponent
  },
  {
    path: 'mostrar-mensajes',
    component: MostrarMensajeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensajesRoutingModule { }
