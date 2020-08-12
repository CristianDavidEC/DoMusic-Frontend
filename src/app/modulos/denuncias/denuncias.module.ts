import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DenunciasRoutingModule } from './denuncias-routing.module';
import { EliminarDenunciaComponent } from './eliminar-denuncia/eliminar-denuncia.component';
import { CrearDenunciaComponent } from './crear-denuncia/crear-denuncia.component';
import { MostrarDenunciasComponent } from './mostrar-denuncias/mostrar-denuncias.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import {NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule} from 'ngx-pagination';
import { ListarDenunciasComponent } from './listar-denuncias/listar-denuncias.component';



@NgModule({
  declarations: [EliminarDenunciaComponent, CrearDenunciaComponent, MostrarDenunciasComponent, ListarDenunciasComponent],
  imports: [
    CommonModule,
    DenunciasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
  ]
})
export class DenunciasModule { }
