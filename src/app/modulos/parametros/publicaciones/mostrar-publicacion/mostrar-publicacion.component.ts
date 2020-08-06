import { Component, OnInit } from '@angular/core';
import { PublicacionesService} from '../../../../servicios/parametros/publicaciones.service'
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';
import { FormsConfig } from 'src/app/config/forms-config';


declare const ShowNotificationMessage: any;
declare const ShowRemoveConfimationPublic: any;

@Component({
  selector: 'app-mostrar-publicacion',
  templateUrl: './mostrar-publicacion.component.html',
  styleUrls: ['./mostrar-publicacion.component.css']
})
export class MostrarPublicacionComponent implements OnInit {

  recordList : PublicacionModel[];
  eliminarPubliId: String ='';

  constructor(
    private service: PublicacionesService
  ) { }

  ngOnInit(): void {
    this.getRecordsList()
  }

  getRecordsList(){
    this.service.getAllRecords().subscribe(records => {
      this.recordList = records;
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
