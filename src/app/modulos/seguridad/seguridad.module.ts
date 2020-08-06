import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RestaurarContrasenaComponent } from './restaurar-contrasena/restaurar-contrasena.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

@NgModule({
  declarations: [LoginComponent, LogoutComponent, RestaurarContrasenaComponent, CambiarContrasenaComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SeguridadModule { }
