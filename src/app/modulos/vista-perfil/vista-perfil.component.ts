import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PerfilModel } from 'src/app/modelos/perfil.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';
import { PublicacionesService } from 'src/app/servicios/parametros/publicaciones.service';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.css']
})
export class VistaPerfilComponent implements OnInit {

  estaLogueado: Boolean = false;
  exisImg: Boolean = false;
  role: String = "";
  subscription: Subscription;
  perfilUsuario: PerfilModel;
  publicacionesUsuario: PublicacionModel;

  constructor(
    private service: SeguridadService,
    private publicacionService: PublicacionesService,
    private servicePefil: PerfilService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.service.getUserData().subscribe(data => {
      this.estaLogueado = data.estaLogueado;
      this.role = data.rol;
    });

    this.perfilUsuario = new PerfilModel();
    this.getPerfilMusico();
    this.getPublicacionesUsuario();
  }

  getPerfilMusico() {
    if (this.service.getSession()) {
      let idPerfil = this.service.getIdPerfil();
      this.servicePefil.getMusicoP(idPerfil).subscribe(records => {
        this.perfilUsuario = records;
        setTimeout(() => {
          this.spinner.hide();
        }, 1000)
      },
        error => { ShowNotificationMessage("Hubo un problema con la comunicación en el Backend") })
    }
  }

  getPublicacionesUsuario(){
    this.publicacionService.getPublicacionUsuario(this.service.getUsuarioId()).subscribe(records => {
      this.publicacionesUsuario = records;
      setTimeout(() => {
        this.spinner.hide();
      },1000)
    },
    error => {ShowNotificationMessage ("Hubo un problema con la comunicación en el Backend")})
  }

}
