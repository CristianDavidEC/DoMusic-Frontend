import { Component, OnInit } from '@angular/core';
import { PublicacionesService} from '../../../servicios/parametros/publicaciones.service'
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';
import { FormsConfig } from 'src/app/config/forms-config';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { Router, ActivatedRoute } from '@angular/router';

import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { PerfilModel } from 'src/app/modelos/perfil.model';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { UsuarioModel } from 'src/app/modelos/usuario.model';

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
  perfiles = [];
  usuarios = [];
  recordList : PublicacionModel[];
  reacciones : PerfilModel[];
  eliminarPubliId: String ='';
  publiPorPagina: number = FormsConfig.ELEMENTOS_PAGINA;
  recordIdPublicacion: string = '';
  idUsuarioPubli: String = "";

  private publicacion: any;
  private sub: any;
  private idPublicacionP: any;
  private idUsuarioP: any;
  private ret: any;
  cant: number;


  constructor(
    private SeguridadService: SeguridadService,
    private service: PublicacionesService,
    private serPerfil: PerfilService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.recordIdPublicacion = this.route.snapshot.params['idPublicacion']
   }

  ngOnInit(): void {
    this.perfiles = [new PerfilModel()];
    this.spinner.show();
    this.getRecordsList()
  }

  getRecordsList(){
    this.service.getAllRecords().subscribe(records => {
      this.recordList = records;
      this.recordList.forEach( publicacion =>
        this.serPerfil.getUsuario(publicacion.idUsuario).subscribe(records =>{
          console.log("id Usuario Publicacion:"+ publicacion.idUsuario)
          this.usuarios.push(records)
        }) 
      )
      console.log()
      this.serPerfil.getMusicoP(usaurios.musicoProfesionalId).subscribe( records=>{
        console.log(records)
        //let id = records.usuario.idUsuario
        //this.perfiles.push(records)
        //console.log("id Usuario Usuario:"+id)
      })
      //console.log(this.perfiles)
      setTimeout(() => {
        this.spinner.hide();
      },1000)
    },
    error => {ShowNotificationMessage ("Hubo un problema con la comunicación en el Backend")})
  }

  ConfirmarEliminacion(idPublicacion){
    console.log(this.service.getPubli(idPublicacion))
    this.eliminarPubliId = idPublicacion;
    this.verifPublicacion(this.eliminarPubliId);

    ShowRemoveConfimationPublic();
  }

  reaccionar(Id: String){
    let usuarioId = this.SeguridadService.getUsuarioId();
    let model = new PublicacionModel();
    let lista=[""];
    let bandera= true;
    console.log(usuarioId)
    console.log(lista)

    this.service.getPublicacion(Id).subscribe(data =>{
      model.idPublicacion = data.idPublicacion;
      model.titulo = data.titulo;
      model.contenido = data.contenido;
      model.fecha = data.fecha;
      model.reacciones = (data.reacciones + 1);
      model.idUsuario = data.idUsuario;
      lista=data.userReacciones;
      console.log(lista)
      
      lista.forEach(element => {
        if (element == usuarioId){
          bandera=false;
        }else{
          lista.push((usuarioId).toString());
          model.userReacciones = lista;
        }
      });

      if(bandera == false){
        ShowNotificationMessage('Ya reaccionaste a esta publicacion');
      }else{
        this.service.modificarRegistro(model).subscribe(
          data => {
            ShowNotificationMessage('Reaccionaste exitosamente');
          },
          error => {
            ShowNotificationMessage('Error!');
          }
        ); 
      }
    })
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
  }
}
