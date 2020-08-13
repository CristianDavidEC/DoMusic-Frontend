import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import {NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule} from 'ngx-pagination';

import { DenunciasPRoutingModule } from './denuncias-p-routing.module';
import { CrerDenunciaComponent } from './crer-denuncia/crer-denuncia.component';
import { MostrarDenunciaComponent } from './mostrar-denuncia/mostrar-denuncia.component';


@NgModule({
  declarations: [CrerDenunciaComponent, MostrarDenunciaComponent],
  imports: [
    CommonModule,
    DenunciasPRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
  ]
})
export class DenunciasPModule { }
