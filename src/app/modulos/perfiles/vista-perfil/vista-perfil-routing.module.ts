import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarPerfilComponent } from '../modificar-perfil/modificar-perfil.component'

const routes: Routes = [
  {
    path: 'modificar-perfil/:idMusicoProfesional',
    component: ModificarPerfilComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaPerfilRoutingModule { }
