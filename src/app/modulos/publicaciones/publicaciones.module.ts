import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { ModificarPublicacionComponent } from './modificar-publicacion/modificar-publicacion.component';
import { MostrarPublicacionComponent } from './mostrar-publicacion/mostrar-publicacion.component';
import {NotificacionesRoutingModule} from '../notificaciones/notificaciones-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
  CrearPublicacionComponent, 
  ModificarPublicacionComponent, 
  MostrarPublicacionComponent,
],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,
    NotificacionesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ]
})
export class PublicacionesModule { }
