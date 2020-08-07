import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RestaurarContrasenaComponent} from './restaurar-contrasena/restaurar-contrasena.component';
import {CambiarContrasenaComponent} from './cambiar-contrasena/cambiar-contrasena.component';
import { DesautenticadoGuard} from '../../guardianes/desautenticado.guard'
import{ AutUsuarioGuard } from '../../guardianes/aut-usuario.guard'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, 
    canActivate: [DesautenticadoGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AutUsuarioGuard]
  },
  {
    path: 'restaurarContrasena',
    component: RestaurarContrasenaComponent,
    canActivate: [DesautenticadoGuard]
  },
  {
    path: 'cambiarContrasena',
    component: CambiarContrasenaComponent,
    canActivate: [AutUsuarioGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
