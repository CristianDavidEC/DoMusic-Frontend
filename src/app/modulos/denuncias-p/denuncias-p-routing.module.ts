import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrerDenunciaComponent} from './crer-denuncia/crer-denuncia.component'
import { MostrarDenunciaComponent} from './mostrar-denuncia/mostrar-denuncia.component'
import { AutAdminGuard } from 'src/app/guardianes/aut-admin.guard';

const routes: Routes = [
  {
    path: 'denuncias/:idPublicacion',
    component: CrerDenunciaComponent
  },
  {
    path: 'listar-denuncias',
    component: MostrarDenunciaComponent,
    canActivate: [AutAdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DenunciasPRoutingModule { }
