import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CrearAdministradorComponent } from './crear-administrador/crear-administrador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CrearAdministradorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministradorModule { }
