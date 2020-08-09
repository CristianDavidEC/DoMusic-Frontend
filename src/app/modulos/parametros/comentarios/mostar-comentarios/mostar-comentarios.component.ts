import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/forms-config';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComentarioModel} from '../../../../modelos/parametros/comentario.model'
import { ComentariosService} from '../../../../servicios/parametros/comentarios.service'
import { ActivatedRoute } from '@angular/router';


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
  
  private idPublicacion: any;

  constructor(
    private service: ComentariosService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getRecordsList()

    this.sub = this.route.params.subscribe(params => {
      this.idPublicacion = params['idPublicacion'];
      alert(this.idPublicacion)
   });
  }

  idpublic:string= this.idPublicacion;

  ngOnDestroy() {
    this.sub.unsubscribe();
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

  ConfirmarEliminacion(idComentario){
    this.eliminarComentarioId = idComentario;
    ShowRemoveConfimationPublic();
  }

  EliminarComentario(){
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
  }


}
