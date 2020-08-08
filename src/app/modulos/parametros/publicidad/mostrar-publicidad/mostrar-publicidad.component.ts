import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PublicidadModel } from 'src/app/modelos/parametros/publicidad.model';
import { FormsConfig } from 'src/app/config/forms-config';
import { PublicidadService } from 'src/app/servicios/parametros/publicidad.service';

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfimationPublic: any;
declare const CloseModal: any;

@Component({
  selector: 'app-mostrar-publicidad',
  templateUrl: './mostrar-publicidad.component.html',
  styleUrls: ['./mostrar-publicidad.component.css']
})
export class MostrarPublicidadComponent implements OnInit {

  pagina: number = 1;
  recordList : PublicidadModel[];
  eliminarPubliId: String ='';
  publiPorPagina: number = FormsConfig.ELEMENTOS_PAGINA;

  constructor(
    private service: PublicidadService,
    private spinner: NgxSpinnerService,
  ) { }

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

  ConfirmarEliminacion(idPublicidad){
    this.eliminarPubliId = idPublicidad;
    ShowRemoveConfimationPublic();
  }

  EliminarPubli(){
    this.service.eliminarRegistro(this.eliminarPubliId).subscribe(
      data => {
        CloseModal('confirmarEliminacion');
        ShowNotificationMessage('Se ha eliminado exitosamente');

        this.getRecordsList();
      },
      error => {
        CloseModal('confirmarEliminacion');
        ShowNotificationMessage('Error! no se puede eliminar');
      }
    );
  }

}
