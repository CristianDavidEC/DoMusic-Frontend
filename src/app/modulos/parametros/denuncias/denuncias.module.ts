import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DenunciasRoutingModule } from './denuncias-routing.module';
import { CreardenunciaComponent } from './creardenuncia/creardenuncia.component';
import { EliminarDenunciaComponent } from './eliminar-denuncia/eliminar-denuncia.component';
import { CrearDenunciaComponent } from './crear-denuncia/crear-denuncia.component';


@NgModule({
  declarations: [CreardenunciaComponent, EliminarDenunciaComponent, CrearDenunciaComponent],
  imports: [
    CommonModule,
    DenunciasRoutingModule
  ]
})
export class DenunciasModule { }
