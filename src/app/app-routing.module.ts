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
    path: 'denuncias',
    loadChildren: () => import ('./modulos/denuncias/denuncias.module').then(m => m.DenunciasModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import ('./modulos/mensajes/mensajes.module').then(m => m.MensajesModule)
  },
  {
    path: 'publicidades',
    loadChildren: () => import ('./modulos/publicidad/publicidad.module').then(m => m.PublicidadModule)
  },
  {
    path: 'publicaciones',
    loadChildren: () => import ('./modulos/publicaciones/publicaciones.module').then(m => m.PublicacionesModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import ('./modulos/notificaciones/notificaciones.module').then(m => m.NotificacionesModule)
  },
  {
    path: 'comentarios',
    loadChildren: () => import ('./modulos/comentarios/comentarios.module').then(m => m.ComentariosModule)
  },
  {
    path: 'vista-perfil',
    loadChildren: () => import ('./modulos/vista-perfil/vista-perfil.module').then(m => m.VistaPerfilModule)
  },
  {
    path: 'administradores',
    loadChildren: () => import ('./modulos/administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path: 'encuestas',
    loadChildren: () => import ('./modulos/encuestas/encuestas.module').then(m => m.EncuestasModule)
  },
  {
    path: 'denuncias-p',
    loadChildren: () => import ('./modulos/denuncias-p/denuncias-p.module').then(m => m.DenunciasPModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
