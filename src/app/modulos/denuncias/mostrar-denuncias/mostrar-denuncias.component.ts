import { Component, OnInit } from '@angular/core';
import { DenunciasModel } from 'src/app/modelos/parametros/denuncia.model';
import { FormsConfig } from 'src/app/config/forms-config';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { DenunciasService } from 'src/app/servicios/parametros/denuncias.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilService } from 'src/app/servicios/perfil.service';


declare const ShowNotificationMessage: any;
declare const ShowRemoveConfimationPublic: any;
declare const CloseModal: any;



@Component({
  selector: 'app-mostrar-denuncias',
  templateUrl: './mostrar-denuncias.component.html',
  styleUrls: ['./mostrar-denuncias.component.css']
})
export class MostrarDenunciasComponent implements OnInit {

  
  pagina: number = 1;
  recordListDenuncia : DenunciasModel[];
  eliminarDenId: String ='';
  publiPorPagina: number = FormsConfig.ELEMENTOS_PAGINA;
  recordIdDenuncia: string = '';
  idUsuarioPubli: String = "";
  idUsuarioReportado: any;

  private idUsuarioP: any;
  private ret: any;

  constructor(
    private SeguridadService: SeguridadService,
    private service: DenunciasService,
    private servicePerfil: PerfilService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
   }

  ngOnInit(): void {
    this.spinner.show();
    this.getRecordsList()
  }

  getRecordsList(){
    this.service.getAllRecords().subscribe(records => {
      this.recordListDenuncia = records;
      setTimeout(() => {
        this.spinner.hide();
      },1000)
    },
    error => {ShowNotificationMessage ("Hubo un problema con la comunicación en el Backend")})
  }

  ConfirmarEliminacion(idDenuncia){
    console.log(this.service.getDenuncia(idDenuncia))
    this.eliminarDenId = idDenuncia;
    this.verifPublicacion(this.eliminarDenId);

    ShowRemoveConfimationPublic();
  }

  verifPublicacion(eliminarPubliId: String): Boolean{
    this.service.getDenuncia(eliminarPubliId).subscribe(
      data =>{
        this.idUsuarioP = (data.usuarioId);
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
    if(this.verifPublicacion(this.eliminarDenId)){
      this.service.eliminarRegistro(this.eliminarDenId).subscribe(
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


