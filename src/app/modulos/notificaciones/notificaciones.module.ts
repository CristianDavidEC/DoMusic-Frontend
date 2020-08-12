import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionesRoutingModule } from './notificaciones-routing.module';
import { CrearNotificacionComponent } from './crear-notificacion/crear-notificacion.component';
import { MostrarNotificacionComponent } from './mostrar-notificacion/mostrar-notificacion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [CrearNotificacionComponent, MostrarNotificacionComponent],
  imports: [
    CommonModule,
    NotificacionesRoutingModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ]
})
export class NotificacionesModule { }
