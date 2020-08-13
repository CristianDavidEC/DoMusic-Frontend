import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { MostrarEncuestaComponent } from './mostrar-encuesta/mostrar-encuesta.component';

const routes: Routes = [
  {
    path: 'crear-encuestas',
    component: CrearEncuestaComponent
  },
  {
    path: 'mostrar-encuestas',
    component: MostrarEncuestaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestasRoutingModule { }
