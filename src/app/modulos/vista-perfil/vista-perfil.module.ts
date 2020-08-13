import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaPerfilRoutingModule } from './vista-perfil-routing.module';
import { VistaPerfilComponent } from './vista-perfil.component';


@NgModule({
  declarations: [
    VistaPerfilComponent
  ],
  imports: [
    CommonModule,
    VistaPerfilRoutingModule
  ]
})
export class VistaPerfilModule { }
