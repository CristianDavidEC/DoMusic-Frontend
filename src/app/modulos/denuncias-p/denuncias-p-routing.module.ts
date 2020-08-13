import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrerDenunciaComponent} from './crer-denuncia/crer-denuncia.component'
import { MostrarDenunciaComponent} from './mostrar-denuncia/mostrar-denuncia.component'

const routes: Routes = [
  {
    path: 'denuncias/:idPublicacion',
    component: CrerDenunciaComponent
  },
  {
    path: 'listar-denuncias',
    component: MostrarDenunciaComponent
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DenunciasPRoutingModule { }
