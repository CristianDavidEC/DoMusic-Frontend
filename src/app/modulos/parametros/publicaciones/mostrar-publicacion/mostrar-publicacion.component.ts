import { Component, OnInit } from '@angular/core';
import { PublicacionesService} from '../../../../servicios/parametros/publicaciones.service'
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';
import { FormsConfig } from 'src/app/config/forms-config';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
=======
import { SeguridadService } from 'src/app/servicios/seguridad.service';
>>>>>>> 3d17436d3c4c992a1004493f91e377bb388d0070

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
  recordList : PublicacionModel[];
  eliminarPubliId: String ='';
  publiPorPagina: number = FormsConfig.ELEMENTOS_PAGINA;
  recordIdPublicacion: string = '';
  idUsuarioPubli: String = "";


  private sub: any;
  
  private idPublicacion: any;

  constructor(
    private SeguridadService: SeguridadService,
    private service: PublicacionesService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.recordIdPublicacion = this.route.snapshot.params['idPublicacion']
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

  ConfirmarEliminacion(idPublicacion){
    this.eliminarPubliId = idPublicacion;
    ShowRemoveConfimationPublic();
  }

  VerIdUseIdPubli():Boolean{
    let publicacion = this.service.getPublicacion(this.recordIdPublicacion).subscribe(
      data => {
        this.idUsuarioPubli = data.fecha;
      }
    )
    
    return true
  }

  EliminarPubli(){
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
  }

}
