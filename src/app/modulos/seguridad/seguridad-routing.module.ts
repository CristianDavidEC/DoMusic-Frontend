import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RestaurarContrasenaComponent} from './restaurar-contrasena/restaurar-contrasena.component';
import {CambiarContrasenaComponent} from './cambiar-contrasena/cambiar-contrasena.component';
import { DesautenticadoGuard} from '../../guardianes/desautenticado.guard'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, 
    canActivate: [DesautenticadoGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'restaurarContrasena',
    component: RestaurarContrasenaComponent
  },
  {
    path: 'cambiarContrasena',
    component: CambiarContrasenaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
