import { Component, OnInit } from '@angular/core';
import { PerfilesModule } from '../perfiles.module';
import { FormsConfig } from 'src/app/config/forms-config';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilModel } from 'src/app/modelos/perfil.model';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfimationPublic: any;
declare const CloseModal: any;

@Component({
  selector: 'app-mostrar-perfil',
  templateUrl: './mostrar-perfil.component.html',
  styleUrls: ['./mostrar-perfil.component.css']
})
export class MostrarPerfilComponent implements OnInit {

  pagina: number = 1;
  recordList : PerfilesModule[];
  perfilUsuario: PerfilModel;
  eliminarPubliId: String ='';
  publiPorPagina: number = FormsConfig.ELEMENTOS_PAGINA;
  recordIdMusicoP: string = '';
  idUsuarioPubli: String = "";


  private publicacion: any;
  private sub: any;
  private idMusicoP: any;
  private idUsuarioP: any;
  private ret: any;

  constructor(
    private SeguridadService: SeguridadService,
    private service: PerfilService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.recordIdMusicoP = this.route.snapshot.params['idMusicoProfesional']
   }

  ngOnInit(): void {
    this.spinner.show();
    this.getRecordsList();
    this.getPerfilUsuario()
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

  getPerfilUsuario(){
    let idPerfil = this.SeguridadService.getIdPerfil().toString();
    this.service.getMusico(idPerfil).subscribe(records =>{
    });    
  }


  /* ConfirmarEliminacion(idPublicacion){
    console.log(this.service.getPubli(idPublicacion))
    this.eliminarPubliId = idPublicacion;
    this.verifPublicacion(this.eliminarPubliId);

    ShowRemoveConfimationPublic();
  }

  verifPublicacion(eliminarPubliId: String): Boolean{
    this.service.getPublicacion2(eliminarPubliId).subscribe(
      data =>{
        this.idUsuarioP = (data.idUsuario);
      },
      error =>{
        ShowNotificationMessage('Hubo un error');
        this.router.navigate(["/parametros/publicaciones"])
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
    console.log("todo melo? "+this.verifPublicacion(this.eliminarPubliId))
    if(this.verifPublicacion(this.eliminarPubliId)){
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
    }else{
      CloseModal('confirmarEliminacion');
      ShowNotificationMessage('Error, esta publicacion no es tuya');
    }
  } */

}
