import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../../servicios/parametros/publicaciones.service'
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';
import { FormsConfig } from 'src/app/config/forms-config';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { Router, ActivatedRoute } from '@angular/router';

import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { PerfilModel } from 'src/app/modelos/perfil.model';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { async } from 'rxjs/internal/scheduler/async';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfimationPublic: any;
declare const CloseModal: any;


@Component({
  selector: 'app-mostrar-publicacion',
  templateUrl: './mostrar-publicacion.component.html',
  styleUrls: ['./mostrar-publicacion.component.css']
})
export class MostrarPublicacionComponent implements OnInit {

  pagina: number = 1;
  perfiles1 = [];
  perfiles2 = [];
  usuarios = [];
  recordList: PublicacionModel[];
  reacciones: PerfilModel[];
  eliminarPubliId: String = '';
  publiPorPagina: number = FormsConfig.ELEMENTOS_PAGINA;
  recordIdPublicacion: string = '';
  idUsuarioPubli: String = "";

  private idUsuarioP: any;
  private ret: any;
  cant: number;

  constructor(
    private SeguridadService: SeguridadService,
    private service: PublicacionesService,
    private serPerfil: PerfilService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.recordIdPublicacion = this.route.snapshot.params['idPublicacion']
  }

  ngOnInit(): void {
    this.perfiles1 = [];
    this.spinner.show();
    //this.getRecordsList1()
    this.getRecordsList()
  }

  getRecordsList() {
    this.service.getAllRecords().subscribe(records => {
      this.recordList = records;
      let usuarios = []

      for (let publi of this.recordList) {
        this.serPerfil.getUsuario2(publi.idUsuario).subscribe(records => {
          this.perfiles1.push(records)
        })
      }
      setTimeout(() => {
        this.spinner.hide();
      }, 1000)
    },
      error => { ShowNotificationMessage("Hubo un problema con la comunicación en el Backend") })
      
  }

  ConfirmarEliminacion(idPublicacion) {
    this.eliminarPubliId = idPublicacion;
    this.verifPublicacion(this.eliminarPubliId);

    ShowRemoveConfimationPublic();
  }

  reaccionar(Id: String) {
    let usuarioId = this.SeguridadService.getUsuarioId();
    let model = new PublicacionModel();
    let lista = [""];
    let bandera = true;

    this.service.getPublicacion(Id).subscribe(data => {
      model.idPublicacion = data.idPublicacion;
      model.titulo = data.titulo;
      model.contenido = data.contenido;
      model.fecha = data.fecha;
      model.reacciones = (data.reacciones + 1);
      model.idUsuario = data.idUsuario;
      model.image = data.image;
      lista = data.userReacciones;


      lista.forEach(element => {
        if (element == usuarioId) {
          bandera = false;
        } else {
          lista.push((usuarioId).toString());
          model.userReacciones = lista;
        }
      });

      if (bandera == false) {
        ShowNotificationMessage('Ya reaccionaste a esta publicacion');
      } else {
        this.service.modificarRegistro(model).subscribe(
          data => {
            ShowNotificationMessage('Reaccionaste exitosamente');
          },
          error => {
            ShowNotificationMessage('Error!');
          }
        );
      }
    })
  }

  verifPublicacion(eliminarPubliId: String): Boolean {
    this.service.getPublicacion2(eliminarPubliId).subscribe(
      data => {
        this.idUsuarioP = (data.idUsuario);
      },
      error => {
        ShowNotificationMessage('Hubo un error');
        this.router.navigate(["/parametros/publicaciones"])
      }
    )

    let c;
    this.SeguridadService.getUserData().subscribe(data=>{
      c = data.rol;
    })

    if (this.idUsuarioP == this.SeguridadService.getUsuarioId()) {
      this.ret = true;
    } if(c == "Administrador"){
      this.ret = true;
    }else {
      this.ret = false;
    }
    return this.ret;
  }


  EliminarPubli() {
    if (this.verifPublicacion(this.eliminarPubliId)) {
      this.service.eliminarRegistro(this.eliminarPubliId).subscribe(
        data => {
          CloseModal('confirmarEliminacion');
          ShowNotificationMessage('Se ha eliminado exitosamente');
          this.getRecordsList();
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
