import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DenunciasRoutingModule } from './denuncias-routing.module';
import { EliminarDenunciaComponent } from './eliminar-denuncia/eliminar-denuncia.component';
import { CrearDenunciaComponent } from './crear-denuncia/crear-denuncia.component';
import { MostrarDenunciasComponent } from './mostrar-denuncias/mostrar-denuncias.component';


@NgModule({
  declarations: [EliminarDenunciaComponent, CrearDenunciaComponent, MostrarDenunciasComponent],
  imports: [
    CommonModule,
    DenunciasRoutingModule
  ]
})
export class DenunciasModule { }
