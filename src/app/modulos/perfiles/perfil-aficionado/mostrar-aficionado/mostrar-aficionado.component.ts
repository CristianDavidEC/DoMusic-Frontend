import { Component, OnInit } from '@angular/core';
import { AficionadoModel } from 'src/app/modelos/aficionado.model';
import { FormsConfig } from 'src/app/config/forms-config';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-mostrar-aficionado',
  templateUrl: './mostrar-aficionado.component.html',
  styleUrls: ['./mostrar-aficionado.component.css']
})
export class MostrarAficionadoComponent implements OnInit {

  pagina: number = 1;
  recordList : AficionadoModel[];
  eliminarPubliId: String ='';
  publiPorPagina: number = FormsConfig.ELEMENTOS_PAGINA;
  recordIdPublicacion: string = '';
  idUsuarioPubli: String = "";


  private publicacion: any;
  private sub: any;
  private idPublicacionP: any;
  private idUsuarioP: any;
  private ret: any;

  constructor(
    private SeguridadService: SeguridadService,
    private service: PerfilService,
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
    this.service.getAllRecordsAficionado().subscribe(records => {
      this.recordList = records;
      setTimeout(() => {
        this.spinner.hide();
      },1000)
    },
    error => {ShowNotificationMessage ("Hubo un problema con la comunicación en el Backend")})
  }
}
