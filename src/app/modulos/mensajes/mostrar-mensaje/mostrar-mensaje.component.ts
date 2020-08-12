import { Component, OnInit } from '@angular/core';
import { MensajeModel } from 'src/app/modelos/parametros/mensaje.model';
import { FormsConfig } from 'src/app/config/forms-config';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { MensajesService } from 'src/app/servicios/parametros/mensajes.service';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfimationPublic: any;
declare const CloseModal: any;


@Component({
  selector: 'app-mostrar-mensaje',
  templateUrl: './mostrar-mensaje.component.html',
  styleUrls: ['./mostrar-mensaje.component.css']
})
export class MostrarMensajeComponent implements OnInit {

  pagina: number = 1;
  recordList : MensajeModel[];
  eliminarMensajeiId: String ='';
  publiPorPagina: number = FormsConfig.ELEMENTOS_PAGINA;
  recordIdMusico: string = '';
  idUsuarioPubli: String = "";

  private publicacion: any;
  private sub: any;
  private idPublicacionP: any;
  private idUsuarioP: any;
  private ret: any;
  cant: number;


  constructor(
    private SeguridadService: SeguridadService,
    private service: MensajesService,
    private serPerfil: PerfilService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.recordIdMusico = this.route.snapshot.params['idMusicoProfesional']
   }

  ngOnInit(): void {
    this.spinner.show();
    this.getRecordsList()
  }

  getRecordsList(){
    this.service.getAllRecords().subscribe(records => {
      this.recordList = records;
      setTimeout(() => {
        this.spinner.hide();
      },1000)
    },
    error => {ShowNotificationMessage ("Hubo un problema con la comunicación en el Backend")})
  }

  ConfirmarEliminacion(idMusicoProfesional){
    this.eliminarMensajeiId = idMusicoProfesional;
    this.verifPublicacion(this.eliminarMensajeiId);

    ShowRemoveConfimationPublic();
  }

  verifPublicacion(eliminarPubliId: String): Boolean{
    this.service.getPublicacion2(eliminarPubliId).subscribe(
      data =>{
        this.idUsuarioP = (data.idRemitente);
      },
      error =>{
        ShowNotificationMessage('Hubo un error');
        this.router.navigate(["/perfiles/profesionales"])
      }
    )
    if (this.idUsuarioP == this.SeguridadService.getUsuarioId()){
      this.ret = true;
    }else{
      this.ret = false;
    }
      return this.ret;
  } 


  EliminarPubli(){
    if(this.verifPublicacion(this.eliminarMensajeiId)){
      this.service.eliminarRegistro(this.eliminarMensajeiId).subscribe(
        data => {
          CloseModal('confirmarEliminacion');
          ShowNotificationMessage('Se ha eliminado exitosamente');
          this.getRecordsList();
        },
        error => {
          ShowNotificationMessage('Error!');
        }
      );
    }else{
      CloseModal('confirmarEliminacion');
      ShowNotificationMessage('Error, esta publicacion no es tuya');
    }
  }

}
