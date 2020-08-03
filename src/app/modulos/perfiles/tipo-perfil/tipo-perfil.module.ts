import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { TipoPerfilRoutingModule } from './tipo-perfil-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TipoPerfilRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TipoPerfilModule { }
