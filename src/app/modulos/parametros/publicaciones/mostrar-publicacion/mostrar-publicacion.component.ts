import { Component, OnInit } from '@angular/core';
import { PublicacionesService} from '../../../../servicios/parametros/publicaciones.service'
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';
import { FormsConfig } from 'src/app/config/forms-config';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";

declare const ShowNotificationMessage: any;
declare const ShowRemoveConfimationPublic: any;

@Component({
  selector: 'app-mostrar-publicacion',
  templateUrl: './mostrar-publicacion.component.html',
  styleUrls: ['./mostrar-publicacion.component.css']
})
export class MostrarPublicacionComponent implements OnInit {

  pagina: number = 1;
  recordList : PublicacionModel[];
  eliminarPubliId: String ='';
  publiPorPagina: number = FormsConfig.ELEMENTOS_PAGINA;

  constructor(
    private service: PublicacionesService,
    private spinner: NgxSpinnerService
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

  ConfirmarEliminacion(idPublicacion){
    this.eliminarPubliId = idPublicacion;
    ShowRemoveConfimationPublic();
  }

  EliminarPubli(){
    console.log("Eliminando publicacion por id: " + this.eliminarPubliId);
  }

}
