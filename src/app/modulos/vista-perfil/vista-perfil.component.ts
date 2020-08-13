import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PerfilModel } from 'src/app/modelos/perfil.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';
import { PublicacionesService } from 'src/app/servicios/parametros/publicaciones.service';
import { Router } from '@angular/router';

declare const ShowNotificationMessage: any;
declare const CloseModal: any;
declare const ShowRemoveConfimationPublic: any;



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
  idMusicoProfesional: String ="";
  eliminarPubliId: String = '';


  private idUsuarioP: any;
  private ret: any;


  constructor(
    private service: SeguridadService,
    private publicacionService: PublicacionesService,
    private servicePefil: PerfilService,
    private spinner: NgxSpinnerService,
    private router: Router,


  ) {     this.idMusicoProfesional = (this.service.getUsuarioId()).toString();
  }

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

  ConfirmarEliminacion(idPublicacion) {
    this.eliminarPubliId = idPublicacion;
    this.verifPublicacion(this.eliminarPubliId);

    ShowRemoveConfimationPublic();
  }

  verifPublicacion(eliminarPubliId: String): Boolean {
    this.publicacionService.getPublicacion2(eliminarPubliId).subscribe(
      data => {
        this.idUsuarioP = (data.idUsuario);
      },
      error => {
        ShowNotificationMessage('Hubo un error');
        this.router.navigate(["/parametros/publicaciones"])
      }
    )

    let c;
    this.service.getUserData().subscribe(data=>{
      c = data.rol;
    })

    console.log(this.idUsuarioP)
    console.log(this.service.getUsuarioId())

    if (this.idUsuarioP == this.service.getUsuarioId()) {
      this.ret = true;
    }else if(c == "Administrador"){
      this.ret = true;
    }else {
      this.ret = false;
    }
    return this.ret;

    console.log(this.ret)
  }


  EliminarPubli() {
    if (this.verifPublicacion(this.eliminarPubliId)) {
      this.publicacionService.eliminarRegistro(this.eliminarPubliId).subscribe(
        data => {
          CloseModal('confirmarEliminacion');
          ShowNotificationMessage('Se ha eliminado exitosamente');
        },
        error => {
          ShowNotificationMessage('Error!');
        }
      );
    } else {
      CloseModal('confirmarEliminacion');
      ShowNotificationMessage('Error, esta publicacion no es tuya');
    }
  }

}
