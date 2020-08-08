import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentariosRoutingModule } from './comentarios-routing.module';
import { CrearComentariosComponent } from './crear-comentarios/crear-comentarios.component';
import { ModificarComentariosComponent } from './modificar-comentarios/modificar-comentarios.component';
import { EliminarComentariosComponent } from './eliminar-comentarios/eliminar-comentarios.component';
import { MostarComentariosComponent } from './mostar-comentarios/mostar-comentarios.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxPaginationModule} from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    CrearComentariosComponent,
    ModificarComentariosComponent, 
    EliminarComentariosComponent, 
    MostarComentariosComponent
  ],
  imports: [
    CommonModule,
    ComentariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerService,
    NgxPaginationModule,
    BrowserModule
  ]
})
export class ComentariosModule { }
