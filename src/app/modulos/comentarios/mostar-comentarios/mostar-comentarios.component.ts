import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComentarioModel} from '../../../modelos/parametros/comentario.model'
import { ComentariosService} from '../../../servicios/parametros/comentarios.service'
import { ActivatedRoute, Router } from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { SeguridadService } from 'src/app/servicios/seguridad.service';


declare const ShowNotificationMessage: any;
declare const ShowRemoveConfimationPublic: any;
declare const CloseModal: any;

@Component({
  selector: 'app-mostar-comentarios',
  templateUrl: './mostar-comentarios.component.html',
  styleUrls: ['./mostar-comentarios.component.css']
})
export class MostarComentariosComponent implements OnInit {

  pagina: number = 1;
  recordList : ComentarioModel[];
  eliminarComentarioId: String ='';
  comentarioPorPagina: number = FormsConfig.ELEMENTOS_PAGINA;
  private sub: any;
  private idUsuarioP: any;
  private ret:any;
   
  
  private idPublicacion: any;

  constructor(
    private SeguridadService: SeguridadService,
    private service: ComentariosService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getRecordsList();

    this.sub = this.route.params.subscribe(params => {
      this.idPublicacion = params['idPublicacion'];
   });
  }

  idpublic:string= this.idPublicacion;

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRecordsList(){
    this.service.getComentarioOb(this.idPublicacion).subscribe(records => {
      console.log("id       "+this.idPublicacion)
      console.log(records)
      this.recordList = records;
      console.log(this.recordList)

      setTimeout(() => {
        this.spinner.hide();
      },1000)
    },
    error => {ShowNotificationMessage ("Hubo un problema con la comunicación en el Backend")})
  }

  ConfirmarEliminacion(idComentario){
    this.eliminarComentarioId = idComentario;
    ShowRemoveConfimationPublic();
  }

  verifComentarioEliminar(eliminarPubliId: String): Boolean{
    this.service.getComen(eliminarPubliId).subscribe(
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

  EliminarComentario(){
    if(this.verifComentarioEliminar(this.eliminarComentarioId)){
      this.service.eliminarRegistro(this.eliminarComentarioId).subscribe(
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
      ShowNotificationMessage('Error, este comentario no es tuyo');
    }
  }


}
