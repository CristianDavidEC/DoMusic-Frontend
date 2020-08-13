import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { CrearDenunciaComponent} from './crear-denuncia/crear-denuncia.component';
import { EliminarDenunciaComponent} from './eliminar-denuncia/eliminar-denuncia.component';
import { MostrarDenunciasComponent} from './mostrar-denuncias/mostrar-denuncias.component';

import { AutAdminGuard} from '../../guardianes/aut-admin.guard'



const routes: Routes = [
  {
    path: 'denuncias',
    component: CrearDenunciaComponent
  },
  {
    path: 'eliminar-denuncias',
    component: EliminarDenunciaComponent,
    canActivate: [AutAdminGuard]
  
  },
  {
    path: 'listar-denuncias',
    component: MostrarDenunciasComponent
  
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class DenunciasRoutingModule { }
