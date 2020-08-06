import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearComentariosComponent} from './comentarios/crear-comentarios/crear-comentarios.component';
import { EliminarComentariosComponent} from './comentarios/eliminar-comentarios/eliminar-comentarios.component';
import { ModificarComentariosComponent} from './comentarios/modificar-comentarios/modificar-comentarios.component';
import { MostarComentariosComponent} from './comentarios/mostar-comentarios/mostar-comentarios.component';

import {CrearDenunciaComponent} from './denuncias/crear-denuncia/crear-denuncia.component';
import {EliminarDenunciaComponent} from './denuncias/eliminar-denuncia/eliminar-denuncia.component';

import {CrearMensajeComponent} from './mensajes/crear-mensaje/crear-mensaje.component';
import {EliminarMensajeComponent} from './mensajes/eliminar-mensaje/eliminar-mensaje.component';
import {MostrarMensajeComponent} from './mensajes/mostrar-mensaje/mostrar-mensaje.component';

import {CrearNotificacionComponent} from './notificaciones/crear-notificacion/crear-notificacion.component';
import {MostrarNotificacionComponent} from './notificaciones/mostrar-notificacion/mostrar-notificacion.component';

import {CrearPublicacionComponent} from './publicaciones/crear-publicacion/crear-publicacion.component';
import {EliminarPublicacionComponent} from './publicaciones/eliminar-publicacion/eliminar-publicacion.component';
import {ModificarPublicacionComponent} from './publicaciones/modificar-publicacion/modificar-publicacion.component';
import {MostrarPublicacionComponent} from './publicaciones/mostrar-publicacion/mostrar-publicacion.component';

const routes: Routes = [
  {
    path: 'publicaciones',
    component: MostrarPublicacionComponent
  },
{
  path: 'crear-comentarios',
  component: CrearComentariosComponent
},
{
  path: 'eliminar-comentarios',
  component: EliminarComentariosComponent
},
{
  path: 'modificar-comentarios',
  component: ModificarComentariosComponent
},
{
  path: 'eliminar-comentarios',
  component: EliminarComentariosComponent
},

{
  path: 'crear-denuncias',
  component: CrearDenunciaComponent
},
{
  path: 'eliminar-denuncias',
  component: EliminarDenunciaComponent
},
{
  path: 'crear-mensajes',
  component: CrearMensajeComponent
},
{
  path: 'eliminar-mensajes',
  component: EliminarMensajeComponent
},
{
  path: 'mostrar-mensajes',
  component: MostrarMensajeComponent
},
{
  path: 'crear-notificaciones',
  component: CrearNotificacionComponent
},
{
  path: 'notificaciones',
  component: MostrarNotificacionComponent
},
{
  path: 'crear-publicaciones',
  component: CrearPublicacionComponent
},
{
  path: 'eliminar-publicaciones',
  component: EliminarPublicacionComponent
},
{
  path: 'modificar-publicaciones',
  component: ModificarPublicacionComponent
},
{
  path: 'eliminar-publicaciones',
  component: EliminarPublicacionComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
