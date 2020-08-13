import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarPerfilComponent } from '../perfiles/modificar-perfil/modificar-perfil.component'
import { VistaPerfilComponent } from '../vista-perfil/vista-perfil.component'

const routes: Routes = [
  {
    path: 'modificar-perfil/:idMusicoProfesional',
    component: ModificarPerfilComponent
  },
  {
    path:'vista',
    component: VistaPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaPerfilRoutingModule { }
