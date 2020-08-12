import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComentariosService } from 'src/app/servicios/parametros/comentarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioModel } from 'src/app/modelos/parametros/comentario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-comentarios',
  templateUrl: './crear-comentarios.component.html',
  styleUrls: ['./crear-comentarios.component.css']
})
export class CrearComentariosComponent implements OnInit {

  private sub: any;
  private idPublicacion: any;
  fgValidator: FormGroup;
  private bandera: any;

  constructor(
    private fb: FormBuilder,
    private servicio: ComentariosService,
    private servicioSeguridad: SeguridadService,
    private route: ActivatedRoute,
    private router: Router,
    private seguridadSericio: SeguridadService

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.sub = this.route.params.subscribe(params => {
      this.idPublicacion = params['idPublicacion'];
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      contenido: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  crearComentario(){
    console.log(this.idPublicacion)
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getComentariosDatos();
        this.servicio.guardarComentario(model).subscribe(data => {
          if(data){
            ShowNotificationMessage('Registro exitoso');
            this.router.navigate(['/parametros/publicaciones']);
          }
          else{
            ShowNotificationMessage('Error!');
          }
        });      
    }
  }

  get fgv(){
    return this.fgValidator.controls;
  }

  getComentariosDatos(): ComentarioModel{
    let model = new ComentarioModel();
    model.contenido = this.fgv.contenido.value;
    let day = new Date;
    model.hijo = false;
    model.fecha = (`Fecha:${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()} Hora:${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`);
    model.publicacionId = this.idPublicacion;
    model.usuarioId = (this.servicioSeguridad.getUsuarioId()).toString();

    return model;
  }

  // Comentario para responder a un cometario ya respondido

  getComenComentario(): ComentarioModel{
    let model = new ComentarioModel();
    model.contenido = this.fgv.contenido.value;
    let day = new Date;
    model.hijo = true;
    model.fecha = (`Fecha:${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()} Hora:${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`);
    this.servicio.getComen(this.idPublicacion).subscribe(data=>{
      this.bandera=data.publicacionId
    })
    model.publicacionId = this.bandera;
    model.usuarioId = (this.servicioSeguridad.getUsuarioId()).toString();

    return model;
  
  }

  /* validHijo(){
    this.servicio.getComen(this.idPublicacion).subscribe(data=>{
      this.bandera=data.hijo
    },error => {
      ShowNotificationMessage('Error!');
    })

    if (this.bandera == true){
      return false;
    }else {
      return true;
    }
  } */

}
