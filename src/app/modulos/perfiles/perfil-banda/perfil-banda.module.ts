import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilBandaRoutingModule } from './perfil-banda-routing.module';
import { CrearBandaComponent } from './crear-banda/crear-banda.component';
import { EliminarBandaComponent } from './eliminar-banda/eliminar-banda.component';
import { ModificarBandaComponent } from './modificar-banda/modificar-banda.component';
import { MostrarBandaComponent } from './mostrar-banda/mostrar-banda.component';


@NgModule({
  declarations: [CrearBandaComponent, EliminarBandaComponent, ModificarBandaComponent, MostrarBandaComponent],
  imports: [
    CommonModule,
    PerfilBandaRoutingModule
  ]
})
export class PerfilBandaModule { }
