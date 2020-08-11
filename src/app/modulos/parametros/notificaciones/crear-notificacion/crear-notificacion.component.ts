import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NotificacionModel} from '../../../../modelos/parametros/notificacion.model'
import {NotificacionService} from '../../../../servicios/parametros/notificacion.service'


declare const ShowNotificationMessage:any;


@Component({
  selector: 'app-crear-notificacion',
  templateUrl: './crear-notificacion.component.html',
  styleUrls: ['./crear-notificacion.component.css']
})
export class CrearNotificacionComponent implements OnInit {

  fgValidator: FormGroup;
  cargarArchivoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicioNotificacion : NotificacionService,
    private servicio: SeguridadService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      tipo:['', [Validators.required, Validators.minLength(2)]],
    });
  }

  crearNotificacion(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPubliDatos();
        this.servicioNotificacion.guardarNotificacion(model).subscribe(data => {
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


  getPubliDatos(): NotificacionModel{
    let model = new NotificacionModel();
    let day = new Date;
    model.fecha = (`Fecha:${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()} Hora:${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`)
    
    return model;
  }


}
