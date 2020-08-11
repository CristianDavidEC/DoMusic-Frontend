import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoPerfilComponent } from './tipo-perfil/tipo-perfil.component'
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component'
import { CrearAficionadoComponent } from './perfil-aficionado/crear-aficionado/crear-aficionado.component'
import { from } from 'rxjs';
import { CrearBandaComponent } from './perfil-banda/crear-banda/crear-banda.component';
import { MostrarPerfilComponent} from './mostrar-perfil/mostrar-perfil.component'
import { MostrarAficionadoComponent} from './perfil-aficionado/mostrar-aficionado/mostrar-aficionado.component'
import { MostrarBandaComponent} from './perfil-banda/mostrar-banda/mostrar-banda.component'
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';
import { VistaPerfilComponent } from './vista-perfil/vista-perfil.component'

const routes: Routes = [
  {
    path: 'tipo-perfil',
    component: TipoPerfilComponent
  },
  {
    path: 'crear-perfil',
    component: CrearPerfilComponent
  },
  {
    path: 'modificar-perfil/:idMusicoProfesional',
    component: ModificarPerfilComponent
  },
  {
    path: 'crear-aficionado',
    component: CrearAficionadoComponent
  },
  {
    path: 'crear-banda',
    component: CrearBandaComponent
  },
  {
    path: 'profesionales',
    component: MostrarPerfilComponent
  },
  {
    path: 'aficionados',
    component: MostrarAficionadoComponent
  },
  {
    path: 'bandas',
    component: MostrarBandaComponent
  },
  {
    path: 'vista-perfil',
    component: VistaPerfilComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule { }
