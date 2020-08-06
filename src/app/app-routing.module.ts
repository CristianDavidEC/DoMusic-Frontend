import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';
import { CrearPerfilComponent} from './modulos/perfiles/crear-perfil/crear-perfil.component'

const routes: Routes = [
  {
    path:'home',
    pathMatch:'full',
    component: DefaultComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  
  {
    path: 'seguridad',
    loadChildren: () => import ('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },
  {
    path: 'perfiles',
    loadChildren: () => import ('./modulos/perfiles/perfiles.module').then(m => m.PerfilesModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  },
  {
    path: 'parametros',
    loadChildren: () => import ('./modulos/parametros/parametros.module').then(m => m.ParametrosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
