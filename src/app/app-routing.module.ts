import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './public/home/default/default.component';

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
    path: '**',
    redirectTo: '/home'
  },
  {
    path: 'seguridad',
    loadChildren: () => import ('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },
  {
    path: 'perfiles',
    loadChildren: () => import ('./modulos/perfiles/perfiles.module').then(m => m.PerfilesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
