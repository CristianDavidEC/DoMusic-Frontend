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

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: ComentariosService,
    private route: ActivatedRoute,
    private router: Router,
    private seguridadSericio: SeguridadService

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      contenido: ['', [Validators.required, Validators.minLength(2)]],
      idPublicacion: ['', [Validators.required]],
      idUsuario: ['', [Validators.required]],
    });
  }

  crearComentario(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getComentariosDatos();
        this.servicio.guardarNuevoRegistro(model).subscribe(data => {
          if(data){
            ShowNotificationMessage('Registro exitoso');
            this.router.navigate(['/parametros/comentarios']);
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
    model.fecha = (`Fecha:${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()} Hora:${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`);
    model.idPublicacion = this.fgv.idPublicacion.value;
    model.idUsuario = "Nada en el momento";
    model.hijo = this.fgv.hijo.value;

    return model;
  }

}
